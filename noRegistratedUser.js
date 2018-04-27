let assert = require('assert');
let ShoppingCart = require('./shopping-cart.js');
let Person = require("./person.js");

module.exports = class NoRegistratedUser extends Person{

	constructor(adress){
	super("NoRegistratedUser", 50, adress);
    this.shoppingCart = new ShoppingCart();
  }

}