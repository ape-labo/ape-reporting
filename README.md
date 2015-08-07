ape-reporting
==========

[![Build Status][my_travis_badge_url]][my_travis_url]
[![Code Climate][my_codeclimate_badge_url]][my_codeclimate_url]
[![Code Coverage][my_codeclimate_coverage_badge_url]][my_codeclimate_url]
[![Dependency Status][my_gemnasium_badge_url]][my_gemnasium_url]
[![npm Version][my_npm_budge_url]][my_npm_url]


ape framework module for reporting.

Installation
----

```bash
$ npm install ape-reporting --save-dev
```


Usage
----

### Send Report to codeclimate.

```javascript
#!/usr/bin/env node

var apeReporting = require('ape-reporting');

// Send report to codeclimate
apeReporting.sendToCodeclimate('coverage/lcov.info', function(){
    /*...*/
});

```


License
-------
This software is released under the [MIT License][my_license_url].


Links
------

+ [ape-repo](https://github.com/ape-repo)
+ [codeclimate](https://codeclimate.com/dashboard)


[npm_url]: https://www.npmjs.org/
[my_repo_url]: https://github.com/ape-repo/ape-reporting
[my_travis_url]: http://travis-ci.org/ape-repo/ape-reporting
[my_travis_badge_url]: http://img.shields.io/travis/ape-repo/ape-reporting.svg?style=flat
[my_license_url]: https://github.com/ape-repo/ape-reporting/blob/master/LICENSE
[my_codeclimate_url]: http://codeclimate.com/github/ape-repo/ape-reporting
[my_codeclimate_badge_url]: http://img.shields.io/codeclimate/github/ape-repo/ape-reporting.svg?style=flat
[my_codeclimate_coverage_badge_url]: http://img.shields.io/codeclimate/coverage/github/ape-repo/ape-reporting.svg?style=flat
[my_gemnasium_url]: https://gemnasium.com/ape-repo/ape-reporting
[my_gemnasium_badge_url]: https://gemnasium.com/ape-repo/ape-reporting.svg
[my_npm_url]: http://www.npmjs.org/package/ape-reporting
[my_npm_budge_url]: http://img.shields.io/npm/v/ape-reporting.svg?style=flat

