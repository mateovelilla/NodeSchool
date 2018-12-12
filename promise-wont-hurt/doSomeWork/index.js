'use strict';
const qhttp = require('q-io/http');
qhttp.read("http://localhost:7000")
.then(response => {
	let id = response.toString();
	return id
})
.then(id => {
	qhttp.read(`http://localhost:7001/${id}`)
	.then(buffer => {
		console.log(JSON.parse(buffer))
	},console.error)
}, console.error)
.done()