// Read classes from other files
var Person = require('./person.js');
var Product = require('./product.js');
var Category = require('./category.js');

class App {

  createFrontendClasses(){
    new MainMenu();
    new CreateUnderMenus();
    new ProductsDivs();
  }

  constructor() {
    let productData;
    let categoryData;

    if (typeof window !== 'undefined') {
      (async ()=>{
        productData = await require('./json/sortiment.json');
        categoryData = await require('./json/categories.json');
        this.constructorContinued(productData, categoryData);
        this.createFrontendClasses();
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

///////////// Creating stuff for searchfunction and creating the menus
    this.globalSortiment = this.products.slice();
    this.displayedProducts = this.products.slice();

    //Creating a new Array out of the this.products and its ursprungsland//
    this.allPossibleCountrys = [];
    for(let i = 0; i < this.products.length; i++) {
      this.allPossibleCountrys.push(this.products[i].ursprunglandnamn)
    }
    this.allPossibleCountrys.sort();

    //Sorting Multiply countrys in this.products and add only one country//
    this.OneCountry = [];
     let CountryWasNotEqualWheniWasAt = 0;
        for(let i = 0; i < this.allPossibleCountrys.length; i++) {
      		if(this.allPossibleCountrys[i] !== this.allPossibleCountrys[i+1]) {
      		 this.OneCountry.push({Country: this.allPossibleCountrys[i], NumberOfTypes: (i - CountryWasNotEqualWheniWasAt) });
      	 	 CountryWasNotEqualWheniWasAt = i;
     		 }
   		}
   	//Creating an new Array and with countries that had more than 200 products//
    this.CountrysWith200Products = [];
    this.CountrysWithLessThan201Products = [];
    
        for(let i = 0; i < this.OneCountry.length; i++) {
      		if (this.OneCountry[i].NumberOfTypes > 200) {
      			this.CountrysWith200Products.push(this.OneCountry[i])
     		} else {
          this.CountrysWithLessThan201Products.push(this.OneCountry[i])
        }
    }

    //Determine the nr of products in Övriga all products with 200 or less//
    this.nroftypesiövriga = 0;
    for(let i = 0; i < this.OneCountry.length; i++) {
      if (this.OneCountry[i].NumberOfTypes <= 200) {
        this.nroftypesiövriga = this.nroftypesiövriga + this.OneCountry[i].NumberOfTypes
      }
    }
    //Creating a fake country for the "länder menu"//
    this.Övriga = {Country: "Övriga", NumberOfTypes: this.nroftypesiövriga};
    this.CountrysWith200Products.push(this.Övriga);

    //Arrange the prioritised order//
    this.varugrupper = ["Alkoholfritt", "Öl", "Rött vin", "Vitt vin", "Whisky", "Gin", "Cider", "Cognac", "Likör", "Punsch", "Rom", "Rosé", "Mousserande vin", "Aniskryddad sprit", "Aperitif", "Armagnac", "Bitter", "Blanddrycker", "Blå mousserande", "Blå stilla", "Brandy och Vinsprit", "Calvados", "Drinkar och Cocktails", "Fruktvin", "Genever", "Glögg och Glühwein", "Grappa och Marc", "Juldrycker", "Kryddad sprit", "Madeira", "Mjöd", "Montilla", "Okryddad sprit", "Portvin", "Rosévin", "Röda", "Sake", "Sherry", "Smaksatt sprit", "Smaksatt vin", "Sprit av frukt", "Tequila och Mezcal", "Vermouth", "Vin av flera typer", "Vita", "Övrig sprit", "Övrigt starkvin"];
    
    //This is the menu thats it created under forpackning//
    this.forpackning = ["Flaskor mer än 0.6 L", "Flaskor mindre än 0.6 L", "Box", "Burk", "Magnum", "Minibutelj", "PET-flaska", "Fat", "Engångsfat", "Papp", "Övriga"];

    //products with these forpackning calssifies into övriga//
    this.forpackningOvriga = ["Vinglas i hårdplast", "Påse", "Glasburk 500 ml", "Bag-in-box i 2 delar"];

    //products with these forpackning calssifies into "Flaskor mer än 0.6l"//
    this.forpackningBiggerThen500ml = ["Flaska", "1 flaska à 750 ml + 1 flaska à 375ml", "12 fl à 750 ml", "2 fl à 750 ml", "2 flaskor à 720 ml", "2 x 750ml", "3 fl à 750 ml", 
    "4 fl à 750 ml", "4 flaskor à 750ml", "1 x 720 ml", "5 flaskor à 750ml + 1 flaska à 500ml", "5 fl à 750 ml", "6 fl à 750 ml", "6 flaskor à 720 ml"];

    //products with these forpackning calssifies into "Flaskor mindre än 0.6l"//
    this.forpackningLesserOrEqual500ml =["Flaska", "1 flaska  à 200ml", "10 fl à 40 ml","10 fl à 50 ml", "10 fl à 60 ml",
     "10 flaskor à 500 ml", "10 flaskor à 98 ml",  "104 flaskor à 50 ml", "12 fl à 20 ml", "12 fl à 30 ml", "12 fl à 330 ml", "12 fl à 40 ml", 
     "12 fl à 50 ml", "12 fl à 500 ml", "180ml flaska", "2 fl à 350 ml", "1 x 375ml", "20 fl à 500 ml", "24 fl à 20 ml", "24 fl à 330 ml", "24 fl à 40 ml", 
     "3 fl à 100 ml", "3 fl à 20 ml", "3 fl à 200 ml", "3 fl à 50 ml", "3 fl à 500 ml", "3 flaskor à 375 ml", "3 x 330 ml, 1 x 250 ml", "36 flaskor à 20 ml", 
     "4 fl à 200 ml", "4 fl à 330 ml", "4 fl à 50 ml", "4 fl à 500 ml", "4 flaskor à 100 ml", "4 flaskor à 375 ml", "1 flaska à 500ml", "1 flaska à 37", "4 x 300 ml",
     "5 fl à 200 ml", "5 fl à 40 ml", "5 fl à 50 ml", "5 flaskor à 100 ml", "50 flaskor à 20 ml", "6 fl à 100 ml", "6 fl à 200 ml", "6 fl à 50 ml", "6 fl á 375 ml", 
     "6 flaskor à 187 ml", "6 flaskor à 20 ml", "6 flaskor à 330 ml", "60 fl à 20 ml", "7 flaskor à 50 ml", "8 flaskor à 100 ml", "8 flaskor á 500ml", "9 fl à 20 ml", "96 flaskor à 50 ml"];

     this.searchcriteria = [];

/////////end creating stuff for searchfunction

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
var myApp = new App();
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