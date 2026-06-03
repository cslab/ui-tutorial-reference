import React, {useEffect} from 'react';

import {
    classNames,
    ImmutablePropTypes,
    PropTypes,
    ReactRedux,
} from 'cs-web-components-externals';

import {loadStateColors} from '../actions/state-colors-actions';

import {
    ContentBlock,
    Navigation,
    Thumbnail,
    getIcon,
} from 'cs-web-components-base';
import {formatStr} from '../i18n.js';
import {prefixNS} from '../helpers.js';

const {useSelector, useDispatch} = ReactRedux;

const {Link} = Navigation;

/**
  * This component displays the user or a placeholder
  * icon.
  *
  * @reactComponent DisplayUser
  * @reactProperty {string} userName - The user's name
  */
export function DisplayUser(props) {
    const {
        className,
        label,
        userName,
        orientation = 'left',
        fallbackLabel,
      } = props;

    const labelElement = (
        <span className={prefixNS('DisplayUser__label')}>
          {userName ?
           formatStr(label, {userName}) :
           formatStr(fallbackLabel)}
        </span>
      );

        const fallbackResource = getIcon(
        userName ?
        'csweb_person_fallback' :
        'cst_ticket_not_assigned'
      );

        const thumbnailClass = classNames(
        prefixNS('DisplayUser__thumbnail'),
        {[prefixNS('DisplayUser__thumbnail--not-assigned')]: !userName}
      );
        const icon = (
        <Thumbnail
          className={thumbnailClass}
          size={'sm'}
          fallbackSrc={fallbackResource}/>
      );

        const combinedClassNames = classNames(className, prefixNS('DisplayUser'));
        return (
      orientation === 'left' ? (
        <div className={combinedClassNames}>
          {icon}
          {labelElement}
        </div>
      ) : (
        <div className={combinedClassNames}>
          {labelElement}
          {icon}
        </div>
      )
        );
}

DisplayUser.propTypes = {
    className: PropTypes.string,
    // userName and fallbackLabel must not both be undefined
    userName: PropTypes.string,
    label: PropTypes.string.isRequired,
    fallbackLabel: PropTypes.string,
    orientation: PropTypes.oneOf(['left', 'right']),
};


function StateTag(props) {
    const {
          contextObject,
          stateColor
      } = props;
    const classnames = classNames(
          "cs-web-components-base-generic-tag",
          "cs-web-components-base-generic-tag-default",
          "cs-web-components-base-generic-tag-none-click"
      );
    return (
           <div className={prefixNS('StateTag')}>
               <div
                   className={classnames}
                   style={{'backgroundColor': stateColor}}
               >
                   <span style={{'color': 'black'}}>
                       {contextObject.get('joined_status')}
                   </span>
               </div>
           </div>
    );
}

StateTag.propTypes = {
    contextObject: ImmutablePropTypes.map.isRequired,
    stateColor: PropTypes.string
};


function TicketDetailsHeader(props) {
    const {contextObject} = props;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadStateColors(contextObject.get('system:classname')));
    }, [dispatch, contextObject]);

    const stateColor = useSelector(state =>
        state[prefixNS('stateColors')].getIn(
            [
                contextObject.get('system:classname'),
                contextObject.get('cdb_objektart'),
                contextObject.get('status').toString()
            ],
            ''
        )
    );

    return (
        <div className={prefixNS('TicketDetailsHeader')}>
          <StateTag contextObject={contextObject} stateColor={stateColor}/>
          <Link to={contextObject.get('system:ui_link')}>
            {contextObject.get('id')}
          </Link>
          <span className={prefixNS('TicketDetailsHeader__title')}>
            {contextObject.get('title')}
          </span>
          <DisplayUser
                 userName={contextObject.get('mapped_assigned_to')}
                 label={'ticket_assigned_to'}
                 fallbackLabel={'ticket_not_assigned'}
                 orientation={'right'} />
        </div>
        );
}

TicketDetailsHeader.propTypes = {
    contextObject: ImmutablePropTypes.map.isRequired,
};

function TicketDetails(props) {
    const {contextObject, collapsed, onSelect} = props;

    function handleSelect() {
        if (onSelect) {
            onSelect(contextObject);
        }
    }

    return (
      <div className={prefixNS('TicketDetails')}
           onClick={handleSelect}>
        <TicketDetailsHeader contextObject={contextObject} />
        {collapsed ? null : (
          <React.Fragment>
            <div className={prefixNS('TicketDetails__content')}>
              {contextObject.get('cst_ticket_description_txt')}
            </div>
            <DisplayUser
              className={prefixNS('TicketDetails__footer')}
              userName={contextObject.get('mapped_raised_by')}
              label={'ticket_raised_by'} />
          </React.Fragment>)}
      </div>
    );
}

TicketDetails.propTypes = {
    contextObject: ImmutablePropTypes.map.isRequired,
    collapsed: PropTypes.bool,
};

export default TicketDetails;


export function TicketDetailsBlock(props) {
    const {
    contextObject
  } = props;

    return (
    <ContentBlock title={contextObject.get('id')}>
      <ContentBlock.Body>
        <TicketDetails contextObject={contextObject} />
      </ContentBlock.Body>
    </ContentBlock>
    );
}

TicketDetailsBlock.propTypes = {
    contextObject: ImmutablePropTypes.map.isRequired,
};
