/*
 * Copyright (C) 2026 CONTACT Software GmbH
 * All rights reserved.
 * http://www.contact-software.com
 *
 * Revision "$Id$"
 */

/* eslint-env jest */

import '@testing-library/jest-dom';
import path from 'path';

// Reuse the shared MSW server provided by cs.web (resources/), reached through
// JEST_COMMON_CONFIG_DIR like jest.config.common.js. Tests add endpoint
// handlers with `server.use(...)`; the default icon handler is already set up.
const {setupMockServer} = require(
    path.join(process.env.JEST_COMMON_CONFIG_DIR, 'jest-msw-server')
);

export const server = setupMockServer();
