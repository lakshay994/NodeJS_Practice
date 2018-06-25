var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var urlEncodedParser = bodyParser.urlencoded({extended : false});

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/contact', function(req, res){
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlEncodedParser, function(req, res){
    console.log(req.body);
    res.render('contact-response', {data : req.body});
});

app.listen(3000);
