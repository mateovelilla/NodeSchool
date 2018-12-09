'use strict'
function attachTitle (hero) {
    return `DR. ${hero}`
}
let promise = new Promise((resolve,reject) => {
    return resolve('MANHATTAN')
})
.then(attachTitle)
promise.then(value => console.log(value))