'use strict'
function parsePromised() {
    let promise = new Promise((resolve,reject) => {
        try {
            let json = JSON.parse(process.argv[2])
            resolve(json)
        } catch (error) {
            reject(error)
        }
    })
    return promise
}
parsePromised().then(null,err => console.log(err.message))
