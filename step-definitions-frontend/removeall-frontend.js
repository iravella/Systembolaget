 let { $, sleep } = require('./funcs');
 module.exports = function() {

 	this.Given(/^that the user is on the shoppingcart$/, async function() {

         let driver = await helpers.loadPage('http://localhost:3000');
         console.log("page is loaded");
         await sleep(1000);


         let username = await $('.login');
         await sleep(3000);
         await username.click();
          await username.sendKeys("Brad"); 
          await sleep(300);    

          let password = await $('.password');
          await password.click();
          await password.sendKeys(1234);
          await  sleep(300);

          let login = await $('.loginItem3');
          await login.click();
          await sleep(2000);
        
     });

 	this.Given(/^the user has three selected items in his cart$/,async function() {
 		let sortiment = await $('#Sortiment');
         await sortiment.click();
         await sleep(1000);


         let searchField = await $('#inputfield');
         assert(searchField, "There is no search field");
         await searchField.sendKeys("King Cobra");
         await sleep(1000);

         let searchBtn = await $('#sokButton');
         assert(searchBtn, "There is no search button");
         await searchBtn.click();
         await sleep(1000);

         {
             let products = await $('.productDisplayed');
             for (let product of products) {
                 let text = await product.getText();
                 if (text.includes("King Cobra")) {
                     await product.click();
                     await sleep(1000);


                     let quantityField = await product.findElement(by.css('.antal'));
                     await quantityField.sendKeys(1);
                     await sleep(1000);

                     let addtocart1 = await product.findElement(by.css('.köp'));
                     await addtocart1.click();
                     await sleep(1000);

                     await driver.switchTo().alert().accept();
                     
             
                 }
             }
         }
         
       });

 	 this.When(/^the user clicks remove all button$/,async function() {

 	 	await sleep(200);
        let cart = await $('#Kundvagn');
        await cart.click();
        await sleep(1000);
 	 	let removeallbtn = await $("#resetButton");
 	 	await removeallbtn.click();
 	 	await sleep(2000);
       
       });

 	  this.Then(/^the shoppingcart should become empty$/, async function() {
 	  	// aperson.shoppingcart = [];
 	  	// assert(aperson.shoppingcart = [],"the cart is not empty");
        
       });
}