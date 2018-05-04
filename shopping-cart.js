let assert = require('assert');
//let OrderStatus = require("../orderstatus.js");
module.exports = class ShoppingCart {

  constructor() {
    this.thingsToBuy = [];
  }

  add(product, quantity) {
    // should we check that the product
    // is an instanceOf Product ?

    // should we check that quantity is
    // a positive integer?

    // should we allow a product that's already in the cart
    // to be added? or error? or add an extra quantity?

    this.thingsToBuy.push({
      product: product,
      quantity: quantity
    });
  }

  findProductInCart(product) {
    // should we check that product is an instance of Product?
    for (let i = 0; i < this.thingsToBuy.length; i++) {
      if (this.thingsToBuy[i].product === product) {
        return i;
      }
    }
    return -1;
  }

  changeQuantity(product, newQuantity) {

    // is product really an instance of Product
    // is newQuantity a positive integer?

    let index = this.findProductInCart(product);

    assert(
      index >= 0,
      "Can't change the quantity of a product not in the cart"
    );


    this.thingsToBuy[index].quantity = newQuantity;

  }

  remove(product) {
    let index = this.findProductInCart(product);

    assert(
      index >= 0,
      "Can't remove a product not in the cart"
    );

    // remove the item completelty from the cart
    this.thingsToBuy.splice(index, 1);

  }

  removeAllItems() {
    this.thingsToBuy = [];
  }
   removeAllItems() { 
    this.thingsToBuy = []; 
  } 

  /*savecart() {
    localStorage.setItems("shoppingcart", JSON.stringfy(thingsToBuy)); 
  }
  loadcart() {
    let cart = JSON.parse(localStorage.getItem(shoppingcart));
  }
  */
  getCartItems(){
    return this.thingsToBuy;
  }

  sum(){
 
  
    let priceArray = this.thingsToBuy.map(function(item) {
      return item.product.prisinklmoms * item.quantity;
    });
    
    let Sum = priceArray.reduce(function(accumulator, currentValue){
      return accumulator + currentValue;
    }, 0);
    //console.log(Sum+"kr");
    return Sum;
    


  // sum(){
  //   let price = 0;

   


    // how much does everything cost
    // would we like a line sum as well?
    // loop through thingsToBuy.
    // get the price of each product and multiply with the quantity
    // (gives us a line sum)
    // add a line sums into a total sum


  }
  buyOrder() {
    //when you checkout you are done with the payment and you have typed in all the infromation you need to
    //get the product delivered to you
    //and a the order will come to the comany
  }

  payment() {
    //this function will check so your payments is right
    //so your payment work

  }


}