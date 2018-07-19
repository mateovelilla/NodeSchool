'use strict'
const combiner = require('stream-combiner')
const through2 = require('through2').obj
const zlib = require('zlib') 
module.exports = function(){
	let flat = true
	let books = {}
	const gzip = zlib.createGzip()
	let readNewLine = through2(function(buffer,_,next){
		if (buffer.length === 0) return next();
		this.push(JSON.parse(buffer.toString()))
		next()
	})
	let groupBooks = through2(function(obj,_,next){
		if(obj.type === 'genre' && flat){
			books = {'name':obj.name,'books':[]}
			flat = false
		}else if(obj.type === 'genre' && !flat){
			this.push(JSON.stringify(books) + '\n')
			books = {'name':obj.name,'books':[]}
		}else{
			books.books.push(obj.name)
		}
		next()
	},function(next){
		this.push(JSON.stringify(books) + '\n')
		next()
	})
	/*let gzip = through2(function(obj,_,next){
		console.log(obj)
		next()
	})*/
	return combiner(readNewLine,groupBooks,gzip)
}
