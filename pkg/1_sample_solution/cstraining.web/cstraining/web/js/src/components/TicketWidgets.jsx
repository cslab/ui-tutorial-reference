import React, {useEffect, useMemo} from 'react';

import {
    getAppSetup
  } from 'cs-web-components-base';
import {
    ImmutablePropTypes,
    ReactRedux,
    reselect,
} from 'cs-web-components-externals';
import Dashboard from 'cs-web-dashboard';

import TicketList from './TicketList.jsx';
import {formatStr} from '../i18n.js';
import {initializeTickets, reloadTickets} from '../actions/ticket-actions.js';
import {createTicketCache} from '../selectors/ticket-selectors.js';

const {useSelector, useDispatch} = ReactRedux;

function MyTicketsWidget(props) {
    const {item} = props;
    const dispatch = useDispatch();

    const selectTickets = useMemo(
      () => createTicketCache(
        ticket => ticket.get('assigned_to') ===
             getAppSetup().getIn(['appSettings', 'userPersno'])),
      []
    );
    const tickets = useSelector(selectTickets);

    useEffect(() => {
        dispatch(initializeTickets());
    }, [dispatch]);

    return (
      <Dashboard.DashboardItem item={item} title={formatStr('widgets_mytickets')}>
        <TicketList
          tickets={tickets}
          onRefresh={() => dispatch(reloadTickets())} />
      </Dashboard.DashboardItem>
    );
}

MyTicketsWidget.propTypes = {
    item: ImmutablePropTypes.map,
};


function UnassignedTicketsWidget(props) {
    const {item} = props;
    const dispatch = useDispatch();

    const selectTickets = useMemo(
      () => createTicketCache(ticket => ticket.get('assigned_to') === ''),
      []
    );
    const tickets = useSelector(selectTickets);

    useEffect(() => {
        dispatch(initializeTickets());
    }, [dispatch]);

    return (
      <Dashboard.DashboardItem item={item} title={formatStr('widgets_unassignedtickets')}>
        <TicketList
          tickets={tickets}
          onRefresh={() => dispatch(reloadTickets())} />
      </Dashboard.DashboardItem>
    );
}

UnassignedTicketsWidget.propTypes = {
    item: ImmutablePropTypes.map,
};


export default {
    MyTicketsWidget,
    UnassignedTicketsWidget,
};
