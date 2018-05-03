let Person = require('../person.js');
let myApp = require('../app.js');


module.exports = function()

{
       let aPerson, aProductNamn;

       this.Given(/^that user is a registered user$/, function (callback) 
       {
         // Write code here that turns the phrase above into concrete actions
         aPerson = new Person('Anna Andersson', '19950901', 'Kyrkogatan 21', '22222', 'Lund');
         callback();
       });

        this.When(/^the user chooses a certain beverage "([^"]*)"$/, function (namn, callback) 
       {
        // Write code here that turns the phrase above into concrete actions
        aProductNamn = namn;
        //console.warn(aProductNamn);
        callback();
       });


       this.Then(/^the user should get basic information of the beverage ursprunglandnamn "([^"]*)", volymiml (\d+), alkoholhalt "([^"]*)" and prisinklmoms (\d+)$/, function (ursprunglandnamn, volymiml, alkoholhalt, prisinklmoms, callback) {
         // Write code here that turns the phrase above into concrete actions

         //console.warn(ursprunglandnamn);
         callback();
       });
 
}