'use strict'
const level = require('level')
module.exports = function(databaseDir,pathJson,callback) {
	const db = level(databaseDir,{valueEncoding: 'json' })
	const json = require(pathJson)
	let operations = []
	json.forEach(element => {
		let key, value
		if(element.type === 'user')
		{
			key = element.name
		} else {
			key = `${element.user}!${element.name}`
		}
		value = element
		operations.push({type:'put',key:key,value:value})

	})
	db.batch(operations, function (error){
		db.close(function(err) {
			callback(err || error)
		})
	})
}
