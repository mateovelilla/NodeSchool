'use strict'
const level = require("level")
const through = require('through2')
module.exports = function (databaseDir, date, callback) {
	const db = level(databaseDir)
	let total = []
	db.createReadStream({gte:date,lte:`${date}\xff`})
	.on('data',function(twit) {
		total.push(twit.value)
	})
	.on('end',function(){
		db.close(function(err){
			callback(err,total)
		})
	})
}
