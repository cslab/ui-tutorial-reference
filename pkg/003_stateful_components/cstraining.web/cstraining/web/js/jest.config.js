/*
 * Copyright (C) 2017 CONTACT Software GmbH
 * All rights reserved.
 * http://www.contact-software.com
 *
 * Revision "$Id: jest.config.js 169999 2017-12-06 07:21:20Z gwe $"
 */

/* eslint-env node */

const path = require('path');

const configDir = process.env.JEST_COMMON_CONFIG_DIR;
const commonConfig = require(path.join(configDir, 'jest.config.common.js'));

module.exports = Object.assign({},
    commonConfig
    // to overwrite / add to common settings, add stuff here
);
