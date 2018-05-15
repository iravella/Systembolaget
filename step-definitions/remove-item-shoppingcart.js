  let ShoppingCart = require('../shopping-cart.js');
  let myApp = require('../app.js');
  module.exports = function() {
    let aShoppingCart, aProduct1, aProduct2, aProduct3, ItemsInCart;


    this.Given(/^that the user has Zero products in the shoppingcart$/, function(callback) {
      aShoppingCart = new ShoppingCart();
      ItemsInCart = aShoppingCart.getCartItems();
      
      callback();
    });

    this.When(/^the user deletes an item from the shoppingcart$/, function(callback) {
      
      
      // if (ItemsInCart<1)
      //   console.log("ShoppingCart is empty");
      callback();
    });

    this.Then(/^an error message should pop up$/, function(callback) {
      //alert("cannot be removed anything from an empty an cart ");
      assert.deepEqual(ItemsInCart!=[],"shoppingcart is not empty,the cart has some items");
      //console.log("cannot be removed anything from an empty an cart ");
      callback();
    });




    this.Given(/^that a person has an (\d+) selected items in his shoppingcart$/, function(arg1, callback) {

      //adding 3 fake products to the shopping cart
      aProduct1 = myApp.products[0];
      aProduct2 = myApp.products[1200];
      aProduct3 = myApp.products[400];
      //console.log("name of the product1",aProduct1);

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
          { product: aProduct1, quantity: 5 },
          { product: aProduct3, quantity: 4 }
        ],
        "The item was not deleted by calling remove."
      );
      callback();
    });
  }