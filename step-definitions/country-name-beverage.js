let Person = require('../person.js');
let myApp = require('../app.js');

module.exports = function() 
{

       this.Given(/^that user is a registered person$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

       this.When(/^the user clicks on the beverage$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

       this.Then(/^the user should be able to see the country name from where the beverage come from$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

}