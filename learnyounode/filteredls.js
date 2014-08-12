var fs = require('fs');
var path = require('path');

var directoryName = process.argv[2];
var fileExtensionToFilterBy = '.'+ process.argv[3];

function callback(err, fileNames){
	
	fileNames.forEach(function(fileName){
		var fileExtension = path.extname(fileName);
		 if(fileExtension == fileExtensionToFilterBy){
		 	console.log(fileName);
		 }
	});
}

fs.readdir(directoryName,callback);


