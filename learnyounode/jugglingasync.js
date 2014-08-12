var http = require('http');

var collectedData = [];

var callbackCount = 0;

function printCollectedData(){	
	for (var i = 0; i <3; i++) {
		var data = collectedData[i];
		console.log(data);
	};		
}

function httpGet(index){
	http.get(process.argv[2 + index], function(response){
		collectedData[index] = '';
		response.on('error', console.error);
		response.on('data', function(data){
			collectedData[index] += data.toString();
		});

		response.on('end', function(){
			callbackCount++;

			if(callbackCount === 3){
				printCollectedData();
			}
		});
	});
}

for (var i = 0; i <3; i++) {
	httpGet(i);
};