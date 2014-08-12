var fs = require('fs');
var path = require('path');

module.exports = function (directoryName, fileNameExtension, callback){

	var fileExtensionToFilterBy = '.'+ fileNameExtension ;	

	function filterFiles(err, fileNames){

		if(err){

			return callback(err);

		}else{			

			fileNames = fileNames.filter(function (fileName){
				return path.extname(fileName) === fileExtensionToFilterBy;
			});
			
			callback(null, fileNames);			
		}

	}

	fs.readdir(directoryName,filterFiles);

}



