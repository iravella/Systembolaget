let Person = require('../person.js');
let myApp = require('../app.js');

module.exports = function() {


	let person = new Person("Abel",25,"blablagatan",17761,"Järfälla")


       this.Given(/^that the person is buying alcohol$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         person.buyOrder();


         callback();
       });



       this.When(/^the person goes to payment$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
        person.payment();
        
         callback();
       });



       this.Then(/^they should see the available payment methods$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         // need frontend testing
         callback();
       });