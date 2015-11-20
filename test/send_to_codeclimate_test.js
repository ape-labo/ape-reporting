/**
 * Test case for sendToCodeclimate.
 * Runs with nodeunit.
 */

var sendToCodeclimate = require('../lib/send_to_codeclimate.js'),
    childProcess = require('child_process'),
    injectmock = require('injectmock');

exports.tearDown = function (done) {
    injectmock.restoreAll();
    done();
};

exports['Send with invalid lcov.'] = function (test) {
    sendToCodeclimate('foo/bar/__not_existing__', function (err) {
        test.ok(!!err);
        test.done();
    });
};

exports['Do send.'] = function (test) {
    injectmock(childProcess, 'spawn', function () {
        return {
            on: function (ev, callback) {
                callback(0);
            }
        }
    });
    sendToCodeclimate(__dirname + '/../docs/mockups/mock-lcov.info', function (err) {
        test.ifError(err);
        test.done();
    });
};