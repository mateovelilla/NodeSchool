'use strict'
let promise = new Promise(function (fulfill, reject) {
    setTimeout(() => {
        return fulfill('FULFILLED!')
    }, 300);
});
promise.then(console.log)