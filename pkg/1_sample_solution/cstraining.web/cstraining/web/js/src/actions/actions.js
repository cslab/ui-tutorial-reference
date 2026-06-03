import {prefixNS} from '../helpers.js';
import {Console, getJSON} from 'cs-web-components-base';

export const DATA_FETCH_SUCCESS = prefixNS('DATA_FETCH_SUCCESS');
export const DATA_FETCH_FAILURE = prefixNS('DATA_FETCH_FAILURE');

/*
 Action Creator
  */
function onDataReceived(payload) {
    return {
        type: DATA_FETCH_SUCCESS,
        payload: payload
    };
}

/*
 Action Creator
  */
function onDataFailed(err) {
    return {
        type: DATA_FETCH_FAILURE,
        payload: err,
        error: true
    };
}

/*
 Thunk Action Creator
  */
export function thunkActionCreator() {
    return (dispatch /*, getState */) => {
        Console.log("Dispatching ", DATA_FETCH_SUCCESS);
        dispatch(onDataReceived("foo"));
    };
}

/*
 Async Thunk Action Creator

 Use an AJAX call to fetch data from server
  */
export function asyncActionCreator() {
    return (dispatch /*, getState */) => {
        getJSON("/api/v1/i18n/labels/en")
            .then(
                info => {
                    dispatch(onDataReceived(info));
                },
                err => {
                    dispatch(onDataFailed(err));
                }
            );
    };
}
