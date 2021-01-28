import React from 'react';
import Immutable from 'immutable';
import {ImmutablePropTypes, PropTypes, connect} from 'cs-web-components-externals';
import {getAppSetup, FormControl, ContentBlock, SplitterLayout} from 'cs-web-components-base';
import {prefixNS} from '../helpers.js';
import TicketList from './TicketList.jsx';
import * as TicketActions from '../actions/ticket-actions.js';
import {createTicketCacheWithFilter} from '../selectors.js';

function FilterBlock(props) {
    const {title, children} = props;
    return (
        <div className={prefixNS("TicketFilter-Block")}>
            <span>{title}</span>
            {children}
        </div>
    );
}

FilterBlock.propTypes = {
    title: PropTypes.string,
};

const LIFECYCLES = [
    ['new', 'New'],
    ['open', 'Open'],
    ['on_hold', 'On Hold'],
    ['solved', 'Solved'],
    ['closed', 'Closed'],
];

class TicketFilter extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            show_all: true,
            lifecycle: Immutable.Map({
                new: true,
                open: true,
                on_hold: true,
                solved: true,
                closed: true,
            }),
        };
    }

    setShowAll(value) {
        const {onFilterChange} = this.props;
        if (onFilterChange) {
            onFilterChange({show_all: value, lifecycle: this.state.lifecycle});
        }
        this.setState({show_all: value});
    }

    toggleLifecycle(lifecycleKey) {
        const {onFilterChange} = this.props;
        const newLifecycle = this.state.lifecycle.set(
            lifecycleKey,
            !this.state.lifecycle.get(lifecycleKey)
        );
        if (onFilterChange) {
            onFilterChange({show_all: this.state.show_all, lifecycle: newLifecycle});
        }
        this.setState({
            lifecycle: newLifecycle
        });
    }

    render() {
        return (
            <ContentBlock className={prefixNS("TicketFilter")} title={"Filter"}>
                <ContentBlock.Body>
                    <FilterBlock title={"Basic"}>
                        <FormControl.Radio
                            checked={this.state.show_all}
                            onChange={() => this.setShowAll(true)}
                            label={"All Tickets"} />
                        <FormControl.Radio
                            checked={!this.state.show_all}
                            onChange={() => this.setShowAll(false)}
                            label={"My Open Tickets"} />
                    </FilterBlock>
                    <FilterBlock title={"Lifecycle"}>
                        {LIFECYCLES.map(([key, label]) =>
                            <FormControl.CheckBox
                                key={key}
                                onChange={() => this.toggleLifecycle(key)}
                                checked={this.state.lifecycle.get(key)}
                                label={label} />)}
                    </FilterBlock>
                </ContentBlock.Body>
            </ContentBlock>
        );
    }
}

TicketFilter.propTypes = {
    onFilterChange: PropTypes.func,
};

class _ConnectedTicketList extends React.PureComponent {
    componentDidMount() {
        const {initializeTickets} = this.props;
        initializeTickets();
    }


    render() {
        const {tickets, reloadTickets, onSelect} = this.props;
        return (
            <TicketList
                onRefresh={reloadTickets}
                onSelect={onSelect}
                tickets={tickets} />
        );
    }
}

_ConnectedTicketList.propTypes = {
    initializeTickets: PropTypes.func,
    reloadTickets: PropTypes.func,
    tickets: ImmutablePropTypes.list,
    onSelect: PropTypes.func,
};

function createMapStateToPropsWithCacheInstance() {
    const ticketCache = createTicketCacheWithFilter();

    function mapStateToProps(state, props) {
        return {
            tickets: ticketCache(state, props)
        };
    }

    return mapStateToProps;
}

const ConnectedTicketList = connect(
    createMapStateToPropsWithCacheInstance,
    {...TicketActions}
)(_ConnectedTicketList);

export default class FilteredTicketList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ticketFilter: () => true
        };
        this.onFilterChange = this.onFilterChange.bind(this);
    }

    onFilterChange(filterState) {
        function ticketFilter(obj) {
            return (
                filterState.lifecycle
                           .filter(value => value)
                           .filter((value, key) => obj.get('cdb_status_txt') === key)
                           .size > 0
                &&
                (filterState.show_all ||
                 obj.get('assigned_to') === getAppSetup().getIn(['appSettings', 'userPersno']))
            );
        }

        this.setState({ticketFilter});
    }

    render() {
        const {onSelect} = this.props;
        return (
            <div className={prefixNS('FilteredTicketList')}>
                <SplitterLayout>
                    <SplitterLayout.SecondaryPane defaultSize={"20rem"}>
                        <TicketFilter onFilterChange={this.onFilterChange} />
                    </SplitterLayout.SecondaryPane>
                    <SplitterLayout.PrimaryPane >
                        <ContentBlock title={"Tickets"}>
                            <ContentBlock.Body>
                                <ConnectedTicketList
                                    ticketFilter={this.state.ticketFilter}
                                    onSelect={onSelect} />
                            </ContentBlock.Body>
                        </ContentBlock>
                    </SplitterLayout.PrimaryPane>
                </SplitterLayout>
            </div>
        );
    }
}

FilteredTicketList.propTypes = {
    onSelect: PropTypes.func,
};
