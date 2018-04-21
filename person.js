let assert = require('assert');
let ShoppingCart = require('./shopping-cart.js');

module.exports = class Person {

  constructor(name, age){

    // Throw an error if name is not an empty string
    assert(
      typeof name === 'string' && name !== '',
      'The name must be a non-empty string!'
    );

    this.name = name;
    this.age = age;
    this.shoppingCart = new ShoppingCart();
  }

}
