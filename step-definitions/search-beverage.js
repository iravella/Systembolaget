// let SearchFunction = require("../search-function");

// module.exports = function() {
// 	let searchFunction;
// 	let searchText;
// 	let ursprunglandnamn;
// 	let searchResults;
// 	let pass;

// 	this.Given(/^that a user is on the mainpage$/, function (callback) {
// 		// Write code here that turns the phrase above into concrete actions
// 		callback();
// 	});

// 	this.When(/^a search is executed with the text: "([^"]*)" and filter: "([^"]*)"$/, function (arg1, arg2, callback) {
// 		searchText = arg1;
// 		ursprunglandnamn = arg2;
// 		searchFunction = new SearchFunction(searchText, ursprunglandnamn);
// 		searchResults = searchFunction.search();
// 		callback();
// 	});

// 	this.Then(/^products matching the "([^"]*)" and "([^"]*)" will show up$/, function (arg1, arg2, callback) {
			
// 				searchText = arg1;
// 				ursprunglandnamn = arg2;

// 				assert ( allValuesOfUrsprung.includes(product.ursprunglandnamn) )
// 				if  

// 				for(let product of productsDisplayed) {
// 					assert(searchCriterias.includes(product.ursprunglandnamn), "the ursprunglandnamn didn't match any name of a country in the searchCriterias Array");

// 					pass = false;
// 					for (let attribute of product) {
// 						if ( attribute.includes(searchText) ) {
// 							pass = true
// 						}
// 					};
// 				}

// 			assert (pass == true, "the searchtext didnt find any matching attributes")

// 			callback();

// 	});

		
	
