import React, {useState} from 'react';
import Immutable from 'immutable';

import {Button, Icons} from 'cs-web-components-base';
import {ImmutablePropTypes, PropTypes} from 'cs-web-components-externals';

import TicketDetails from './TicketDetails.jsx';
import {prefixNS} from '../helpers.js';

export default function TicketList(props) {
    const {tickets = Immutable.List(), onRefresh, onSelect} = props;
    const [collapsed, setCollapsed] = useState(true);

    const onCollapse = () => setCollapsed(prevCollapsed => !prevCollapsed);

    const collapseButton = (
        <Button.IconOnlyButton
            onClick={onCollapse}
            iconSrc={collapsed ? Icons.resize_full : Icons.resize_small}
        />
    );

    const refreshButton = (
        onRefresh ?
            <Button.IconOnlyButton
                iconName={'csweb_refresh'}
                onClick={onRefresh} /> :
            null
    );

    return (
        <div className={prefixNS('TicketList')}>
            <div className={prefixNS('TicketList__header')}>
                <div className={prefixNS('TicketList__header-spacer')} />
                {refreshButton}
                {collapseButton}
            </div>
            {tickets.map(ticket =>
                <TicketDetails
                    key={ticket.get('cdb_object_id')}
                    onSelect={onSelect}
                    collapsed={collapsed}
                    contextObject={ticket} />)}
        </div>
    );
}

TicketList.propTypes = {
    tickets: ImmutablePropTypes.list,
    onRefresh: PropTypes.func,
    onSelect: PropTypes.func,
};
