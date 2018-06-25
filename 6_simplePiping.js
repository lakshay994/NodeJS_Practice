var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/testfile.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writetext.txt');

myReadStream.pipe(myWriteStream);
console.log("file created with a pipe.");
