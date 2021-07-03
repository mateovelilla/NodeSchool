'use strict'

const http = require('http');
const bl = require('bl');
const path = process.argv[2];
http.get(path,(response) => {
	response.pipe(bl((err,data) => {
		console.log(data.length)
		console.log(data.toString())
		if (err) {
			throw err;
		}
	}))
})

