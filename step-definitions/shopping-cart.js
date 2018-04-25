let Person = require('../person.js');
let myApp = require('../app.js');

module.exports = function() {



  this.When(/^the person selects\/clicks a products$/, function(callback) {
    // Write code here that turns the phrase above into concrete actions
    callback();
  });

  this.Then(/^the product should be put into the shopping cart$/, function(callback) {
    // Write code here that turns the phrase above into concrete actions
    callback();
  });

}