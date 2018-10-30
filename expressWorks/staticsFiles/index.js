'use strict'
const express = require('express')
const path = require('path')
const app = express()
const port = process.argv[2]
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

app.listen(port)
