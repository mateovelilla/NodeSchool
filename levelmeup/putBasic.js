'use strict'
const level = require('level')
module.exports = function (databaseDir,obj,callback) {
	const db = level(databaseDir)
	db.on('err',function (err) {
		console.log(err)
	})
	let key = Object.keys(obj)
	key.forEach((property) => {
		db.put(property,obj[property])
	})
	db.close(function(err){
		callback(err)
		console.log(err)
	})
}
