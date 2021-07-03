'use strict'

const path = process.argv[2]
const fs = require('fs')
const buffer = fs.readFileSync(path);
const content = buffer.toString();
console.log(((content.split('\n')).length) - 1)
