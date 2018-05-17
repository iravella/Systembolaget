// Read classes from other files
var Person = require('./person.js');
var Product = require('./product.js');
var Category = require('./category.js');

class App {

  constructor() {
    let productData;
    let categoryData;

    if (typeof window !== 'undefined') {
      (async ()=>{
        productData = await require('./json/sortiment.json');
        categoryData = await require('./json/categories.json');
        this.constructorContinued(productData, categoryData);
      })();
    } else {
      productData = require('./json/sortiment.json');
      categoryData = require('./json/categories.json');
      this.constructorContinued(productData, categoryData);
    }
  }

  constructorContinued(productData, categoryData){
    // Make instances of Product from the productdata
    this.products = [];
    for (let p of productData) {
      this.products.push(new Product(p));
    }
    // Make instances of Product from the productdata
    this.products = [];
    for (let p of productData) {
      this.products.push(new Product(p));
    }

    // Make instances of Category from categoryData
    this.categories = [];
    for (let catName of categoryData) {
      this.categories.push(new Category(catName, this.products));
    }

    // Make a "dictionary" based on category namess
    this.categoryByName = {};
    for (let category of this.categories) {
      this.categoryByName[category.name] = category;
    }

    // Add a list of active/logged in user
    this.users = [];


  }

  listProducts(categoryName, person) {
    // console.warn(person, person instanceof Person);
    assert(
      person instanceof Person,
      "You're not a person/logged in Register!"
    );
    /// Then assert age of person 
    return this.categoryByName[categoryName].products;
  }

  addUser(name, age) {
    this.users.push(new Person(name, age));
  }

  displayProductBasicDetails(ursprunglandnamn, volymiml, alkoholhalt, prisinklmoms)
  {
    // this.ursprunglandnamn = [];
    // this.volymiml = [];
    // this.alkoholhalt = [];
    // this.prisinklmoms = [];
     //response[namn=='Renat'].ursprunglandnamn

  }

}

// Create an app to start our application
let myApp = new App();
// Exporting the app instance so that I can use it 
// in my test code (step definitions) via require
module.exports = myApp;

// Check if we can look up categoryByName
// console.log(myApp.categoryByName["Rött vin från Spanien"]);

// Quick test of users and shopping carts
/*
myApp.addUser('Anna', 25);
myApp.users[0].shoppingCart.add(myApp.products[0], 10);
myApp.users[0].shoppingCart.add(myApp.products[551], 99);
console.log (myApp.users[0].shoppingCart.thingsToBuy)
*/