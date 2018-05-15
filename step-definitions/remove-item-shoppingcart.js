  let ShoppingCart = require('../shopping-cart.js');
  let myApp = require('../app.js');
  module.exports = function() {
    let aShoppingCart, aProduct1, aProduct2, aProduct3, ItemsInCart,productToRemove,
     iTem1,iTem2,iTem3,productToAdd1,productToAdd2,productToAdd3;

     // Scenario 1
    this.Given(/^that the user has Zero products in the shoppingcart$/, function(callback) {
      //creating an instance of the shoppingcart
      aShoppingCart = new ShoppingCart();
      callback();
    });

    this.When(/^the user tries to delete an item from the shoppingcart$/, function (callback) {
      // run the delete/remove function here
      for( let product of myApp.products){

     if(product.namn === "Renat")
     { 
        productToRemove = product;
        break;
      }
    }
    try {
      aShoppingCart.remove(productToRemove);
    } catch (error) {
    }
      callback();
    });

    this.Then(/^an error message should pop up$/, function(callback) {
      // FRONTEND TEST : there should be an error dialogue
      // with the text: "cannot be removed anything from an empty an cart"
      callback();
    });


      // Scenario 2

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


    //scenario 3

    this.Given(/^that the user has selected "([^"]*)" (\d+),"([^"]*)" (\d+) and "([^"]*)" (\d+)$/, function(arg1, arg2, arg3, arg4, arg5, arg6, callback) {
    aShoppingCart = new ShoppingCart();


    
    // adding the  product with the name Renat to the shoppingcart
    for(let product of myApp.products){
      if(product.namn === "Renat"){ 
        productToAdd1 = product;
        break;
      }
      
    }
    
    for(let product of myApp.products){
      if(product.namn === "King Cobra"){ 
        productToAdd2 = product;
        break;
      }
      
    }
    
    for(let product of myApp.products){
      if(product.namn === "Gurkha"){ 
        productToAdd3 = product;
        break;
      }
      
    }
   aShoppingCart.add(productToAdd1, 3);
   aShoppingCart.add(productToAdd2, 5);
   aShoppingCart.add(productToAdd3, 8);
    console.warn(aShoppingCart.thingsToBuy);
    

    
    callback();
  });

  this.When(/^the user delets "([^"]*)" and "([^"]*)" from the shoppingcart$/, function(arg1, arg2, callback) {
    aShoppingCart.remove(productToAdd1);
    aShoppingCart.remove(productToAdd3);
    callback();
  });

  this.Then(/^the two products should be deleted from the shoppingcart$/, function(callback) {
  console.warn("After deleting the products",aShoppingCart.thingsToBuy);
  assert.deepEqual(aShoppingCart.thingsToBuy,[ {product:productToAdd2,quantity: 5}
    ],"the product is not removed."
    );
    callback();
  });

    // Scenario 4

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