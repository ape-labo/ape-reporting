#!/usr/bin/env node

/**
 * Send reports.
 */

"use strict";

process.chdir(__dirname + '/..');

var apeTasking = require('ape-tasking'),
    apeReporting = require('../lib');

apeTasking.runTasks('report', [
    (callback) => {
        apeReporting.sendToCodeclimate('coverage/lcov.info', callback);
    }
], true);
