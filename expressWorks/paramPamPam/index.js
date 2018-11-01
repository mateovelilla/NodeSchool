'use strict'
const express = require('express')
const app = express()
app.put('/message/:id', function(req,res) {
	let phrase = require('crypto').createHash('sha1')
	.update(new Date().toDateString() + req.params.id)
	.digest('hex')
	res.end(phrase)
})
app.listen(process.argv[2])
