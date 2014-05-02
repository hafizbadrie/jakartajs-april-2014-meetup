var http = require('http'),
	fs   = require('fs');

// http.createServer(function(req, res) {
// 	var readStream = fs.createReadStream('lipsum.txt');
	
// 	readStream.pipe(res);
// }).listen(3000, '127.0.0.1');

http.createServer(function(req, res) {
	fs.readFile('lipsum.txt', 'utf8', function(err, data) {
		res.end(data);
	});
}).listen(3000, '127.0.0.1');
console.log('Node JS Server is running at http://127.0.0.1:3000');
