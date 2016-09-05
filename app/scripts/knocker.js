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