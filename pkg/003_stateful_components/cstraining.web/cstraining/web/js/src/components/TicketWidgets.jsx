import React from 'react';

import {
    getAppSetup
  } from 'cs-web-components-base';
import {
    PropTypes,
    ImmutablePropTypes,
    connect,
    reselect,
} from 'cs-web-components-externals';
import Dashboard from 'cs-web-dashboard';

import TicketList from './TicketList.jsx';
import {formatStr} from '../i18n.js';
import * as TicketActions from '../actions/ticket-actions.js';

function getObjectsById(state) {
    return state.objectsById;
}

function createTicketCache(ticketFilter) {
    return reselect.createSelector(
      [getObjectsById],
      objectsById => objectsById
          .filter(obj => obj.get('system:classname') === 'cst_ticket')
          .filter(ticketFilter)
          .valueSeq().toList()
    );
}


function createMapStateToPropsWithFilter(ticketFilter) {
    function createMapStateToPropsWithCacheInstance() {
        const ticketCache = createTicketCache(ticketFilter);

        function mapStateToProps(state, props) {
            return {
                tickets: ticketCache(state, props)
            };
        }

        return mapStateToProps;
    }
    return createMapStateToPropsWithCacheInstance;
}


class MyTicketsWidget extends React.Component {
    componentDidMount() {
        this.props.initializeTickets();
    }

    render() {
        const {item, tickets, reloadTickets} = this.props;
        return (
          <Dashboard.DashboardItem item={item} title={formatStr('widgets_mytickets')}>
            <TicketList tickets={tickets} onRefresh={reloadTickets} />
          </Dashboard.DashboardItem>
        );
    }
}

MyTicketsWidget.propTypes = {
    item: ImmutablePropTypes.map,
    initializeTickets: PropTypes.func,
    tickets: ImmutablePropTypes.list,
    reloadTickets: PropTypes.func,
};

const MyTicketsWidget_mapStateToProps =
 createMapStateToPropsWithFilter(
  ticket => ticket.get('assigned_to') ===
       getAppSetup().getIn(['appSettings', 'userPersno']));

const ConnectedMyTicketsWidget = connect(
    MyTicketsWidget_mapStateToProps,
    {...TicketActions}
  )(MyTicketsWidget);


class UnassignedTicketsWidget extends React.Component {
    componentDidMount() {
        this.props.initializeTickets();
    }

    render() {
        const {item, tickets, reloadTickets} = this.props;
        return (
          <Dashboard.DashboardItem item={item} title={formatStr('widgets_unassignedtickets')}>
            <TicketList tickets={tickets} onRefresh={reloadTickets} />
          </Dashboard.DashboardItem>
        );
    }

}

UnassignedTicketsWidget.propTypes = {
    item: ImmutablePropTypes.map,
    initializeTickets: PropTypes.func,
    tickets: ImmutablePropTypes.list,
    reloadTickets: PropTypes.func,
};


const UnassignedTicketsWidget_mapStateToProps =
 createMapStateToPropsWithFilter(
  ticket => ticket.get('assigned_to') === '');


const ConnectedUnassignedTicketsWidget = connect(
    UnassignedTicketsWidget_mapStateToProps,
    {...TicketActions}
  )(UnassignedTicketsWidget);


export default {
    MyTicketsWidget: ConnectedMyTicketsWidget,
    UnassignedTicketsWidget: ConnectedUnassignedTicketsWidget,
    initializeTickets: PropTypes.func
};
