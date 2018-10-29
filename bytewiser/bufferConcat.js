'use strict';
let buf = Buffer.alloc(0)
process.stdin.on('readable', function readable (){
	let bufStdin = process.stdin.read()
	buf = bufStdin?Buffer.concat([buf,bufStdin],bufStdin.length + buf.length) : buf
})
process.stdin.on('end', function end(){
	console.log(buf)
})
