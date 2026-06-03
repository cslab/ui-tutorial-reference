/* eslint-env jest */

import React from 'react';
import Immutable from 'immutable';
import {http, HttpResponse} from 'msw';
import {render, screen, waitFor} from '@testing-library/react';
import {Registry, TestUtils} from 'cs-web-components-base';

import {server} from '../../jest-setup';
import {prefixNS} from '../helpers';
import StateColorReducer from '../reducers/state-colors-reducer';
import setupStateColorSagas from '../sagas/state-colors-sagas';
import TicketDetails from '../components/TicketDetails.jsx';

beforeAll(() => {
    // index.js registers these at runtime; getReduxStoreWrapper builds the store
    // from the registry (initialize.jsx setupStore), so the test wires them in.
    Registry.registerReducer(prefixNS('stateColors'), StateColorReducer);
    Registry.registerSaga(setupStateColorSagas);
});

const ticket = Immutable.fromJS({
    'system:classname': 'cst_ticket',
    'cdb_objektart': '1', // string: matches the JSON key after Immutable.fromJS
    'status': 10, //         component does status.toString() -> '10'
    'joined_status': 'Open',
    'id': 'TCK-1',
    'title': 'A ticket',
    'system:ui_link': '/object/1',
    'mapped_assigned_to': 'edwin',
});

test('colors the state tag from the fetched state colors', async () => {
    server.use(
        http.get('/cstraining-web-api/state_colors/cst_ticket', () =>
            HttpResponse.json({'1': {'10': '#ff0000'}})
        )
    );

    render(<TicketDetails contextObject={ticket} collapsed />, {
        wrapper: TestUtils.getReduxStoreWrapper(),
    });

    // joined_status renders immediately; the colored <div> is its parent. After
    // the mount-dispatched loadStateColors resolves, the saga stores the color
    // and useSelector re-renders StateTag with the backgroundColor.
    const tagText = screen.getByText('Open');
    await waitFor(() =>
        expect(tagText.parentElement).toHaveStyle({backgroundColor: '#ff0000'})
    );
});
