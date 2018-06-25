var fs = require('fs');

var myInputStream = fs.createReadStream(__dirname + '/testFile.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeTest.txt');

myInputStream.on('data', function(chunk){
    console.log("New Chunk Recieved");
    myWriteStream.write(chunk);
});

