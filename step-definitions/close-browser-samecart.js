let myApp = require('../app.js');
let Shoppingcart = require('../shopping-cart.js');

module.exports = function() {




  this.Given(/^that user has already (\d+) selected items in his shoppingcart$/, function(arg1, callback)
  {
    // Write code for test after website is designed
    callback();
  });


  this.When(/^the user close the browser and reopen same browser$/, function(callback) 
  {
    // Write code for test after website is designed
    callback();
  });



  this.Then(/^the shoping cart should be display whatever the user has already in his cart$/, 
  function(callback) 
  {
    // Write code for test after website is designed
    callback();
  });



}