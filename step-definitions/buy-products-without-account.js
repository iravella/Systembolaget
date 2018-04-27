let Person = require("../person.js");
let ShoppingCart = require("../shopping-cart.js");
let theApp = require("../app.js");

module.exports = function(){

	let aPerson = new Person("Pellakhan", 20);
	let aShoppingCart;
       this.Given(/^I am an none\-registered user$/, function (callback) {
        //Check if the person is logged in or not
         aPerson.loggedIn() = false;
         callback();
       });

       this.Given(/^I have products in my shoppingcart$/, function (callback) {

        //creating fake items to the shopping cart
         aShoppingCart = new ShoppingCart();
         aShoppingCart.add(theApp.products[500], 5);
         aShoppingCart.add(theApp.products[1200], 10);
         console.log(theApp.products[500]);
         console.log(theApp.products[1200]);
         callback();
       });

       this.When(/^i want to buy the items$/, function (callback) {
        //a function in the shoppingcart that will checkout after your order
        //But to check out you need to fill the adress and the payment mehtod
         aShoppingCart.checkOut();
         assert(aShoppingCart.checkOut() === true, "You could check out without adding an adress or payment method");
         callback();
       });

       this.Then(/^the website will ask for my Adress$/, function (callback) {
        //if a person does not have an adress 
         aPerson.adress();
         assert(aPerson.adress() === "", "You need to have an adress");
         callback();
       });

       this.Then(/^Payment method$/, function (callback) {
        //call the payment method
         aShoppingCart.Payment();
         callback();
       });

}