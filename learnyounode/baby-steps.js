'use strict'
let sum = process.argv.reduce((accu, current,index) => index > 1 ? accu + parseInt(current) : accu, 0)
console.log(sum);
