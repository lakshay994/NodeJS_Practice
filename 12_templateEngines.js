var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
});

app.get('/profile/:name', function(req,res){
    var data ={age:23, job:"Node Programmer", hobbies:['coding', 'working out']};
    res.render('index', {name: req.params.name, data: data});
});

app.listen(3000);
