let ShoppingCart = require("../shopping-cart.js");

module.exports = function(){

       this.Given(/^that a beverage is sold$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

       this.When(/^the buy order is complete$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

       this.Then(/^products that is bought should be stored in a list of bought items$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

       this.Given(/^that items has been purchased$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

       this.When(/^the items has been transfered to the bought items list$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

       this.Then(/^the items in the list should be sorted with the most bought items at the top$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

}