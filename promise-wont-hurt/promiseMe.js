'use strict'
let promise_one = Promise.resolve('Nice Promise')
let promise_two = Promise.reject(new Error("It's bad!"))
promise_two.catch((error) => {
    console.log('Esto fallo papa')
})