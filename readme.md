# is-zip [![Build Status](http://img.shields.io/travis/kevva/is-zip/master.svg?style=flat)](https://travis-ci.org/kevva/is-zip)

> Check if a Buffer/Uint8Array is a ZIP file


## Install

```
$ npm install --save is-zip
```


## Usage

```js
var read = require('fs').readFileSync;
var isZip = require('is-zip');

isZip(read('foo.zip'));
//=> true
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
