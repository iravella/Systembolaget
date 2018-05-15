let ShoppingCart = require('../shopping-cart.js');
let myApp = require('../app.js');



module.exports = function() {

  let aShoppingCart, aProduct1, aProduct2, aProduct3, Item;

  this.Given(/^that the user has (\d+) selected products with the some quantities$/, function(arg1, callback) {
  	// Adding products to the shoppingcart
    aProduct1 = myApp.products[0];
    aProduct2 = myApp.products[1200];
    aProduct3 = myApp.products[400];

    aShoppingCart = new ShoppingCart();
    aShoppingCart.add(aProduct1, 5);
    aShoppingCart.add(aProduct2, 10);
    aShoppingCart.add(aProduct3, 4);
    console.warn("Items in the cart before removing the quantity", aShoppingCart.thingsToBuy);
    callback();
  });

  this.When(/^the user remove certain quantity of the selected item$/, function(callback) {
    //removing certain  quantity 
    aShoppingCart.changeQuantity(aProduct2, 5);
   
    callback();
  });


  this.Then(/^the shoppingcart should be updated$/, function(callback) {
  	console.warn("Items in the cart after removing certain quantity", aShoppingCart.thingsToBuy);
    assert.deepEqual(aShoppingCart.thingsToBuy, [
        { product: aProduct1, quantity: 5 },
        { product: aProduct2, quantity: 5 },
        { product: aProduct3, quantity: 4 }
      ],
      "The qunatity is not removed."
    );
    callback();
  });
}