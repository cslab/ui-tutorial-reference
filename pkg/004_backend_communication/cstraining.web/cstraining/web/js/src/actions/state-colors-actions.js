import {prefixNS} from '../helpers';
export const LOAD_STATE_COLORS = prefixNS('LOAD_STATE_COLORS');

export function loadStateColors(className) {
    return {
        type: LOAD_STATE_COLORS,
        payload: {
            className
        }
    };
}

export const RECEIVED_STATE_COLORS = prefixNS('RECEIVED_STATE_COLORS');

export function receivedStateColors(className, stateColors) {
    return {
        type: RECEIVED_STATE_COLORS,
        payload: {
            className,
            stateColors
        }
    };
}
