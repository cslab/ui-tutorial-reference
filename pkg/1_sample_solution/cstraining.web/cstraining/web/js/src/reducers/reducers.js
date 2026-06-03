import Immutable from 'immutable';
import {TICKETS_INITIALIZED} from '../actions/ticket-actions.js';

export default function(state = Immutable.Map({loaded: false}), action) {
    switch (action.type) {
        case TICKETS_INITIALIZED:
            return state.set('loaded', true);
        default:
            return state;
    }
}
