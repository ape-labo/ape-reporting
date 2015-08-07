#!/usr/bin/env node

/**
 * Run report
 */

"use strict";

var path = require('path'),
    apeTasking = require('ape-tasking'),
    apeReporting = require('../lib');

var basedir = path.resolve(__dirname, '..');
process.chdir(basedir);

apeTasking.runTasks([
    function (callback) {
        apeReporting.sendToCodeclimate(basedir + '/coverage/lcov.info', callback);
    }
], function (err) {
    if (err) {
        console.error(err);
    }
});
