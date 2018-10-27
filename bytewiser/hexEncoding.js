'use strict';
let numbers = process.argv.slice(2)
let buf = Buffer.from(numbers)
console.log(buf.toString('hex'))
