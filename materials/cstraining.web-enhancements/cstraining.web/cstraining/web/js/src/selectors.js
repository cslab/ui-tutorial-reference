import {
    reselect,
} from 'cs-web-components-externals';

export function getObjectsById(state) {
    return state.objectsById;
}

export function createTicketCache(ticketFilter) {
    return reselect.createSelector(
        [getObjectsById],
        objectsById => objectsById
            .filter(obj => obj.get('system:classname') === 'cst_ticket')
            .filter(ticketFilter)
            .valueSeq().toList()
    );
}

export function getTicketFilter(state, props) {
    return props.ticketFilter;
}

export function createTicketCacheWithFilter() {
    return reselect.createSelector(
        [getObjectsById, getTicketFilter],
        (objectsById, ticketFilter) => objectsById
            .filter(obj => obj.get('system:classname') === 'cst_ticket')
            .filter(ticketFilter)
            .valueSeq().toList()
    );
}
