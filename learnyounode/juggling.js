'use strict'
const http = require('http')
let urls = process.argv.slice(2)
function get(url) {
	return new Promise((resolve,reject) => {
		http.get(url,(res) => {
			let rawData = ''
			res.on('data', (chunk) => { rawData += chunk.toString(); });
			res.on('end', () => {
				return resolve(rawData)	
			 });
		})
	})
}

async function viewResult (urls){
	let results = []
	results = await Promise.all(
	urls.map(async (value,index) => {
		return await get(value)
	}))

	return results
}

viewResult(urls)
.then((results) => {
	results.forEach((value, key)=>{
		console.log(value)
	})
})
.catch((exception) => {
	console.log(exception)
})
