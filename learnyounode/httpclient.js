var http =  require('http');

var url = process.argv[2];

//response is a node stream object, emit events - data, error, end
function callback(response){	
	response.setEncoding('utf8');
	response.on('data', console.log);
	response.on('error', console.error);
}

http.get(url, callback);