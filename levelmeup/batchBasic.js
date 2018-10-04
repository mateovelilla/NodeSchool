'use strict'
const level = require('level')
module.exports = function(databaseDir, changes,callback){
	const db = level(databaseDir)
	let finallyBatch = []
	for (const action in changes){
		if (changes[action].length && changes[action].length > 0){
			for(let i = 0;i < changes[action].length;i++){
				finallyBatch.push({type:action,key:changes[action][i]})
			}
		}else{
			for(const objects in changes[action]){
				finallyBatch.push({type:action,key:objects,value:changes[action][objects]})
			}
		}

	}
	db.batch(finallyBatch,function(err){
		if(err) return console.log(err)
	})
	db.close(function(err){
		callback(err)
	})
}
