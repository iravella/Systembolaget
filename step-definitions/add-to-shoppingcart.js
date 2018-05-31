let Person = require('../person.js');
let myApp = require('../app.js');
let ShoppingCart = require('../shopping-cart.js');



module.exports = function()

{
    let aPerson;
    let productToAdd;
    let category, productToAdd1, productToAdd2, productToAdd3, items, emptycart;

    this.Given(/^the user is a registered user$/, function(callback) {
        // For a user to be registrered the application will require
        // a first name, last name, birthdate and street address, zipcode, city
        aPerson = new Person('Anna Andersson', '19950901', 'Kyrkogatan 21', '22222', 'Lund');
        //If we are really grumpy and there is no other feature testing this
        //assert that all the data used to create the person "sticks" with thte person
        assert(aPerson.fullName === 'Anna Andersson', "The firstName of the person is different from the one used to create the person.");
        assert(aPerson.dateOfBirth === '19950901', "The dateOfBirth of the person is different from the one used to create the person.");
        assert(aPerson.addressStreet === 'Kyrkogatan 21', "The addressStreet of the person is different from the one used to create the person.");
        assert(aPerson.addressZipCode === '22222', "The addressZipCode of the person is different from the one used to create the person.");
        assert(aPerson.addressCity === 'Lund', "The addressCity of the person is different from the one used to create the person.");
        callback();
    });


    this.When(/^the user is trying to add  (\d+) bottles of Captain Morgan to his\/her shopping cart$/, function(CaptianQty, callback) {

        //console.warn('_______', aPerson.shoppingCart.thingsToBuy);

        //aPerson.shoppingCart.removeAllItems();
        for (let product of myApp.products) {
            if (product.namn === "Captain Morgan") {
                productToAdd = product;
                break;
            }
        }

        aPerson.shoppingCart.add(productToAdd, CaptianQty);
        //console.warn(aPerson.shoppingCart);
        callback();
    });

    this.Then(/^(\d+) bottles of Captain Morgan should be add to his\/her shopping cart$/, function(CaptianQty, callback) {
        // Write code here that turns the phrase above into concrete actions
        let items = aPerson.shoppingCart.getCartItems();
        ok = false;
        for (let item of items) {
            if (items[0].product === productToAdd && items[0].quantity == CaptianQty) {
                ok = true;

            }
        }
        assert(ok, "Didn't find the added 3 bottles of Captain Morgan in the shopping cart.");
        //console.warn('_______', aPerson.shoppingCart.thingsToBuy);
        callback();
    });





    // SCENARIO 5


    this.Given(/^the user has already added (\d+) bottles of Amicone to his\/her shopping cart$/, function(AmicanQty, callback) {
        // Adding 3 bottels of Amicone
        aPerson.shoppingCart.removeAllItems();
        // console.warn("ÄÄÄÄÄÄÄÄÄÄ", aPerson.shoppingCart.thingsToBuy);


        for (let product of myApp.products) {
            if (product.namn === "Amicone") {
                productToAdd2 = product;
                break;
            }
        }
        aPerson.shoppingCart.add(productToAdd2, AmicanQty);

        callback();
    });


    this.When(/^the user is trying to add (\d+) more bottle of Amicone to his\/her shopping cart$/, function(AmicanQty, callback) {
        // Write code here that turns the phrase above into concrete actions

        for (let product of myApp.products) {
            if (product.namn === "Amicone") {
                productToAdd2 = product;
                break;
            }
        }

        aPerson.shoppingCart.add(productToAdd2, AmicanQty);
        callback();
    });

    this.Then(/^the total of (\d+) bottles of Amicone should be added to his\/her shopping cart$/, function(AmicanQty, callback) {
        //assert(aPerson.shoppingCart.thingsToBuy[0].quantity == AmicanQty, "wrong qua...")
        
        callback();
    });



    //---------------------------SCENARIO-6 ------------------------------------------------


    this.Given(/^the user has already added (\d+) bottles of Fighting Cock to his\/her shopping cart$/, function(FightingCockQty, callback) {
        // Write code here that turns the phrase above into concrete actions

        aPerson.shoppingCart.removeAllItems();

        for (let product of myApp.products) {
            if (product.namn === "FightingCock") {
                productToAdd = product;
                break;
            }
        }
        aPerson.shoppingCart.add(productToAdd, FightingCockQty);
         //console.warn("^^^^^^^^^^^^^^", aPerson.shoppingCart.thingsToBuy)  ;

        callback();
    });


    this.When(/^the user is trying to add (\d+) more bottle of Fighting Cock to his\/her shopping cart$/, function(FightingCockQty, callback) {
        // Write code here that turns the phrase above into concrete actions


        for (let product of myApp.products) {
            if (product.namn === "Fighting Cock") {
                productToAdd = product;
                break;
            }
        }
        aPerson.shoppingCart.add(productToAdd, FightingCockQty);
        //console.warn("^^^^^^^^^^^^^^", aPerson.shoppingCart.thingsToBuy)  ;

        assert(aPerson.shoppingCart.thingsToBuy[0].quantity > FightingCockQty, "****  Wrong : FightingCock is out of stock ");
        callback();
    });

    this.Then(/^system should be displayed an error message as Fighting Cock is out of stock$/,
        function(callback) {
            
            // Need to check frontend 


            callback();
        });





}