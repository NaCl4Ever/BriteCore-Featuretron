var RequestModel  = function(data){
	this.name = ko.observable(data.name);
	this.requester = ko.observable(data.requester);
	this.status = ko.observable(data.status);
	this.requestDate = ko.observable(data.requestDate);
	this.completionDate = ko.observable(data.completionDate);
};

var RequestViewModel = function(){
	this.requests = ko.observableArray();
	this.listItems = [
		{linkTarget : "/", linkText: "Home"}
		,{linkTarget : "/help", linkText: "Help"}
		,{linkTarget : "/request", linkText: "Requests"}

	]
};

$(function(){
	var viewModel = new RequestViewModel();

	ko.applyBindings(viewModel);
});

$('#register-submit').on('click',function(){
	console.log('You clicked submit register');
	$("input.required").each(function(index){
		if($(this).val().length <= 0){
			console.log('It fired');
			alert('Please fill out all forms that are highlighted');
			return
		}
	});

});
// var user = null;
// var locale = window.location.href;
// if(user !== null){
// 	$.ajax({
// 		url: "/user/" + user.id,
// 		type: "GET"
// 	}).then(function(user){

// 	});
// }
// else if (locale.indexOf("login") > 0)
// {
// 	console.log('You need to login to see the show or maybe sign up.');

// }
// else
// 	window.location.href = "login";