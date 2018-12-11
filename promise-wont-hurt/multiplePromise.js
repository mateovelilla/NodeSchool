'use strict';
function all (p1, p2){
	let p = new Promise.all([p1,p2])
	return p
}
all(getPromise1(),getPromise2())
.then(console.log)