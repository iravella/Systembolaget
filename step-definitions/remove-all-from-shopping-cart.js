let ShoppingCart = require("../shopping-cart.js");

module.exports = function(){
	//A list of items that we have bought.
	//change later
	let thingsToBuy = [];
       this.Given(/^that a person have a shopping cart with items in it$/, function (callback) {
       	 //Adding some fake items to the list to test this
       	 //change later
         thingsToBuy = ["wine","Gin","Beer"];
         callback();
       });

       this.When(/^the person clicks the reset button$/, function (callback) {
       	//When a person clicks the reset buttom then the removeAllItems will be triggered
       	// Use jqueary to se when to button gets clicked
        // $(".reset-button").click(removeAllItems())
         callback();
       });

       while(thingsToBuy > 0){
       	thingsToBuy.pop();
       }
       this.Then(/^the shopping cart will be reset$/, function (callback) {
       	//Check if the list includes any items and if it does throw a new error
         if(thingsToBuy = []){

         } else {
         	throw new Error("The to buy list still have items in it");
         }
         callback();
       });
}