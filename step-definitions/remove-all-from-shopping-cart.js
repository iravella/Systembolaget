//let Product = require("../product.js");
let ShoppingCart = require("../shopping-cart.js");
let theApp = require("../app.js");

module.exports = function(){
	//A list of items that we have bought.
	//change later
	     let aShoppingCart;
       
       this.Given(/^that a person have a shopping cart with items in it$/, function (callback) {
       	 //Adding some fake items to the list to test this
         //fake items
         aShoppingCart = new ShoppingCart();
         aShoppingCart.add(theApp.products[500], 5);
         aShoppingCart.add(theApp.products[1200], 10);
         console.log(theApp.products[500]);
         console.log(theApp.products[1200]);
         callback();
       });

       this.When(/^the person clicks the reset button$/, function (callback) {
       	//When a person clicks the reset buttom then the removeAllItems will be triggered
       	// Use jqueary to se when to button gets clicked
        // $(".reset-button").click(ShoppingCart.removeAllItems);
        aShoppingCart.removeAllItems();
         callback();
       });
       
       this.Then(/^the shopping cart will be reset$/, function (callback) {
       	//Check if the list includes any items and if it does throw a new error
         /*if(aShoppingCart.thingsToBuy.length > 0){
         	throw new Error("The to buy list still have items in it");
         }*/
         assert.deepEqual(aShoppingCart.thingsToBuy, [], "My error: The shoppinglist is not empty!");
         callback();
       });
}