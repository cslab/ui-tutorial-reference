/**
 * Reducer Template
 */

import Immutable from 'immutable';
import {DATA_FETCH_SUCCESS, DATA_FETCH_FAILURE} from '../actions/actions';
import {Console} from 'cs-web-components-base';

export default function(state = Immutable.Map(), action) {
    Console.log('reducer got ', action.type);
    switch (action.type) {
        case DATA_FETCH_SUCCESS:
            Console.log('Reducing', action.payload);
            return state;
        case DATA_FETCH_FAILURE:
            Console.log('Reducing failed');
            return state;
        default:
            return state;
    }
}
