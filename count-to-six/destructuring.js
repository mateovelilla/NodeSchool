'use stric';
let userArray = process.argv.slice(2);
let object = {};
[,object.username,object.email] = userArray;
console.log(object);
