'use strict'

let url = process.argv[2]
let fs = require('fs')
let buffer = fs.readFileSync(url);
let content = buffer.toString();
console.log(((content.split('\n')).length) - 1)
