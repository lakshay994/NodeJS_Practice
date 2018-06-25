var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('Server Started');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/testFile.txt', 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Now listening on port 3000');