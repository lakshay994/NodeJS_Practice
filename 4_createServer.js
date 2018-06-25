var http = require('http');

var server = http.createServer(function(req, res){
    console.log("Request from: " + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end("HelLo Client.")
});

server.listen(3000, '127.0.0.1');
console.log("Server Active");

