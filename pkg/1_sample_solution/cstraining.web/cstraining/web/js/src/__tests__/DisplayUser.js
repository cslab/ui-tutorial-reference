import React from 'react';
import {shallow} from 'enzyme';
import {DisplayUser} from '../components/TicketDetails.jsx';
import {prefixNS} from '../helpers';

describe('The DisplayUser component', () => {
    it('renders correct order for left', () => {
        const component = shallow(
            <DisplayUser
                userName={''}
                label={''}
                orientation={'left'} />
        );

        // Check for DisplayUser-thumbnail, DisplayUser-label
        expect(component.childAt(0).hasClass(prefixNS('DisplayUser-thumbnail'))).toBe(true);
        expect(component.childAt(1).hasClass(prefixNS('DisplayUser-label'))).toBe(true);
    });
    it('renders correct order for right', () => {
        const component = shallow(
            <DisplayUser
              userName={''}
              label={''}
              orientation={'right'} />
        );

        // Check for DisplayUser-label, DisplayUser-thumbnail
        expect(component.childAt(0).hasClass(prefixNS('DisplayUser-label'))).toBe(true);
        expect(component.childAt(1).hasClass(prefixNS('DisplayUser-thumbnail'))).toBe(true);
    });
});