'use strict';
module.exports = function midpoint(start = 0, limit = 1) {
	let midlle = (limit - start)/2;
	return start + midlle;
};
