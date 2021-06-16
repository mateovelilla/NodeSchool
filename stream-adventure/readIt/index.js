
const { Readable } = require('stream');
class ReadableStream extends Readable{
    _read(){}
}
const myStream = new ReadableStream()
myStream.push(process.argv[2])
myStream.pipe(process.stdout)