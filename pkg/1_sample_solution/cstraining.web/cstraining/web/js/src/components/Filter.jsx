import React, {useState, useEffect, useMemo} from 'react';
import Immutable from 'immutable';
import {PropTypes, ReactRedux} from 'cs-web-components-externals';
import {getAppSetup, FormControl, ContentBlock, SplitterLayout} from 'cs-web-components-base';
import {prefixNS} from '../helpers.js';
import TicketList from './TicketList.jsx';
import {initializeTickets, reloadTickets} from '../actions/ticket-actions.js';
import {createTicketCacheWithFilter} from '../selectors/ticket-selectors.js';

const {useSelector, useDispatch} = ReactRedux;

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

function TicketFilter(props) {
    const {onFilterChange} = props;
    const [showAll, setShowAll] = useState(true);
    const [lifecycle, setLifecycle] = useState(Immutable.Map({
        new: true,
        open: true,
        on_hold: true,
        solved: true,
        closed: true,
    }));

    function changeShowAll(value) {
        if (onFilterChange) {
            onFilterChange({show_all: value, lifecycle});
        }
        setShowAll(value);
    }

    function toggleLifecycle(lifecycleKey) {
        const newLifecycle = lifecycle.set(
            lifecycleKey,
            !lifecycle.get(lifecycleKey)
        );
        if (onFilterChange) {
            onFilterChange({show_all: showAll, lifecycle: newLifecycle});
        }
        setLifecycle(newLifecycle);
    }

    return (
        <ContentBlock className={prefixNS("TicketFilter")} title={"Filter"}>
            <ContentBlock.Body>
                <FilterBlock title={"Basic"}>
                    <FormControl.Radio
                        checked={showAll}
                        onChange={() => changeShowAll(true)}
                        label={"All Tickets"} />
                    <FormControl.Radio
                        checked={!showAll}
                        onChange={() => changeShowAll(false)}
                        label={"My Open Tickets"} />
                </FilterBlock>
                <FilterBlock title={"Lifecycle"}>
                    {LIFECYCLES.map(([key, label]) =>
                        <FormControl.CheckBox
                            key={key}
                            onChange={() => toggleLifecycle(key)}
                            checked={lifecycle.get(key)}
                            label={label} />)}
                </FilterBlock>
            </ContentBlock.Body>
        </ContentBlock>
    );
}

TicketFilter.propTypes = {
    onFilterChange: PropTypes.func,
};

function ConnectedTicketList(props) {
    const {ticketFilter, onSelect} = props;
    const dispatch = useDispatch();

    const selectTickets = useMemo(() => createTicketCacheWithFilter(), []);
    const tickets = useSelector(state => selectTickets(state, {ticketFilter}));

    useEffect(() => {
        dispatch(initializeTickets());
    }, [dispatch]);

    return (
        <TicketList
            onRefresh={() => dispatch(reloadTickets())}
            onSelect={onSelect}
            tickets={tickets} />
    );
}

ConnectedTicketList.propTypes = {
    ticketFilter: PropTypes.func,
    onSelect: PropTypes.func,
};

export default function FilteredTicketList(props) {
    const {onSelect} = props;
    const [ticketFilter, setTicketFilter] = useState(() => () => true);

    function onFilterChange(filterState) {
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

        setTicketFilter(() => ticketFilter);
    }

    return (
        <div className={prefixNS('FilteredTicketList')}>
            <SplitterLayout>
                <SplitterLayout.SecondaryPane defaultSize={300}>
                    <TicketFilter onFilterChange={onFilterChange} />
                </SplitterLayout.SecondaryPane>
                <SplitterLayout.PrimaryPane >
                    <ContentBlock title={"Tickets"}>
                        <ContentBlock.Body>
                            <ConnectedTicketList
                                ticketFilter={ticketFilter}
                                onSelect={onSelect} />
                        </ContentBlock.Body>
                    </ContentBlock>
                </SplitterLayout.PrimaryPane>
            </SplitterLayout>
        </div>
    );
}

FilteredTicketList.propTypes = {
    onSelect: PropTypes.func,
};
