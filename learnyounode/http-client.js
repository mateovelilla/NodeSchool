'use strict'
const http = require('http');
const url = process.argv[2];

http.get(url,(response) => {
	response.on('err',(e) => {
		console.log('error: '+ e.message)
	});

	response.on('data',(data) => {
		console.log(data.toString())
	});
})
