#!/usr/bin/env node

var apeReporting = require('ape-reporting');

// Send report to codeclimate
apeReporting.sendToCodeclimate('coverage/lcov.info', function(){
    /*...*/
});
