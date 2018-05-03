let SearchFunction = require("../search-function");

module.exports = function() {

	let searchText;
	let ursprunglandnamn;

	this.Given(/^that a user is on the mainpage$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback();
	});

	this.When(/^a search is executed with the text: "([^"]*)" and filter: "([^"]*)"$/, function (arg1, arg2, callback) {
		searchText = arg1;
		ursprunglandnamn = arg2;
		callback();
	});

	this.Then(/^products matching the "([^"]*)" and "([^"]*)" will show up$/, function (arg1, arg2, callback) {
		searchText = arg1;
		ursprunglandnamn = arg2;
		callback();
	});
}