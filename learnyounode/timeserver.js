var net = require('net');

var portNumber = process.argv[2];

function zeroFill(i){
	if(i<10){
		return "0"+i;
	}else{
		return i;
	}
}

function getTimeNow(){
	var date = new Date();
	var year = date.getFullYear();
	var month = zeroFill(date.getMonth() + 1);
	var day = zeroFill(date.getDate());
	var hour = zeroFill(date.getHours());
	var minutes = zeroFill(date.getMinutes());

	var formattedDate = year +"-"+month+"-"+day+" "+hour+":"+minutes+"\n";
	return formattedDate;
}

//can read from and write to socket
function callback(socket){	
	socket.end(getTimeNow());
}

var server = net.createServer(callback);
server.listen(Number(portNumber));