import React from 'react';

import {
    classNames,
    ImmutablePropTypes,
    PropTypes,
} from 'cs-web-components-externals';
import {
    ContentBlock,
    Tag,
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


class TicketDetailsHeader extends React.PureComponent {
    render() {
        const {
           contextObject
       } = this.props;

        return (
        <div className={prefixNS('TicketDetailsHeader')}>
          <Tag name={contextObject.get('joined_status')} />
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

TicketDetailsHeader.propTypes = {
    contextObject: ImmutablePropTypes.map.isRequired,
};

class TicketDetails extends React.PureComponent {
    render() {
        const {
        contextObject
      } = this.props;

        return (
        <ContentBlock title={contextObject.get('id')}>
          <ContentBlock.Body>
            <TicketDetailsHeader contextObject={contextObject} />
            <div className={prefixNS('TicketDetails-content')}>
              {contextObject.get('cst_ticket_description_txt')}
            </div>
            <DisplayUser
              className={prefixNS('TicketDetails-footer')}
              userName={contextObject.get('mapped_raised_by')}
              label={'ticket_raised_by'} />
          </ContentBlock.Body>
        </ContentBlock>
        );
    }
  }

TicketDetails.propTypes = {
    contextObject: ImmutablePropTypes.map.isRequired,
};

export default TicketDetails;
