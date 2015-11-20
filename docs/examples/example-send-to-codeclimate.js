#!/usr/bin/env node
"use strict";

const apeReporting = require('ape-reporting');

// Send report to codeclimate
apeReporting.sendToCodeclimate('coverage/lcov.info', (err) => {
    /*...*/
});
