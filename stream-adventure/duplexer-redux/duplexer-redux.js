'use strict'
const duplexer2 = require('duplexer2')
const through2 = require('through2').obj

module.exports = function(counter) {
	var count = {}
	let input = through2(function(row,_,next){
		count[row.country] = (count[row.country] || 0) + 1
		next()
	}, function(done){
		counter.setCounts(count)
	})
	let duplex = duplexer2({objectMode:true}, input,counter)
	return duplex
}
