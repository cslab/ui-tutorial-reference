import React from 'react';

import {
    classNames,
    ImmutablePropTypes,
    PropTypes,
    connect
} from 'cs-web-components-externals';

import * as StateColorActions from '../actions/state-colors-actions';

import {
    ContentBlock,
    Navigation,
    Thumbnail,
    getIcon,
} from 'cs-web-components-base';
import {formatStr} from '../i18n.js';
import {prefixNS} from '../helpers.js';

const {Link} = Navigation;

/**
  * This component displays the user or a placeholder
  * icon.
  *
  * @reactComponent DisplayUser
  * @reactProperty {string} userName - The user's name
  */
export class DisplayUser extends React.PureComponent {
    render() {
        const {
        className,
        label,
        userName,
        orientation,
        fallbackLabel,
      } = this.props;

        const labelElement = (
        <span className={prefixNS('DisplayUser-label')}>
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
        prefixNS('DisplayUser-thumbnail'),
        {[prefixNS('DisplayUser-thumbnail--not_assigned')]: !userName}
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
}

DisplayUser.propTypes = {
    className: PropTypes.string,
    // userName and fallbackLabel must not both be undefined
    userName: PropTypes.string,
    label: PropTypes.string.isRequired,
    fallbackLabel: PropTypes.string,
    orientation: PropTypes.oneOf(['left', 'right']),
};

DisplayUser.defaultProps = {
    orientation: 'left',
};


class StateTag extends React.PureComponent {
    render() {
        const {
          contextObject,
          stateColor
      } = this.props;
        const classnames = classNames(
          "cs-web-components-base-generic-tag",
          "cs-web-components-base-generic-tag-primary",
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
}

StateTag.propTypes = {
    contextObject: ImmutablePropTypes.map.isRequired,
    stateColor: PropTypes.string
};


class _TicketDetailsHeader extends React.PureComponent {

    componentDidMount() {
        const {loadStateColors, contextObject} = this.props;
        loadStateColors(contextObject.get('system:classname'));
    }

    render() {
        const {
           contextObject,
           stateColor,
       } = this.props;

        return (
        <div className={prefixNS('TicketDetailsHeader')}>
          <StateTag contextObject={contextObject} stateColor={stateColor}/>
          <Link to={contextObject.get('system:ui_link')}>
            {contextObject.get('id')}
          </Link>
          <span className={prefixNS('TicketDetailsHeader-title')}>
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
  }

_TicketDetailsHeader.propTypes = {
    contextObject: ImmutablePropTypes.map.isRequired,
    loadStateColors: PropTypes.func,
    stateColor: PropTypes.string
};


function TicketDetailsHeader_mapStateToProps(state, props) {
    const contextObj = props.contextObject;
    const stateColor = state[prefixNS('stateColors')].getIn(
        [
            contextObj.get('system:classname'),
            contextObj.get('cdb_objektart'),
            contextObj.get('status').toString()
        ],
      ''
  );
    return {
        stateColor
    };
}


const TicketDetailsHeader = connect(
  TicketDetailsHeader_mapStateToProps, {
      ...StateColorActions
  }
)(_TicketDetailsHeader);

export class TicketDetailsBody extends React.PureComponent {

    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect() {
        const {onSelect, contextObject} = this.props;
        if (onSelect) {
            onSelect(contextObject);
        }
    }


    render() {
        const {contextObject, collapsed} = this.props;
        return (
      <div className={prefixNS('TicketDetailsBody')}
           onClick={this.onSelect}>
        <TicketDetailsHeader contextObject={contextObject} />
        {collapsed ? null : (
          <React.Fragment>
            <div className={prefixNS('TicketDetails-content')}>
              {contextObject.get('cst_ticket_description_txt')}
            </div>
            <DisplayUser
              className={prefixNS('TicketDetails-footer')}
              userName={contextObject.get('mapped_raised_by')}
              label={'ticket_raised_by'} />
          </React.Fragment>)}
      </div>
        );
    }
}

TicketDetailsBody.propTypes = {
    contextObject: ImmutablePropTypes.map.isRequired,
    collapsed: PropTypes.bool,
};


class TicketDetails extends React.PureComponent {
    render() {
        const {
    contextObject
  } = this.props;

        return (
    <ContentBlock title={contextObject.get('id')}>
      <ContentBlock.Body>
        <TicketDetailsBody contextObject={contextObject} />
      </ContentBlock.Body>
    </ContentBlock>
        );
    }
}

TicketDetails.propTypes = {
    contextObject: ImmutablePropTypes.map.isRequired,
};

export default TicketDetails;
