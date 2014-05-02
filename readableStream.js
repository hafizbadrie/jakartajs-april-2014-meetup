var fs 			= require('fs'),
	readStream 	= fs.createReadStream('lipsum.txt'),
	util 		= require('util'),
	start_time 	= Date.now();

// readStream
// 	.on('data',  function(data) {  })
// 	.on('error', function(err)  { console.log('Error: ' + err); })
// 	.on('end', 	 function() 	{ 
// 					var end_time = Date.now(),
// 						elapsed  = end_time - start_time;
					
// 					console.log("Stream elapsed: " + elapsed); 
// 					console.log(util.inspect(process.memoryUsage()));
// 				});

start_time = Date.now();
fs.readFile('lipsum.txt', 'utf8', function(err, data) {
	var end_time = Date.now(),
		elapsed  = end_time - start_time;
	console.log("Read elapsed: " + elapsed);
	console.log(util.inspect(process.memoryUsage()));
});