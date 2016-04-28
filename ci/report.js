#!/usr/bin/env node

/**
 * Send reports.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const apeReporting = require('../lib')

apeTasking.runTasks('report', [
  () => apeReporting.sendToCodeclimate('coverage/lcov.info', callback)
], true)
