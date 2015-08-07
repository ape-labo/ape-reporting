ape-reporting
==========

[![Build Status][my_travis_badge_url]][my_travis_url]
[![Code Climate][my_codeclimate_badge_url]][my_codeclimate_url]
[![Code Coverage][my_codeclimate_coverage_badge_url]][my_codeclimate_url]
[![npm version][my_npm_budge_url]][my_npm_url]

Reporting module for ape framework.


Usage
----

### Send report to codecliemate.

```javascript
#!/usr/bin/env node

/**
 * This is an example to send report to codeclimate.
 */

"use strict";

var apeReporting = require('ape-reporting');

apeReporting.sendToCodeclimate('coverage/lcov.info', function(){
    /*...*/
});

```


Installation
----

```javascript
$ npm install ape-reporting --save
```


License
-------
This software is released under the [MIT License][my_license_url].


Links
------

+ [codeclimate](https://codeclimate.com/dashboard)


[npm_url]: https://www.npmjs.org/
[my_repo_url]: https://github.com/ape-repo/ape-reporting
[my_travis_url]: http://travis-ci.org/ape-repo/ape-reporting
[my_travis_badge_url]: http://img.shields.io/travis/ape-repo/ape-reporting.svg?style=flat
[my_license_url]: https://github.com/ape-repo/ape-reporting/blob/master/LICENSE
[my_codeclimate_url]: http://codeclimate.com/github/ape-repo/ape-reporting
[my_codeclimate_badge_url]: http://img.shields.io/codeclimate/github/ape-repo/ape-reporting.svg?style=flat
[my_codeclimate_coverage_badge_url]: http://img.shields.io/codeclimate/coverage/github/ape-repo/ape-reporting.svg?style=flat
[my_coverage_url]: http://ape-repo.github.io/ape-reporting/coverage/lcov-report
[my_npm_url]: http://www.npmjs.org/package/ape-reporting
[my_npm_budge_url]: http://img.shields.io/npm/v/ape-reporting.svg?style=flat

