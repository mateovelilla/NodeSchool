'use strict';
const level = require('level')
const through = require('through2')
module.exports = function (databaseDir){
	let db = level(databaseDir)
	return db.createReadStream()
	.pipe(through({objectMode: true},function(data, enc, next){
		this.push(`${data.key}=${data.value}`)
		next()
	}))
	.on('finish',function(next){
		db.close(next)
	})
}
