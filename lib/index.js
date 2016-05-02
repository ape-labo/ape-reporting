/**
 * ape framework module for reporting.
 * @module ape-reporting
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get sendToCodeclimate () { return d(require('./send_to_codeclimate')) }
}
