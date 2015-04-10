'use strict';

var path = require('path');
var readChunk = require('read-chunk');
var test = require('ava');
var isZip = require('../');

test('should detect ZIP from buffer', function (t) {
	t.plan(2);

	readChunk(path.join(__dirname, 'fixtures/test.zip'), 0, 5, function (err, buf) {
		t.assert(!err, err);
		t.assert(isZip(buf));
	});
});
