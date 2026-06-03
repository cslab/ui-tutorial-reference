import React from 'react';
import Immutable from 'immutable';

import {Button} from 'cs-web-components-base';
import {ImmutablePropTypes, PropTypes} from 'cs-web-components-externals';

import {TicketDetailsBody} from './TicketDetails.jsx';
import {prefixNS} from '../helpers.js';

export default class TicketList extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
        };
        this.onCollapse = this.onCollapse.bind(this);
    }

    onCollapse() {
        this.setState({collapsed: !this.state.collapsed});
    }


    render() {
        const {tickets, onRefresh, onSelect} = this.props;
        const {collapsed} = this.state;

        const collapseButton = (
          collapsed ?
          <Button.ResizeBiggerButton
              onClick={this.onCollapse} /> :
          <Button.ResizeSmallerButton
              onClick={this.onCollapse} />
        );

        const refreshButton = (
          onRefresh ?
          <Button.IconButton
            iconName={'csweb_refresh'}
            buttonStyle={'auxiliary'}
            onClick={onRefresh} /> :
          null
        );

        return (
        <div className={prefixNS('TicketList')}>
          <div className={prefixNS('TicketList_header')}>
            <div className={prefixNS('TicketList_header_spacer')}/>
            {refreshButton}
            {collapseButton}
          </div>
          {tickets.map(ticket =>
            <TicketDetailsBody
              key={ticket.get('cdb_object_id')}
              onSelect={onSelect}
              collapsed={collapsed}
              contextObject={ticket} />)}
        </div>
        );
    }
}

TicketList.propTypes = {
    tickets: ImmutablePropTypes.list,
    onRefresh: PropTypes.func,
    onSelect: PropTypes.func,
};

TicketList.defaultProps = {
    tickets: Immutable.List(),
};
