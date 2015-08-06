#!/usr/bin/env node

/**
 * This is an example to send report to codeclimate.
 */

"use strict";

var apeReporting = require('ape-reporting');

apeReporting.sendToCodeclimate('coverage/lcov.info', function(){
    /*...*/
});
