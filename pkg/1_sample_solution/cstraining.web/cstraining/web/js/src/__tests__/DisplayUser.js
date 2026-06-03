
/* eslint-env jest */

import React from 'react';
import {render} from '@testing-library/react';
import {DisplayUser} from '../components/TicketDetails.jsx';
import {prefixNS} from '../helpers';

// Stub the real Thumbnail. It mounts an SVGIcon that fires a network fetch for
// its icon (jsdom has no server, so the rejection escapes makeCancelable and
// crashes the run), and it renders its className on an inner element rather than
// its root, so the child-order assertions below could not match it. A plain
// element that forwards className to its root fixes both.
jest.mock('cs-web-components-base', () => {
    const actual = jest.requireActual('cs-web-components-base');
    const React = jest.requireActual('react');
    return {
        ...actual,
        Thumbnail: ({className}) => React.createElement('div', {className}),
    };
});


function childClasses(container) {
    const root = container.querySelector(`.${prefixNS('DisplayUser')}`);
    return Array.from(root.children).map((child) => child.className);
}

describe('The DisplayUser component', () => {
    it('renders thumbnail before label for orientation "left"', () => {
        const {container} = render(
            <DisplayUser userName={''} label={''} orientation={'left'} />
        );
        const [first, second] = childClasses(container);
        expect(first).toContain(prefixNS('DisplayUser__thumbnail'));
        expect(second).toContain(prefixNS('DisplayUser__label'));
    });

    it('renders label before thumbnail for orientation "right"', () => {
        const {container} = render(
            <DisplayUser userName={''} label={''} orientation={'right'} />
        );
        const [first, second] = childClasses(container);
        expect(first).toContain(prefixNS('DisplayUser__label'));
        expect(second).toContain(prefixNS('DisplayUser__thumbnail'));
    });
});