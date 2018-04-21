let Person = require('../person.js');
let myApp = require('../app.js');

module.exports = function() {

  this.When(/^the user removes the the beverage in the cart$/, function(callback) {
    // Write code here that turns the phrase above into concrete actions
    callback();
  });

  this.Then(/^the beverage should be removed in the shopping cart$/, function(callback) {
    // Write code here that turns the phrase above into concrete actions
    callback();
  });
}