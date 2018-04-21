let Person = require('../person.js');
let myApp = require('../app.js');

module.exports = function() {

  this.Given(/^that user has already added a product in their shopping cart$/, function(callback) {
    // Write code here that turns the phrase above into concrete actions
    callback();
  });

  this.When(/^the user changes the quantity of the beverage in the cart$/, function(callback) {
    // Write code here that turns the phrase above into concrete actions
    callback();
  });

  this.Then(/^the quantity should be changed in the shopping cart$/, function(callback) {
    // Write code here that turns the phrase above into concrete actions
    callback();
  });
}