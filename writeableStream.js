var fs 				  = require('fs'),
	stream 			  = require('stream'),
	readStream  	  = fs.createReadStream('lipsum.txt'),
	writeStream 	  = fs.createWriteStream('lipsum-new.txt'),
	customWriteStream = new stream.Writable;

customWriteStream._write = function(chunk, enc, cb) {
	console.log("[CUSTOM]: " + chunk);
}

readStream.pipe(customWriteStream);
readStream.pipe(writeStream);