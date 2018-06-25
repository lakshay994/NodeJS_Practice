var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('template');
});

app.get('/contact', function(req, res){
    console.log(releaseEvents.query);
    res.render('contact', {qs: req.query});
});

app.listen(3000);