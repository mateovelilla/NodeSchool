'use strict'
const level = require('level')

function findValues (databaseDir,callback,dataBase = null,i = 0,results = []) {
	var result = results || []
	var errs
	var db = dataBase || level(databaseDir)
	db.on('error',function (err){
		errs = err
	})	
	db.get('key'+ i,function (err, value) {
		if(err && !err.notFound) {
			errs = err
		}else if (!err) {
			result.push(value)
		}
	})
	if (i < 100 && !errs) {
		findValues(databaseDir,callback,db, i + 1,result)
	}else {
		db.close(function(err){
			callback(errs,result)
		})
	}

}
module.exports = findValues
