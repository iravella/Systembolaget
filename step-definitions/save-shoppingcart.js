 let ShoppingCart = require('../shopping-cart.js');
 let myApp = require('../app.js');


 module.exports = function() {
   let aShoppingCart;

   this.Given(/^that the user has some products in the shoppingcart$/, function (callback) {
         
     aShoppingCart = new ShoppingCart();
     aShoppingCart.add(myApp.products[700], 5);
     aShoppingCart.add(myApp.products[500], 5);
     aShoppingCart.add(myApp.products[1200], 10);
     //console.log(myApp.products[500]);
     //console.log(myApp.products[1200]);
     //console.log(myApp.products[700]);

     callback();
   });

   this.When(/^the user leave the shoppingcart or close the browser$/, function (callback) {
     // Write code here that turns the phrase above into concrete actions
     callback();
   });

   this.When(/^when the user reopens the browser$/, function (callback) {
     // Write code here that turns the phrase above into concrete actions
     
     callback();
   });

   this.Then(/^the same shoppingcart should be reopened$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         //loadcart.aShoppingCart();
         callback();
       });

 }