 let ShoppingCart = require('../shopping-cart.js');
 let myApp = require('../app.js');

 module.exports = function() {
   let aShoppingCart, aProduct1, aProduct2, aProduct3;
   this.Given(/^that a person has an (\d+) selected items in his shoppingcart$/, function(arg1, callback) {

     //adding 3 fake products to the shopping cart
     aProduct1 = myApp.products[500];
     aProduct2 = myApp.products[1200];
     aProduct3 = myApp.products[400];
     // console.log(aProduct1);
  
     aShoppingCart = new ShoppingCart();
     aShoppingCart.add(aProduct1, 5);
     aShoppingCart.add(aProduct2, 10);
     aShoppingCart.add(aProduct3, 4);
     
     callback();

   });

   this.When(/^the person clicks  delete on (\d+)nd item in the shoppingcart$/, function(arg1, callback) {
     // I want to delete the 2nd product from the shoppingcart
     aShoppingCart.remove(aProduct2);
     callback();
   });


   this.Then(/^the (\d+)nd item should be deleted from the shoppingcart$/, function(arg1, callback) {
     //Now the shoppingcart should have 2 products
     console.warn(aShoppingCart.thingsToBuy);
     assert.deepEqual(aShoppingCart.thingsToBuy, [
     	{product:aProduct1, quantity: 5}, 
     	{product:aProduct3, quantity: 4}],
     	"The item was not deleted by calling remove."
     );
     callback();
   });
 }