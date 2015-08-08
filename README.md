ape-reporting
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![Dependency Status][bd_gemnasium_shield_url]][bd_gemnasium_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/ape-repoape-reporting
[bd_travis_url]: http://travis-ci.org/ape-repoape-reporting
[bd_travis_shield_url]: http://img.shields.io/travis/ape-repoape-reporting.svg?style=flat
[bd_license_url]: https://github.com/ape-repoape-reporting/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/ape-repoape-reporting
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/ape-repoape-reporting.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/ape-repoape-reporting.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/ape-repoape-reporting
[bd_gemnasium_shield_url]: https://gemnasium.com/ape-repoape-reporting.svg
[bd_npm_url]: http://www.npmjs.org/package/ape-reporting
[bd_npm_shield_url]: http://img.shields.io/npm/v/ape-reporting.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

ape framework module for reporting.

<!-- Description End -->



<!-- Sections Start -->
<a name="sections"></a>

Usage
----

### Send Report to codeclimate

```javascript
#!/usr/bin/env node

var apeReporting = require('ape-reporting');

// Send report to codeclimate
apeReporting.sendToCodeclimate('coverage/lcov.info', function(){
    /*...*/
});

```

<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/ape-repoape-reporting/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [ape-repo](https://github.com/ape-repo)
+ [codeclimate](https://codeclimate.com/dashboard)

<!-- Links End -->
