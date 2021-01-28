import {prefixNS} from '../helpers';

export const INITIALIZE_TICKETS = prefixNS('INITIALIZE_TICKETS');
export const TICKETS_INITIALIZED = prefixNS('TICKETS_INITIALIZED');
export const RELOAD_TICKETS = prefixNS('RELOAD_TICKETS');

export function initializeTickets() {
    return {
        type: INITIALIZE_TICKETS,
        payload: {},
    };
}

export function ticketsInitialized() {
    return {
        type: TICKETS_INITIALIZED,
        payload: {},
    };
}

export function reloadTickets() {
    return {
        type: RELOAD_TICKETS,
        payload: {},
    };
}
