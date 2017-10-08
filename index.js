'use strict';
module.exports = buf => {
	if (!buf || buf.length < 4) {
		return false;
	}

	return buf[0] === 0x50 && buf[1] === 0x4B && (buf[2] === 0x03 || buf[2] === 0x05 || buf[2] === 0x07) && (buf[3] === 0x04 || buf[3] === 0x06 || buf[3] === 0x08);
};
