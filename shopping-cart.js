var assert = require('assert');
//let Card = require('../card.js');
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

    // old
    // assert(quantity < 100 , " 99 is the maximum quantity") 
    //Adding max quantity
  //   console.warn("_________________",quantity);
    quantity = Math.min(quantity, 99);
 //    console.warn("ÖÖÖÖÖÖÖ",quantity);

    //if item is there in the cart then the quantity should be increase 
    let index = this.findProductInCart(product);

    if (index == -1) 
    {
      this.thingsToBuy.push({
        product: product,
        quantity: quantity
      });
    } else 
    {
       this.thingsToBuy[index].quantity += quantity;
    }
  
   // console.warn("_________________",this.thingsToBuy);
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
    console.log(this.thingsToBuy);

    let maxILager = this.thingsToBuy[index].product.iLager;

    console.log(maxILager);

    if(this.thingsToBuy[index].quantity < 1){
      this.thingsToBuy[index].quantity = 1;
    } 
    if (this.thingsToBuy[index].quantity > maxILager) {
      //Change to alert
      console.log("The item only has "+ maxILager + " in stock, your input was " + this.thingsToBuy[index].quantity);
      this.thingsToBuy[index].quantity = maxILager;

      
    }
    

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
    
  }


}
