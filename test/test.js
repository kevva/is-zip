/*global describe, it */
'use strict';

var assert = require('assert');
var fs = require('fs');
var isZip = require('../');
var path = require('path');

describe('isZip()', function () {
    function check(file) {
        return isZip(fs.readFileSync(file));
    }

    it('should detect ZIP from buffer', function (cb) {
        assert(check(path.join(__dirname, 'fixtures/test.zip')));
        cb();
    });

    it('should detect ZIP from Uint8Array', function () {
        var buf = new Uint8Array([80, 75, 3, 4]);
        assert(isZip(buf));
    });
});
