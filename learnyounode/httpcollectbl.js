var bl = require('bl');
var http = require('http');

var url = process.argv[2];

function callback(response){
	response.pipe(bl(function(err, data){

		if(err){
			return console.err("Error");
		}else{
			var content = data.toString();
			console.log(content.length);
			console.log(content);
		}
		
	}));
}

http.get(url, callback);