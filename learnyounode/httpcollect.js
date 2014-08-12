var http = require('http');

var url = process.argv[2];

var collectedData = '';

function callback(response){	

	response.on('data', function(data){
			collectedData += data;
		});

	response.on('end', function(){		
			var content = collectedData.toString();
			console.log(content.length);
			console.log(content);
	});
}

http.get(url, callback);

