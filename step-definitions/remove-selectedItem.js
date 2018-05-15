let ShoppingCart = require('../shopping-cart.js');
let myApp = require('../app.js');
module.exports = function() {
	let aShoppingCart,iTem1,iTem2,iTem3,productToAdd;



  this.Given(/^that the user has selected "([^"]*)" (\d+),"([^"]*)" (\d+) and "([^"]*)" (\d+)$/, function(arg1, arg2, arg3, arg4, arg5, arg6, callback) {
    aShoppingCart = new ShoppingCart();


    // iTem1 = myApp.products["Renat"];
    // iTem2 = myApp.products["King Cobra"];
    // iTem3 = myApp.products["Gurkha"];
    //console.warn("item1");
    // adding the  product with the Renat to the shoppingcart
    for(let product of myApp.products){
    	if(product.name === "Renat"){ 
    		productToAdd = product;
    		break;
    	}
      
    }
    
    console.warn(productToAdd);
    aShoppingCart.add(productToAdd, 3);
    

    
    callback();
  });

  this.When(/^the user delets "([^"]*)" and "([^"]*)" from the shoppingcart$/, function(arg1, arg2, callback) {
    
    callback();
  });

  this.Then(/^the two products should be deleted from the shoppingcart$/, function(callback) {
//console.warn(aShoppingCart.thingsToBuy);
    callback();
  });
}