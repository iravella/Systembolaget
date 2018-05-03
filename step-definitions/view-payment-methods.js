let Person = require('../person.js');
let myApp = require('../app.js');

module.exports = function() {




       this.Given(/^that the person is buying alcohol$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });



       this.When(/^the person is going to pay for the alcohol$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });



       this.Then(/^they should see the available payment methods$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });