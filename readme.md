# is-zip [![Build Status](http://img.shields.io/travis/kevva/is-zip/master.svg?style=flat)](https://travis-ci.org/kevva/is-zip)

> Check if a Buffer/Uint8Array is a ZIP file

## Install

```sh
$ npm install --save is-zip
```

## Usage

```js
var isZip = require('is-zip');
var read = require('fs').readFileSync;

isZip(read('foo.zip'));
//=> true
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
