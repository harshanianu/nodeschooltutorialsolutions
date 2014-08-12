var http = require('http');
var map = require('through2-map');

var portNumber = process.argv[2];

function callback(request, response){

	if(request.method != 'POST'){
		return response.end('send me a POST\n');
	}	

	request.pipe(map(function(recievedData){
		return recievedData.toString().toUpperCase();
	})).pipe(response);	
}

var server = http.createServer(callback);
server.listen(Number(portNumber));
