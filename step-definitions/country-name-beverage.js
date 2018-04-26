let Person = require('../person.js');
let myApp = require('../app.js');

module.exports = function() 
{

       this.Given(/^that user is in the online shop$/, function (callback) 
       {
         
         callback();
       });

       this.When(/^the user clicks on the beverage$/, function (callback) 
       {
	     
	     callback();
	   });


       this.Then(/^the user should be able to see the country name that produced the beverage$/, 
       function (callback) 
       {
         
         callback();
       });


}