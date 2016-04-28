/**
 * Send report to codeclimate.
 * @memberof module:ape-reporting/lib
 * @function sendToCodeclimate
 * @param {string} lcov - Lcov file path.
 * @param {object} options - Optional settings.
 * @returns {Promise}
 * @see https://codeclimate.com/
 */

'use strict'

const argx = require('argx')
const fs = require('fs')
const co = require('co')
const childProcess = require('child_process')

const codeclimateBin = require.resolve('codeclimate-test-reporter/bin/codeclimate.js')

let warnCallback = () => console.warn('[ape-reporting] Callback is now deprecated. Use promise instead.')

/** @lends sendToCodeclimate */
function sendToCodeclimate (lcov, options) {
  let args = argx(arguments)

  lcov = args.shift('string')
  let callback = args.pop('function')
  options = args.pop('object') || {}

  return co(function * () {
    const CODECLIMATE_REPO_TOKEN = process.env.CODECLIMATE_REPO_TOKEN
    if (!CODECLIMATE_REPO_TOKEN) {
      console.warn('CODECLIMATE_REPO_TOKEN not found.')
      return null
    }

    let exists = yield new Promise((resolve) =>
      fs.exists(lcov, (exists) => resolve(exists))
    )
    if (!exists) {
      warnCallback()
      throw new Error('lcov not found.')
    }

    yield new Promise((resolve, reject) => {
      let codeclimate = childProcess.spawn(codeclimateBin, {
        stdio: [
          fs.openSync(lcov, 'r'),
          process.stdout,
          process.stderr
        ]
      })
      codeclimate.on('exit', function (code) {
        if (code === 0) {
          resolve()
        } else {
          reject(new Error('Exit with code:' + code))
        }
      })
    })
  })
    .then((result) => {
      if (callback) {
        warnCallback()
        callback(result)
      }
      return result
    })
    .catch((err) => {
      if (callback) {
        warnCallback()
        callback(err)
      }
      return Promise.reject(err)
    })
}

module.exports = sendToCodeclimate
