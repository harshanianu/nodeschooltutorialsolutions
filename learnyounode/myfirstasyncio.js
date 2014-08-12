var fs = require('fs');

function callback(err, data){
	
		var fileContent = data;
		var substrings = fileContent.split('\n');
		var numOfLines = substrings.length -1;
		console.log(numOfLines);
}

fs.readFile(process.argv[2], 'utf8', callback);
