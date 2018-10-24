'use strict'
const level = require('level')
module.exports = function (databaseDir, callback) {
	const sub = require('level-sublevel')
	let db = sub(level(databaseDir))
	let error
	db.on('error', function (err) {
		error = err
	 })
	 let robots = db.sublevel('robots')
	  robots.put('slogan', 'beep boop')
	 let dinosaurs = db.sublevel('dinosaurs')
	 dinosaurs.put('slogan', 'rawr')
	 db.close(function (err) {
	 	callback(error || err)
	 })
}
