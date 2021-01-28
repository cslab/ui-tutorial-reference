
import React from 'react';
import {prefixNS} from '../helpers.js';

export default class Frame extends React.Component {
    render() {
        return (
            <div className={prefixNS('FilteredTicketList')}>
                {this.props.children}
            </div>
        );
    }
}
