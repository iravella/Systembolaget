let Person = require('../person.js');
let myApp = require('../app.js');

module.exports = function() 
{
      let aPerson;

       this.Given(/^that user is a registered person$/, function (callback) {
        // creating an instance of a  person
        aPerson = new Person("Swapna",'840304','Saimagatan','20090','stockholm');
         
         callback();
       });

       this.When(/^the user chooses a "([^"]*)" beverage$/, function (arg1, callback) {
         //whene the user chooses a beverage
         callback();
       });

       this.Then(/^the user should be able to see the country name from where the beverage come from$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

}