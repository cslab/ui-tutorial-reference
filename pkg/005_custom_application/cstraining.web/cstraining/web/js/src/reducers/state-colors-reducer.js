import Immutable from 'immutable';
import {RECEIVED_STATE_COLORS} from '../actions/state-colors-actions';

export default function(state = Immutable.Map({}), action) {
    switch (action.type) {
        case RECEIVED_STATE_COLORS:
            return state.set(action.payload.className, action.payload.stateColors);
        default:
            return state;
    }
}
