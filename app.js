// Set up all of our different tools
var express = require('express');
	bodyParser = require('body-parser');
	ejs = require('ejs');

//Application Settings
var app = express();
app.set('view engine', 'ejs');
app.listen(8080);
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/', express.static('./app'));
app.get('/',function(req,res){
	res.render(__dirname + '/app/views/pages/home.ejs');
});

app.get('/help',function(req,res){
	res.render(__dirname + '/app/views/pages/help.ejs');
});

app.get('/request',function(req,res){
	res.render(__dirname + '/app/views/pages/request.ejs');
});



