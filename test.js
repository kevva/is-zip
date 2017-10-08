import fs from 'fs';
import path from 'path';
import test from 'ava';
import m from '.';

test(t => {
	t.true(m(fs.readFileSync(path.join(__dirname, 'fixture.zip'))));
});
