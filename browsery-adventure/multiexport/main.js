'use strict'
const ndjson = require('./ndjson')
console.log(ndjson.parse(prompt()))
console.log(ndjson.stringify(prompt()))