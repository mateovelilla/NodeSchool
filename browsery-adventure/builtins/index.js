'use strict'
const url = require('url')
const querystring = require('querystring')
const address = prompt();
var query = url.parse(address).query;
var params = querystring.parse(query);
console.log(url.resolve(address, params.file));