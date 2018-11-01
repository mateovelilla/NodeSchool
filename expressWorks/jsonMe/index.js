'use strict'
const express = require('express')
const app = express()
const port = process.argv[2]
const file = require(process.argv[3])
app.get('/books',function(req, res){
	res.json(file)
})
app.listen(port)
