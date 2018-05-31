// Require the parts of the program we want to test
let Person = require('../person.js');  

// All our steps/tests should be wrapped in 
// moudule.exports = function(){ ... our code ...}
module.exports = function(){

  // Declaring variables I want to be able to share 
  // between the different steps
  let fullName, dateOfBirth, aPerson, addressStreet,addressZipCode, addressCity, accountnumber;

  this.Given(/^that we have a fullName as a non\-empty string$/, function (callback) {
    fullName = 'Anna';
    addressStreet = 'Herr knasons väg 42';
    addressZipCode = 12330;
    addressCity = "Stockholm";
    accountnumber = 3;
    callback();
  });

  this.Given(/^an dateOfBirth as a number$/, function (callback) {
    dateOfBirth = 1935;
    callback();
  });

  this.When(/^I try to create a person with this data$/, function (callback) {
    assert.doesNotThrow(
      function(){
        aPerson = new Person(fullName, dateOfBirth, addressStreet,addressZipCode, addressCity, accountnumber);
      },
      'Creating a person with valid data for fullName and dateOfBirth failed.'
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

  this.Then(/^have the properties fullName and dateOfBirth$/, function (callback) {
    assert(
      aPerson.fullName !== undefined && aPerson.dateOfBirth !== undefined,
      "The person are missing properties (fullName and/or dateOfBirth)"
    )
    callback();
  });

  this.Then(/^the properties should be equal to our original data$/, function (callback) {
    assert(
      fullName === aPerson.fullName,
      "The fullName of the person isn't the fullName used when creating the person."
    );
    assert(
      dateOfBirth === aPerson.dateOfBirth,
      "The dateOfBirth of the person isn't the dateOfBirth used when creating the person."
    );
    callback();
  });


  // Test for a number of scenarios with non-valid data for person fullName
  let fullNameToTryWith;
  let currentDataType;
  let validdateOfBirth = 25;
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

  this.Given(/^that we have a fullName that is of the data type "([^"]*)"$/, function (dataType, callback) {
    currentDataType = dataType;
    error = undefined;
    fullNameToTryWith = exampleData[dataType];
    callback();
  });

  this.When(/^we try to create a person$/, function (callback) {

    /*assert.throws(
      function(){ new Person(fullNameToTryWith, validdateOfBirth)},
      "Didn't get an error when trying to create a person with a " + dataType + " as fullName."
    );*/

    try {
      new Person(fullNameToTryWith, validdateOfBirth);
    }
    catch(mittFinaCatchigaFel){
      error = mittFinaCatchigaFel;
    }
    callback();
  });

  this.Then(/^we should get a runtime error$/, function (callback) {
    assert(
      error !== undefined,
      "Didn't get an error when trying to create a person with a " + currentDataType + " as fullName."
    );
    callback();
  });


}