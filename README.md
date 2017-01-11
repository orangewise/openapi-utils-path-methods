# openapi-utils-path-methods

[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Get openapi path methods.

# Installation

```
npm install --save openapi-utils-path-methods
```

# Usage

Given the following openApi definition:

```
{
  "paths": {
    "/animals/cats": {
      "get": { },
      "post": { }
    },
    "/animals/{species}/cats": {
      "get": { },
      "put": { }
    },
    "/animals/{species}/dogs": {
      "get": { }
    },
    "/animals/{species}/dogs/{breed}": {
      "get": { },
      "patch": { }
    }
  }
}
```

You can retrieve the path methods like this:

```javascript
var api = require('./your-openapi.json')
var openApiUtils = require('openapi-utils-path-methods')

var m = openApiUtils.methods(api, '/animals/{species}/cats')
console.log(m)
/*
['GET', 'PUT']
*/

m = openApiUtils.methods(api, '/animals/{species}/dogs/{breed}')
console.log(m)
/*
['GET', 'PATCH']
*/

m = openApiUtils.methods(api, '/animals/cats')
console.log(m)
/*
['GET', 'POST']
*/

m = openApiUtils.methods(api, '/animals/{species}/dogs')
console.log(m)
/*
['GET']
*/

```


[npm-badge]: https://badge.fury.io/js/openapi-utils-path-methods.svg
[npm-url]: https://badge.fury.io/js/openapi-utils-path-methods
[travis-badge]: https://travis-ci.org/orangewise/openapi-utils-path-methods.svg?branch=master
[travis-url]: https://travis-ci.org/orangewise/openapi-utils-path-methods
