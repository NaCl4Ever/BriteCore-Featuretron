var exports = module.exports = {};
var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

//Here we will have all of our different schemas to build and work with. 
var Schema = mongoose.Schema;
var userSchema = new Schema({
	firstName: String
	,lastName: String
	,requesterId: Number
	,email : String
	,pass : String
});

var mUser = mongoose.model('User', userSchema);


exports.checkRequests = function(){
	
};

exports.findUser = function(id){
	mUser.findOne({ requesterId: id}, function(err, user){
		if(err) return console.error(err);
		console.log(user);
	});
};

exports.findUser = function(id){
	mUser.findOne({ requesterId: id}, function(err, user){
		if(err) return console.error(err);
		console.log(user);
	});
};


exports.returnAllUsers = function(){
	mUser.find(function(err, users){
		console.dir(users);
	});
};

exports.registerUser = function(user){
	db.collection('users').insert(user, function(err, user){
		if(err) return console.error(err);
		console.log("User inserted correctly");
	});
};

exports.validateUser = function(user, callback){
	mUser.find({email: user.email, pass: user.pass}, function(err, user){
		if(err) return console.error(err);
		
		if(user){ 
			callback(true);
		}
		else {callback(false);}
	});
};