'use strict';
const http = require('http');
const Async = require('async');
const url = process.argv[2];
let response = '';
let count = 0
Async.whilst(()=> {
    return !/meerkat/.test(response.trim());
},(callback) => {
    http.get(url,(res) => {
        let body = '';
        res.on('data',chunk => body+=chunk.toString())
        res.on('end',() => {
            count++;
            response = body
            callback()
        })
    })
},(err) => {
    if(err) console.log(err.message)
    console.log(count)
})