let Person = require('../person.js');
let myApp = require('../app.js');
let ShoppingCart = require('../shopping-cart.js');

module.exports = function() {

  this.Given(/^that the user has (\d+) products in his shopping cart$/, function(arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback();
  });

  this.When(/^the user clicks shopping cart$/, function(callback) {
    // Write code here that turns the phrase above into concrete actions
    callback();
  });

  this.Then(/^the user should should see (\d+) products in his shopping cart$/, function(arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback();
  });


}