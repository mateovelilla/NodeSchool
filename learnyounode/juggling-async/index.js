'use strict'

const http = require('http');
const bl = require('bl');
const urls = process.argv.slice(2)
function get(url) {
	return new Promise((resolve,reject) => {
		http.get(url,(res) => {
      res.pipe(bl((err,data)=> resolve(data.toString())));
		})
	})
}

const viewResult = async (urls) => await Promise.all(urls.map((value) =>  get(value)))
viewResult(urls)
.then((results) => {
	results.forEach((value, key)=>{
		console.log(value)
	})
})
.catch((exception) => {
	console.log(exception)
})
