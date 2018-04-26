 let Person = require('../person.js');
 let myApp = require('../app.js');

 module.exports = function() {
   this.When(/^the clicks on delete item in shoppingcart$/, function(callback) {
     // Write code here that turns the phrase above into concrete actions
     callback();
   });

   this.Then(/^the item should be deleted from the shoppingcart$/, function(callback) {
     // Write code here that turns the phrase above into concrete actions
     callback();
   });
 }