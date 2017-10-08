# is-zip [![Build Status](https://travis-ci.org/kevva/is-zip.svg?branch=master)](https://travis-ci.org/kevva/is-zip)

> Check if a Buffer/Uint8Array is a ZIP file


## Install

```
$ npm install --save is-zip
```


## Usage

```js
const fs = require('fs');
const isZip = require('is-zip');

isZip(fs.readFileSync('foo.zip'));
//=> true
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
