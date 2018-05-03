let Person = require('../person.js');
let myApp = require('../app.js');

module.exports = function() {


this.Given(/^That the person is searching for a beverage$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });


this.When(/^the person selects a beverage$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });


this.Then(/^they should see the price of that beverage$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });
}