let Person = require('../person.js');
let myApp = require('../app.js');
let ShoppingCart = require('../shopping-cart.js');

module.exports = function() {

  let itemsInCart;

       this.Given(/^that the user has products in his shopping cart$/, function (callback) {
         shared.shoppingcart.theShoppingCart = new ShoppingCart();
         //Creating fake items
         shared.shoppingcart.theShoppingCart.add(myApp.products[729], 3);
         shared.shoppingcart.theShoppingCart.add(myApp.products[1337], 3);
         callback();
       });



       this.When(/^the user checks his shopping cart$/, function (callback) {
         itemsInCart = shared.shoppingcart.theShoppingCart.getCartItems();
         callback();
       });



       this.Then(/^the user should should see the products in the shopping cart$/, function (callback) {

         assert.deepEqual(itemsInCart, [
          {product:myApp.products[729], quantity: 3},
          {product:myApp.products[1337], quantity: 3} ], 
          "Your shopping cart doesn't contain your products"
          );
         // console.log(myApp.products[1337]);
         // console.log(myApp.products[729]);
         callback();
       });


}