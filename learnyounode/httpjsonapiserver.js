var http = require('http');
var url = require('url');

var portNumber = process.argv[2];

function parseTime(recievedDate){
	var timestamp = {
				hour : recievedDate.getHours(),
				minute : recievedDate.getMinutes(),
				second : recievedDate.getSeconds()
			};
	return timestamp;
}

function unixTime(recievedDate){
	var timestamp = {
				unixtime : recievedDate.getTime()
			}
	return timestamp;
}

function callback(request, response){

	if(request.method == 'GET'){
		var parsedUrl = url.parse(request.url, true);	
		var recievedDate = new Date(parsedUrl.query.iso);

		var result = '';	
		
		if(parsedUrl.pathname == '/api/parsetime'){				

			result = parseTime(recievedDate);

		}else if(parsedUrl.pathname == '/api/unixtime'){
	
			result = unixTime(recievedDate);

		}

		if(result){
			response.writeHead(200, {'content-type':'application/json'});
			response.end(JSON.stringify(result));
			response.writeHead(404);
			response.end();
		}
		
	}
	
}

var server = http.createServer(callback);
server.listen(Number(portNumber));