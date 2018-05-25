var ShoppingCart = require("../shopping-cart.js");
var myApp = require("../app.js");
var NoRegistratedUser = require("../noregistrateduser.js");
var credCard = require("../card.js");

module.exports = function(){

  let card;
  let aShoppingCart;
  let adress;
       this.Given(/^the user is an none\-registered user$/, function (callback) {
         let aNoRegistratedUser = new NoRegistratedUser();
         callback();
       });

       this.Given(/^the user have products in my shoppingcart$/, function (callback) {

        //creating fake items to the shopping cart
         aShoppingCart = new ShoppingCart();
         aShoppingCart.add(myApp.products[500], 5);
         aShoppingCart.add(myApp.products[1200], 10);
         //this code was to see if the prodcuts hade the right quantity
         //console.log(myApp.products[500]);
         //console.log(myApp.products[1200]);
         callback();
       });

       this.When(/^the user enters the payment information$/, function (callback) {
        //smattra in smaragd info
       card = new credCard("Jolle","yallemar",1337133713371337,666)


         callback();
       });

        this.When(/^the payment information is valid$/, function (callback) {
          assert(typeof card.first_name === "string" && card.first_name !== "", "The first name must be a non-empty string");
          assert(typeof card.last_name === "string" && card.last_name !== "", "The last name must be a non-empty string");
          assert(typeof card.cardnr === "number" && (card.cardnr + "").length == 16, "the card number must contain 16 numbers");
          assert(typeof card.verification_value === "number" && (card.verification_value + "").length == 3, "the verification number must contain 3 numbers");
         callback();
       });

       this.Then(/^the user should have bought the items$/, async function () {
        await helpers.loadPage('http://localhost:3000/payment.html');
        assert(await driver.getTitle() != 'Error', "you are not on the website");
        let paymentComplete = await driver.findElement(by.css("#payComplete"));
        assert(await paymentComplete.isDisplayed(), "you cant se the confirm text");

       });

}