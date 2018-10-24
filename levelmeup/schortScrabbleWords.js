'use strict'
const level = require('level')
module.exports.init = function(db, words, callback) { 
	let transaction = words.map(word => {
		let key = `${word.length}!${word}`
		return {type:'put',key:key,value:word}
	})
	db.batch(transaction,callback)
}

module.exports.query = function (db, word,callback){
	let words = []
	let key =`${word.length}!${word.replace(/\*/g, '')}`
	let error
	db.createReadStream({ start: key, end: key + '\xff' })
		.on('data', function (data) {
			 words.push(data.value)
		})
	    	.on('error', function (err) {
			error = err
		})
	    	.on('end', function () {
			callback(error, words)
		})
}
