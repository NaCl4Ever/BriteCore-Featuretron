// Set up all of our different tools
var express = require('express');
	bodyParser = require('body-parser');
	ejs = require('ejs');
	mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost/Jpettycoat')
	dbSystem = require('./app/scripts/mongo.js');

console.log(dbSystem.findUser(1923));

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

app.get('/login',function(req,res){
	res.render(__dirname + '/app/views/pages/login.ejs');
});

app.get('/register',function(req,res){
	res.render(__dirname + '/app/views/pages/register.ejs');
});

app.get('/request',function(req,res){
	res.render(__dirname + '/app/views/pages/request.ejs');
});


//Ajax or otherwise paths that return a value that isn't a page.
app.get('/user/:userId',function(req,res){
	var userId = req.params.recipeID;
	res.status(200).json(dbSystem.findUser(userId));

});

app.get('/user/:user',function(req,res){
	var userId = req.params.recipeID;
	res.status(200).json(dbSystem.findUserByName(user));

});


app.get('/user/register', function(req, res){
	console.log('Params they sent');
	console.dir(req.data);
	res.status(200);
});