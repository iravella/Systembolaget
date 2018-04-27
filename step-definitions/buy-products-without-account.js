let ShoppingCart = require("../shopping-cart.js");
let theApp = require("../app.js");
let NoRegistratedUser = require("../noregistrateduser.js");

module.exports = function(){

	let aNoRegistratedUser = new NoRegistratedUser();
	let aShoppingCart;
  let adress;
       this.Given(/^I am an none\-registered user$/, function (callback) {
         aNoRegistratedUser;
         callback();
       });

       this.Given(/^I have products in my shoppingcart$/, function (callback) {

        //creating fake items to the shopping cart
         aShoppingCart = new ShoppingCart();
         aShoppingCart.add(theApp.products[500], 5);
         aShoppingCart.add(theApp.products[1200], 10);
         //this code was to se if the prodcuts hade the right quantity
         console.log(theApp.products[500]);
         console.log(theApp.products[1200]);
         callback();
       });

       this.When(/^i want to buy the items$/, function (callback) {
        //a function in the shoppingcart that will buyOrder after your order
        //But to check out you need to fill the adress and the payment mehtod
         aShoppingCart.buyOrder();

         // Since we do not have a registrered user/address we expect check out to throw an error
         assert.throws(
          function(){
            aShoppingCart.buyOrder();
          }, 
          "The buyOrder did not throw an error even though we did not have an ok user/address"
         );
         callback();
       });

       this.Then(/^the website will ask for my Adress$/, function (callback) {
        //You have to type your adress in the adressbox
        // Will be detail tested with selenium
         
       });

       this.Then(/^Payment method$/, function (callback) {
        //call the payment method
         callback();
       });

}