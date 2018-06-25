var express = require('express');
var app = express();

app.get('/profile/:id', function(req, res){
    res.send("Your request for the asked id number: " + req.params.id);
});

app.listen(3000);
