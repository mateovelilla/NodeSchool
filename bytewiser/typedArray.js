'use strict';
let arrayUint
process.stdin.on('readable', function readable(){
	let buf = process.stdin.read()
	if (buf) {
		arrayUint = new Uint8Array(buf.length)
		buf.forEach((byt,index) => {
			arrayUint[index] = byt
		})
	}
})
process.stdin.on('end', function end(){
	console.log(JSON.stringify(arrayUint))
})
