 let Person = require('../person.js');
 let myApp = require('../app.js');

 module.exports = function() {

 	this.Given(/^that the person is a registered user$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

   this.When(/^the user clicks on products\/certain categories$/, function(callback) {
     // Write code here that turns the phrase above into concrete actions
     callback();
   });

   this.Then(/^the user should be able to see the information of that product$/, function(callback) {
     // Write code here that turns the phrase above into concrete actions
     callback();
   });
 }