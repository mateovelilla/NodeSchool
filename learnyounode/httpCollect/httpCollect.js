'use strict'

let http = require('http')
let bl = require('bl')
let url = process.argv[2]
http.get(url,(response) => {
	response.pipe(bl((err,data) => {
		console.log(data.length)
		console.log(data.toString())
		if (err) {
			throw err;
		}
	}))
})

