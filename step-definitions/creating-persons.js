// Require the parts of the program we want to test
let Person = require('../person.js');  

// All our steps/tests should be wrapped in 
// moudule.exports = function(){ ... our code ...}
module.exports = function(){

  // Declaring variables I want to be able to share 
  // between the different steps
  let name, age, aPerson;

  this.Given(/^that we have a name as a non\-empty string$/, function (callback) {
    name = 'Anna';
    callback();
  });

  this.Given(/^an age as a number$/, function (callback) {
    age = 35;
    callback();
  });

  this.When(/^I try to create a person with this data$/, function (callback) {
    assert.doesNotThrow(
      function(){
        aPerson = new Person(name, age);
      },
      'Creating a person with valid data for name and age failed.'
    );
  
    callback();
  });

  this.Then(/^a new person should be created$/, function (callback) {
    assert(
      aPerson instanceof Person,
      "We didn't create a person..."
    );
    callback();
  });

  this.Then(/^have the properties name and age$/, function (callback) {
    assert(
      aPerson.name !== undefined && aPerson.age !== undefined,
      "The person are missing properties (name and/or age)"
    )
    callback();
  });

  this.Then(/^the properties should be equal to our original data$/, function (callback) {
    assert(
      name === aPerson.name,
      "The name of the person isn't the name used when creating the person."
    );
    assert(
      age === aPerson.age,
      "The age of the person isn't the age used when creating the person."
    );
    callback();
  });


  // Test for a number of scenarios with non-valid data for person name
  let nameToTryWith;
  let currentDataType;
  let validAge = 25;
  let error;
  let exampleData = {
    "number" : 123,
    "boolean true": true,
    "boolean false": false,
    "array": [],
    "object": {},
    "null": null,
    "undefined": undefined,
    "empty string": ""
  };     

  this.Given(/^that we have a name that is of the data type "([^"]*)"$/, function (dataType, callback) {
    currentDataType = dataType;
    error = undefined;
    nameToTryWith = exampleData[dataType];
    callback();
  });

  this.When(/^we try to create a person$/, function (callback) {

    /*assert.throws(
      function(){ new Person(nameToTryWith, validAge)},
      "Didn't get an error when trying to create a person with a " + dataType + " as name."
    );*/

    try {
      new Person(nameToTryWith, validAge);
    }
    catch(mittFinaCatchigaFel){
      error = mittFinaCatchigaFel;
    }
    callback();
  });

  this.Then(/^we should get a runtime error$/, function (callback) {
    assert(
      error !== undefined,
      "Didn't get an error when trying to create a person with a " + currentDataType + " as name."
    );
    callback();
  });


}