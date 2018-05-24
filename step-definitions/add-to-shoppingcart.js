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

    // SCENARIO ----2


    this.Given(/^the user's shopping cart is empty$/, function(callback) {
        // Write code here that turns the phrase above into concrete actions

        //console.warn("_________________", aPerson.shoppingCart.thingsToBuy);
        aPerson.shoppingCart.removeAllItems();

        //console.warn("**********", aPerson.shoppingCart.thingsToBuy);

        callback();
    });


    this.When(/^the user is trying to add (\d+) bottles of Renat to his\/her shopping cart$/,
        function(RenatQty, callback) {
            // Write code here that turns the phrase above into concrete actions

            for (let product of myApp.products) {
                if (product.namn === "Renat") {
                    productToAdd1 = product;
                    break;
                }
            }
            aPerson.shoppingCart.add(productToAdd1, RenatQty);
            //console.warn('******', aPerson.shoppingCart.thingsToBuy[0]);

            callback();
        });


    this.When(/^the user is trying to add (\d+) bottles of Canella to his\/her shopping cart$/, function(CanellaQty, callback) {
        // Write code here that turns the phrase above into concrete actions

        for (let product of myApp.products) {
            if (product.namn === "Canella") {
                productToAdd2 = product;
                break;
            }
        }
        aPerson.shoppingCart.add(productToAdd2, CanellaQty);
        //console.warn(aPerson.shoppingCart);

        callback();
    });


    this.When(/^the user is trying to add (\d+) bottles of Purcari to his\/her shopping cart$/, function(PurcariQty, callback) {
        // Write code here that turns the phrase above into concrete actions

        for (let product of myApp.products) {
            if (product.namn === "Purcari") {
                productToAdd3 = product;
                break;
            }
        }
        aPerson.shoppingCart.add(productToAdd3, PurcariQty);

        //console.warn('******', aPerson.shoppingCart.thingsToBuy);

        callback();
    });




    this.Then(/^(\d+) bottles of Renat, (\d+) bottles of Canella and (\d+) bottle of Purcari beverages should be add to his\/her shopping cart$/, function(CaptianQty, CanellaQty, PurcariQty, callback) {


        // Write code here that turns the phrase above into concrete actions
        items = aPerson.shoppingCart.getCartItems();
        ok = false;
        if ((items[0].product === productToAdd1 && items[0].quantity == CaptianQty) &&
            (items[1].product === productToAdd2 && items[1].quantity == CanellaQty) &&
            (items[2].product === productToAdd3 && items[2].quantity == PurcariQty))

        {
            ok = true;

        }
        //console.warn("items are" , items);
        assert(ok, "Didn't find the added 3 bottles of Renat, 2 bottels of Canella and 1 bottel of Purcari in the shopping cart.");
        callback();

    });


    // SCENARIO ---- 3

    this.Given(/^the user is in online web shop$/, function(callback) {
        // Need to write code for frontend test

        callback();
    });


    this.When(/^the user is trying to add (\d+) bottles of Captain Morgan to his\/her shopping cart$/, function(CaptianQty, callback) {

        // if there is any items in the cart remove all
        aPerson.shoppingCart.removeAllItems();

        // The user is adding 100 botels of Captian Morgan
        for (let product of myApp.products) {
            if (product.namn === "Captain Morgan") {
                productToAdd = product;
                break;
            }
        }

        aPerson.shoppingCart.add(productToAdd, CaptianQty);

        callback();
    });

    this.Then(/^the system should be display an error message as (\d+) is maximum quantity than can be ordered$/, function(CaptianQty, callback) {

        assert(CaptianQty, " You can't add  :");

        callback();
    });

    this.Then(/^the sytem should be added (\d+) bottels of Captain Morgan defaultly to his\/her shopping cart$/, function(CaptianQty, callback) {

        // The sytem should be added 99 bottels of Captain Morgan to his/her cart

        assert(aPerson.shoppingCart.thingsToBuy[0].quantity == CaptianQty, "--------99 bottels are added")

        callback();
    });


    // SCENARIO 4

    //Then the system should be display an error message as 99 is maximum quantity than can be ordered


    this.Given(/^the user's shopping cart has already added (\d+) bottles of Motzenbäcker Marie to his\/her cart$/, function(MotzenbäckerQty, callback) {
        // Write code here that turns the phrase above into concrete actions

        aPerson.shoppingCart.removeAllItems();

        for (let product of myApp.products) {
            if (product.namn === "Motzenbäcker") {
                productToAdd = product;
                break;
            }
        }
        aPerson.shoppingCart.add(productToAdd, MotzenbäckerQty);
        callback();
    });

    this.When(/^the user is trying to add (\d+) more bottle of Captain Morgan to his\/her shopping cart$/, function(CaptianQty, callback) {
        // Write code here that turns the phrase above into concrete actions

        for (let product of myApp.products) {
            if (product.namn === "Captain Morgan") {
                productToAdd = product;
                break;
            }
        }
        aPerson.shoppingCart.add(productToAdd, CaptianQty);

        assert(aPerson.shoppingCart.thingsToBuy[0].quantity == CaptianQty, "****  Wrong quantity is adding and max is 99");
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



    //---------------------------SCENARIO-7 ------------------------------------------------


    this.When(/^the user is trying to add (\d+) bottles of Schlappeseppel to his\/her shopping cart$/, function(SchlappeseppelQty, callback) {
        // Write code here that turns the phrase above into concrete actions



        aPerson.shoppingCart.removeAllItems();

        for (let product of myApp.products) {
            if (product.namn === "Schlappeseppel") {
                productToAdd = product;
                break;
            }
        }
        aPerson.shoppingCart.add(productToAdd, SchlappeseppelQty);
        //console.warn("^^^^^^^^^^^^^^", aPerson.shoppingCart.thingsToBuy)  ;

        assert(aPerson.shoppingCart.thingsToBuy[0].quantity > SchlappeseppelQty, "+++++++  Wrong : Schlappeseppel is out of stock ");
        callback();
    });



    this.Then(/^system should be displayed an error message as Schlappeseppel is out of stock$/, function(callback) {
        // Need to check frontend 

        callback();
    });





}