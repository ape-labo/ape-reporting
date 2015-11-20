/**
 * Test case for sendToCodeclimate.
 * Runs with mocha.
 */
"use strict";

const sendToCodeclimate = require('../lib/send_to_codeclimate.js'),
    childProcess = require('child_process'),
    injectmock = require('injectmock'),
    assert = require('assert');

describe('send-to-codeclimate', () => {

    before((done) => {
        process.env.CODECLIMATE_REPO_TOKEN = 'FOO';
        done();
    });

    after((done) => {
        injectmock.restoreAll();
        done();
    });


    it('Send to codeclimate with invalid lcov', (done) => {
        sendToCodeclimate('foo/bar/__not_existing__', function (err) {
            assert.ok(!!err);
            done();
        });
    });

    it('Do send', (done)=> {
        injectmock(childProcess, 'spawn', function () {
            return {
                on: function (ev, callback) {
                    callback(0);
                }
            }
        });
        sendToCodeclimate(__dirname + '/../docs/mockups/mock-lcov.info', function (err) {
            assert.ifError(err);
            done();
        });
    });
});

