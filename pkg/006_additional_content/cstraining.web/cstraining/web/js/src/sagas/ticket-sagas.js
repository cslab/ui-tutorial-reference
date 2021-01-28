
import {ReduxSaga} from 'cs-web-components-externals';
import {Console, fetchCollection} from 'cs-web-components-base';

import * as TicketActions from '../actions/ticket-actions.js';
import {prefixNS} from '../helpers.js';

const {call, takeEvery, put, select} = ReduxSaga.effects;

function* loadTickets() {
    try {
        // Fetches Initial Ticket State and handles errors
        yield put.resolve(fetchCollection('/api/v1/collection/ticket'));
        yield put(TicketActions.ticketsInitialized());
    } catch (exc) {
        Console.error(exc);
    }
}

function* initializeTickets() {
    const state = yield select();
    const isLoaded = state[prefixNS('reducer')].get('loaded');
    if (isLoaded) {
        return;
    }

    yield call(loadTickets);
}

export default function* setupSagas() {
    // Takes every INITIALIZE_TICKETS action dispatched and
    // instantiates initializeTickets Saga for it.
    yield takeEvery(TicketActions.INITIALIZE_TICKETS, initializeTickets);
    yield takeEvery(TicketActions.RELOAD_TICKETS, loadTickets);
}
