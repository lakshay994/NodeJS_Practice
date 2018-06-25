var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('Server Served the content');
    res.writeHead(200, {'Content-Type': 'application/json'});
    var newOBJ = {
        name: "LAKSHAY",
        job: "NODE developer"
    }
    res.end(JSON.stringify(newOBJ));
});

server.listen(3000, '127.0.0.1');
console.log('Server started....');
