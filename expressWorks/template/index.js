'use strict'
const path = require('path')
const port = process.argv[2]
const pathArgv = process.argv[3]
const express =  require('express')
const app = express()
app.set('views',pathArgv ||  path.join(__dirname, 'pugTemplates'))
app.set('view engine', 'pug')
app.get('/home',function(req ,res) {
	res.render('index',{date: new Date().toDateString()})
})
app.listen(port)
