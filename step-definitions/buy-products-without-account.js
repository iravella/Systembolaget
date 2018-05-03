let ShoppingCart = require("../shopping-cart.js");
let myApp = require("../app.js");
let NoRegistratedUser = require("../noregistrateduser.js");

module.exports = function(){

	
	let aShoppingCart;
  let adress;
       this.Given(/^I am an none\-registered user$/, function (callback) {
         let aNoRegistratedUser = new NoRegistratedUser();
         callback();
       });

       this.Given(/^I have products in my shoppingcart$/, function (callback) {

        //creating fake items to the shopping cart
         aShoppingCart = new ShoppingCart();
         aShoppingCart.add(myApp.products[500], 5);
         aShoppingCart.add(myApp.products[1200], 10);
         //this code was to see if the prodcuts hade the right quantity
         //console.log(myApp.products[500]);
         //console.log(myApp.products[1200]);
         callback();
       });

       this.When(/^I want to buy the items$/, function (callback) {
        //a function in the shoppingcart that will buyOrder after your order
        //But to check out you need to fill the adress and the payment mehtod
         aShoppingCart.buyOrder();

         // // Since we do not have a registrered user/address we expect check out to throw an error
         // assert.throws(
         //  function(){
         //    aShoppingCart.buyOrder();
         //  }, 
         //  "The buyOrder did not throw an error even though we did not have an ok user/address"
         // );
         callback();
       });

       this.Then(/^the website will ask for my shipping information$/, function (callback) {
        //You have to type your adress in the adressbox
        // Will be detail tested with selenium

        //frontend tester
         callback();
       });

       this.Then(/^Payment method$/, function (callback) {
        //call the payment met
      
        aShoppingCart.payment();
         callback();
          });

}