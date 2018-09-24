'use strict';
const level = require('level')
module.exports = function (databaseDir, key, callback) {
	const db = level(databaseDir)
	db.get(key,function(err, value){
		db.close(function(err){
			callback(err,value)
		})
	})
}
