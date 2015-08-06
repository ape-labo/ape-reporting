/**
 * Send report to codeclimate.
 * @memberof module:ape-reporting/lib
 * @function sendToCodeclimate
 * @param {string} lcov - Lcov file path.
 * @param {object} options - Optional settings.
 * @param {function} callback - Callback when done.
 * @see https://codeclimate.com/
 */

"use strict";

var argx = require('argx'),
    fs = require('fs'),
    childProcess = require('child_process');

var codeclimateBin = require.resolve('codeclimate-test-reporter/bin/codeclimate.js');

/** @lends sendToCodeclimate */
function sendToCodeclimate(lcov, options, callback) {
    var args = argx(arguments);
    callback = args.pop('function') || argx.noop;

    fs.exists(lcov, function (exists) {
        if (!exists) {
            callback(new Error('lcov not found.'));
            return;
        }

        var codeclimate = childProcess.spawn(codeclimateBin, {
            stdio: [
                fs.openSync(lcov, 'r'),
                process.stdout,
                process.stderr
            ]
        });

        codeclimate.on('exit', function (code) {
            var err = code === 0 ? null : new Error('Exit with code:' + code);
            callback(err);
        });
    })
}


module.exports = sendToCodeclimate;