var fs = require('fs');
var http = require('http');

var portNumber = process.argv[2];
var fileLocation = process.argv[3];

function callback(request, response){
	response.writeHead(200, {'content-type':'text/plain'});
	var fileStream= fs.createReadStream(fileLocation); 
	fileStream.pipe(response);
}

var server = http.createServer(callback);
server.listen(Number(portNumber));

