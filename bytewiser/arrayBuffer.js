'use strict'
let number = Number(process.argv[2])
let arrayInt = new Uint32Array(1)
arrayInt[0] = number
let newArray = new Uint16Array(arrayInt.buffer)
console.log(JSON.stringify(newArray))
