/**
 * Reporting module for ape framework.
 * @module ape-reporting
 */

"use strict";

module.exports = {
    get sendToCodeclimate() { return require('./send_to_codeclimate'); }
};