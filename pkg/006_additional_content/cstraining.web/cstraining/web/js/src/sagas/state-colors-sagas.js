import Immutable from 'immutable';
import {ReduxSaga} from 'cs-web-components-externals';
import {Console, getJSON} from 'cs-web-components-base';

import * as StateColorActions from '../actions/state-colors-actions';

const {call, takeEvery, put} = ReduxSaga.effects;

function* loadStateColors({payload}) {
    try {
        // Fetches State Colors for given className
        const {className} = payload;
        const stateColors = Immutable.fromJS(
            yield call(
                getJSON, `/cstraining-web-api/state_colors/${className}`));
        yield put(StateColorActions.receivedStateColors(className, stateColors));
    } catch (exc) {
        Console.error(exc);
    }
}

export default function* setupSagas() {
    // Takes every LOAD_STATE_COLORS action dispatched and
    // instantiates loadStateColors Saga for it.
    yield takeEvery(StateColorActions.LOAD_STATE_COLORS, loadStateColors);
}
