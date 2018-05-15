let ShoppingCart = require('../shopping-cart.js');
let myApp = require('../app.js');
module.exports = function() {
	let aShoppingCart,iTem1,iTem2,iTem3,productToAdd1,productToAdd2,productToAdd3;



  this.Given(/^that the user has selected "([^"]*)" (\d+),"([^"]*)" (\d+) and "([^"]*)" (\d+)$/, function(arg1, arg2, arg3, arg4, arg5, arg6, callback) {
    aShoppingCart = new ShoppingCart();


    // iTem1 = myApp.products["Renat"];
    // iTem2 = myApp.products["King Cobra"];
    // iTem3 = myApp.products["Gurkha"];
    //console.warn("item1");
    // adding the  product with the Renat to the shoppingcart
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
}