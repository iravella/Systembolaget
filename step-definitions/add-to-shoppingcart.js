let Person = require('../person.js');
let myApp = require('../app.js');



module.exports = function()

{
  let aPerson;
  let productToAdd;
  let category;

  this.Given(/^the user is a registered user$/, function(callback) 
  {
    // For a user to be registrered the application will require
    // a first name, last name, birthdate and street address, zipcode, city
    aPerson = new Person('Anna', 'Andersson', '19950901', 'Kyrkogatan 21', '22222', 'Lund');
    //If we are really grumpy and there is no other feature testing this
    //assert that all the data used to create the person "sticks" with thte person
    assert(aPerson.firstName === 'Anna', "The firstName of the person is different from the one used to create the person.");
    assert(aPerson.lastName === 'Andersson', "The lastName of the person is different from the one used to create the person.");
    assert(aPerson.dateOfBirth === '19950901', "The dateOfBirth of the person is different from the one used to create the person.");
    assert(aPerson.addressStreet === 'Kyrkogatan 21', "The addressStreet of the person is different from the one used to create the person.");    
    assert(aPerson.addressZipCode === '22222', "The addressZipCode of the person is different from the one used to create the person.");
    assert(aPerson.addressCity === 'Lund', "The addressCity of the person is different from the one used to create the person.");
    callback();
  });


  this.When(/^the user is trying to add a 3 bottles of Captain Morgan to his\/her shopping card$/, function(callback) 
  {
    for(let product of myApp.products){
    	if(product.name === "Captain Morgan"){ 
    		productToAdd = product;
    		break;
    	}
    }
    aPerson.shoppingCart.add(productToAdd, 3);
    callback();
  });



  this.Then(/^3 bottles of Captain Morgan should be to the shopping cart$/, function(callback) 
  {
  	let items = aPerson.shoppingCart.getCartItems(), ok = false;
  	for(let item of items){
  		if(item.product === productToAdd && item.quantity === 3){
  			ok = true;
  			break;
  		}
  	}
  	assert(ok, "Didn't find the added 3 bottles of Captain Morgan in the shopping cart.");
    callback();
  });

}