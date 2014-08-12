var total = 0;

for (var i = 2; i < process.argv.length; i++) {
	var value = Number(process.argv[i]);
	total = total + value;
};

console.log(total);

