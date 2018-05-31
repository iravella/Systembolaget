let Person = require('../person.js');
let myApp = require('../app.js');
let ShoppingCart = require('../shopping-cart.js');

module.exports = function() {

 
this.Then(/^the correct total price of those items should appear$/, function (callback) {
  
  //console.log(shared);
  //given-koden



  // then-koden
  shared.shoppingcart.theShoppingCart.sum();

  //console.log(shared.shoppingcart.theShoppingCart.sum() + "kr");
  assert.deepEqual(shared.shoppingcart.theShoppingCart.sum(), 299.4, "the sum is not correct, the sum should be 299,4kr and your sum was " + shared.shoppingcart.theShoppingCart.sum() + "kr");
  callback();
});


}