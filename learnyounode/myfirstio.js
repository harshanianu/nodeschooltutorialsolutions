var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var fileContent = buf.toString();
var substrings = fileContent.split('\n');
var numOfLines = substrings.length - 1;

console.log(numOfLines);