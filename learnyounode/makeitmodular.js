var dirReaderAndFilter = require('./dirReaderAndFilter.js');

var directoryName = process.argv[2];
var fileExtensionToFilterBy = process.argv[3];

function callback(err, filteredFiles){

	if(err){
		console.error("Error when reading files");		
	}else{
		filteredFiles.forEach(function (file){
			console.log(file);
		});
	}
		
}

dirReaderAndFilter(directoryName, fileExtensionToFilterBy , callback);