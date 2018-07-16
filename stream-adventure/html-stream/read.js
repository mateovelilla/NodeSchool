'use strict'
var trumpet = require('trumpet');
var tr = trumpet();

tr.select('.msg').createReadStream().pipe(process.stdout);

var fs = require('fs');
fs.createReadStream('input.html').pipe(tr);
