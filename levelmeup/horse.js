'use strict'
const level = require("level")
const through = require('through2')
module.exports = function (databaseDir, date, callback) {
	const db = level(databaseDir)
	let total = 0
	db.createReadStream({gte:date})
	.on('data',function(twit) {
		total++;
	})
	.on('end',function(){
		db.close(function(err){
			callback(err,total)
		})
	})
}
