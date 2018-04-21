let Person = require('../person.js');
let myApp = require('../app.js');

module.exports = function() {

  let name, age, aPerson;
  let didSuceed;


  this.Given(/^that we don't know the age of user \/ not registrered$/, function(callback) {
    age = undefined;
    callback();
  });

  this.When(/^the user tries to see our products$/, function(callback) {
    // Write code here that turns the phrase above into concrete actions

    didSuceed = false;
    try {
      myApp.listProducts("Alkoholfritt från Italien", { name: "AJ", age: undefined });
      didSuceed = true;

    } catch (e) {}

    callback();
  });


  this.Then(/^ask the user for to register$/, function(callback) {
    // Write code here that turns the phrase above into concrete actions
    assert(didSuceed == false, "The person should register");


    callback();
  });


  this.Given(/^that I am a registrered user with a known age of "([^"]*)"$/,
    function(arg1, callback) {
      // Write code here that turns the phrase above into concrete actions
      aPerson = new Person("AJ", arg1);
      callback();
    });


  this.Then(/^a warning should "([^"]*)" be displayed$/, function(arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback();
  });

  this.Then(/^a warning should not be displyed$/, function(callback) {
    // Write code here that turns the phrase above into concrete actions
    callback();
  });

}