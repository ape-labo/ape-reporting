/**
 * Test case for sendToCodeclimate.
 * Runs with mocha.
 */
'use strict'

const sendToCodeclimate = require('../lib/send_to_codeclimate.js')
const childProcess = require('child_process')
const injectmock = require('injectmock')
const assert = require('assert')
const co = require('co')

describe('send-to-codeclimate', () => {
  before((done) => {
    process.env.CODECLIMATE_REPO_TOKEN = 'FOO'
    done()
  })

  after((done) => {
    injectmock.restoreAll()
    done()
  })

  it('Send to codeclimate with invalid lcov', (done) => {
    sendToCodeclimate('foo/bar/__not_existing__', (err) => {
      assert.ok(!!err)
      done()
    })
  })

  it('Do send', (done) => {
    injectmock(childProcess, 'spawn', () => {
      return {
        on (ev, callback) {
          setTimeout(() => {
            callback(0)
          }, 0)
        }
      }
    })
    sendToCodeclimate(`${__dirname}/../doc/mockups/mock-lcov.info`, (err) => {
      assert.ifError(err)
      done()
    })
  })

  it('Do send with promise', () => co(function * () {
    injectmock(childProcess, 'spawn', () => {
      return {
        on (ev, callback) {
          setTimeout(() => {
            callback(0)
          }, 0)
        }
      }
    })
    yield sendToCodeclimate(`${__dirname}/../doc/mockups/mock-lcov.info`)
  }))
})

/* global describe, before, after, it */
