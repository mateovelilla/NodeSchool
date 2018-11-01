'use strict'
const port = process.argv[2]
const pathAssets = process.argv[3]
const express = require('express')
const app = express()
app.use(require('stylus').middleware(pathAssets))
app.use(express.static(pathAssets))
app.listen(port)
