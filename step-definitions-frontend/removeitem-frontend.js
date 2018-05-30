 let { $, sleep } = require('./funcs');
 module.exports = function() {




     this.Given(/^that user is on shoppingcart$/, async function() {

         await helpers.loadPage('http://localhost:3000');
         console.log("page is loaded");
         await sleep(1000);

     });

     this.Given(/^the user has (\d+) products in the shoppingcart$/, async function(arg1) {
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
         // let quntity = await $(".antal");
         // await quntity.sendKeys(5);
         // let addtocart = await $(".köp");
         // await addtocart.click();

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
                     
             
                 }
             }
         }

         let searchField1 = await $('#inputfield');
         assert(searchField, "There is no search field");
         await searchField.sendKeys("Canella-Bellini");
         await sleep(1000);

         let searchBtn1 = await $('#sokButton');
         assert(searchBtn1, "There is no search button");
         await searchBtn1.click();
         await sleep(1000);
         
         {
             let products = await $('.productDisplayed');
             for (let product of products) {
                 let text1 = await product.getText();
                 if (text1.includes("Canella-Bellini")) {
                     await product.click();
                     await sleep(1000);


                     let quantityField1 = await product.findElement(by.css('.antal'));
                     await quantityField1.sendKeys(1);
                     await sleep(1000);

                     let addtocart2 = await product.findElement(by.css('.köp'));
                     await addtocart2.click();
                     await sleep(1000);
             
                 }
             }
         }


          });

     this.When(/^the person clicks  delete on (\d+)nd item in the shoppingcart$/, async function(arg1) {

     });


     this.Then(/^the (\d+)nd item should be deleted from the shoppingcart$/, async function(arg1) {


     });
 }























    