let SearchFunction = require("../search-function");

module.exports = function() {

  let searchBeverage;


  this.Given(/^that veteöl is the searched for name$/, function (callback){
    //Add the search word "Veteöl" to the searchByName method
    searchBeverage = new SearchFunction;
    searchBeverage("Veteöl");
    callback();
  });

  this.When(/^search is executed$/, function (callback) {
    //Search
    callback();
  });

  this.Then(/^an array containing all the veteöl will show up$/, function (callback) {
    //Show result of the search in array form
    console.log(searchBeverage.searchResults());
    callback();
  });
}