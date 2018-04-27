 let Person = require('../person.js');
 let myApp = require('../app.js');

 module.exports = function() {

   let aPerson, aUserChoose, allProducts, categoryProducts;
   this.Given(/^that the user is a registered user$/, function(callback) 
   {
     // Write code here that turns the phrase above into concrete actions
     aPerson = new Person('Anna', 'Andersson', '19950901', 'Kyrkogatan 21', '22222', 'Lund');
     callback();
   });

   this.When(/^the user chooses a certain category by name$/, function(callback) 
   {
     // Write code here that turns the phrase above into concrete actions
     aUserChoose = myApp.categoryByName["Rött vin från Spanien"];
     callback();
   });


   this.Then(/^the user should get a list of all products in that category$/, function(callback) 
   {
     // Write code here that turns the phrase above into concrete actions

     // categoryProducts = the products the application claims is in the category
     categoryProducts = aUserChoose.products;

     // all the products in the whole of Systembolaget
     allProducts = myApp.products;

     // now use our own logic to find all the products that should be in the category
     // using our knowledge that categories are based the product properties
     // ursprunglandnamn (Spanien)
     // and varugrupp (Rött vin)
     let shouldBeInCategory = [];
     for(let product of allProducts){
        if(product.ursprunglandnamn === "Spanien" && product.varugrupp === "Rött vin"){
          shouldBeInCategory.push(product);
        }
     }

     // assuming the categoryProducts array and shouldBeInCategory are sorted in the same
     // order the should be identical

     // if I want to be sure they are identically sorted before comparing them
     // then DON'T sort categoryProducts because sort is destructive
     // (it will change the original array from the application)
     // instead take a copy (using slice) and sort it
     // and then sort our own array shouldBeInCategory
     // and after making sure they are identically sorted
     // compare them and they should be identical ("deep equal")

     let copyCatProducts = categoryProducts.slice();

     function sortFunction(a,b){
       return a.artikelid > b.artikelid ? 1 : -1;
     }

     // sort the arrays before comparing
     copyCatProducts.sort(sortFunction);
     shouldBeInCategory.sort(sortFunction);

     assert.deepEqual(
      copyCatProducts,
      shouldBeInCategory,
      "The products that should be the category Rött vin från Spanien differ from the ones the test thinks should belong in this cate"
     );


     /*for(let i = 0; i < allProducts.length; i++){
       let product = allProducts[i];
     }*/

     callback();
     
    });
     

 }