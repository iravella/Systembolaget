var assert = require('assert');
var ShoppingCart = require('./shopping-cart.js');

module.exports = class Person {

  constructor(fullName,dateOfBirth,addressStreet,addressZipCode, addressCity, accountnumber){

    // Throw an error if name is not an empty string
    // assert(
    //   typeof fullName === 'string' && fullName !== '',
    //   'The name must be a non-empty string!'
    // );

    this.fullName = fullName;
    this.dateOfBirth = dateOfBirth;
    this.addressStreet = addressStreet;
    this.addressZipCode = addressZipCode;
    this.addressCity = addressCity;
    this.accountnumber = accountnumber
    this.shoppingCart = new ShoppingCart();
  }

}
