
import React from 'react';
import {prefixNS} from '../helpers.js';

export default function Frame(props) {
    return (
        <div className={prefixNS('FilteredTicketList')}>
            {props.children}
        </div>
    );
}
