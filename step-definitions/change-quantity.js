let Person = require('../person.js');
let myApp = require('../app.js');
let ShoppingCart = require('../shopping-cart.js');

module.exports = function() {

  let aShoppingCart, aProduct1, aProduct2;

  this.Given(/^that user has already added a product in their shopping cart$/, function(callback) 
  {
    // Creating products and add to the shopping cart
     aProduct1 = myApp.products[300];
     aProduct2 = myApp.products[200];
     aShoppingCart = new ShoppingCart();
     aShoppingCart.add(aProduct1, 3);
     aShoppingCart.add(aProduct2, 5);
     console.warn(aShoppingCart.thingsToBuy);
     callback();
  });


   this.When(/^the user changes the quantity of the beverage in the cart$/, function (callback) 
  {
    // change the quantity of aProduct1(10) insted of aProduct1(3)
    aShoppingCart.changeQuantity(aProduct1,10);
    
    callback();
  });


  this.Then(/^the quantity should be changed in the shopping cart$/, function (callback) {
    // Display the updated cart

    console.warn(aShoppingCart.thingsToBuy);
     assert.deepEqual(aShoppingCart.thingsToBuy, [
      {product:aProduct1, quantity: 10}, 
      {product:aProduct2, quantity: 5}],
      "The quantity didn't change."
     );
    callback();
  });
}