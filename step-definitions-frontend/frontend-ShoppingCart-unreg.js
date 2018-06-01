var { $, sleep } = require('./funcs');
var myApp = require('../app.js');
var shoppingCart = require('../shopping-cart.js');
var Person = require('../person.js');
var Product = require('../product.js');
var Category = require('../category.js');


module.exports = function() {


    let product1;
    let product2;
    let product1_id;
    let product2_id;
    let CartProduct1_id;
    let CartProduct2_id;
    let rnd1;
    let rnd2;
    let q1Added;
    let q2Added;


 this.Given(/^that a user is on the sortiment homepage as an unregistreated user with an empty cart$/, async function () {
       
        await helpers.loadPage('http://localhost:3000/shoppingcart.html');
        await sleep(2000);

        let logOutBtn = await $('.loginItem3');

        if (await logOutBtn.getText() == "Logout") {
            await logOutBtn.click();
            await sleep(1000);
        }

            let resetButton = await $('#resetButton');
            await resetButton.click();
            await sleep(1000);
       });

  this.When(/^an unreg user adds one to ten pieces of two random products from the sortiment$/, async function () {

          await helpers.loadPage('http://localhost:3000/sortiment.html');
          await sleep(1500);


          q1Added = Math.floor((Math.random() * 10) +1);
          q2Added = Math.floor((Math.random() * 10) +1);
          
          rnd1 = 4                 //await Math.floor((Math.random() * 14) );
          
          while (rnd1 == 4 || rnd1 == 5 || rnd1 == 6) {
            rnd1 = await Math.floor((Math.random() * 14) );
          }

          console.log(rnd1+"_______________rnd1")

          if (rnd1 == 6 ) {
            rnd1 = rnd1 + 1
          }

          if (rnd1 == 4 ) {
            rnd1 = rnd1 + 3
          }

           rnd2 = await rnd1 + 1

          if (rnd2 == 15) {
            rnd2 = rnd2 - 2
          }

          assert(rnd1 !== rnd2, "random numbers are the same")


          let antalInput1 = await $('#antal'+rnd1);
          await antalInput1.sendKeys(q1Added);
          await sleep(1000);

          let köpBtn1 = await $('#köp'+rnd1);
          await köpBtn1.click();
          await sleep(1000);
          await driver.switchTo().alert().accept();
          await sleep(1000);

          let antalInput2 = await $('#antal'+rnd2);
          await antalInput2.sendKeys(q2Added);
          await sleep(1000);

          let köpBtn2 = await $('#köp'+rnd2);
          await köpBtn2.click();
          await sleep(1000);
          await driver.switchTo().alert().accept();
          await sleep(1000);

          let foundProducts = await $('.productDisplayed')
          product1 = foundProducts[rnd1]
          product2 = foundProducts[rnd2]

          await product1.click();
          let childDivs1 = await product1.findElements(by.css("div"));
           for(let i = 0; i < childDivs1.length; i++){
               let text = await childDivs1[i].getText();
                 if(text.includes("artikelid")){ 
                  product1_id = await ( childDivs1[i+1].getText() ) / 1;
                  await console.log(product1_id+"______PROD ID 1_____")
                }
      
               }

              await sleep(1500);

              await product2.click();
              let childDivs2 = await product2.findElements(by.css("div"));
              for(let i = 0; i < childDivs2.length; i++){
               let text2 = await childDivs2[i].getText();
                 if(text2.includes("artikelid")){ 
                  product2_id = await ( childDivs2[i+1].getText() ) / 1;
                  await  console.log(product2_id+"______PROD ID 2_____")
                }
               }
               await sleep(1500);


       });

  this.When(/^the user navigate to the shoppingcart$/, async function () {
        await helpers.loadPage('http://localhost:3000/shoppingcart.html');
        await sleep(2000);

       });

  this.Then(/^the items recently added with macthing quantity should be displayed into that unreg users shoppingcart$/, async function () {

         await sleep(1000);
          let gridDisplayedProducts = await $('.gridDisplayedProducts');
          for (let i = 0; i < gridDisplayedProducts.length; i++) {
            await gridDisplayedProducts[i].click();
          }
          await sleep(2000);

          let divsInProduct1 = await driver.findElements(by.css('.produkt0'))

                 for(let i = 0; i < divsInProduct1.length; i++) {
                     let text = await divsInProduct1[i].getText();
                       if(text.includes("artikelid")){ 
                          CartProduct1_id = await ( divsInProduct1[i+1].getText() ) / 1;
                          console.log(CartProduct1_id+"______________ID OF CART PROD 1")
                     }
                     
                    }  
              let divsInProduct2 = await driver.findElements(by.css('.produkt1'))

                 for(let i = 0; i < divsInProduct2.length; i++) {
                     let text = await divsInProduct2[i].getText();
                       if(text.includes("artikelid")){ 
                          CartProduct2_id = await ( divsInProduct2[i+1].getText() ) / 1;
                          console.log(CartProduct2_id+"______________ID OF CART PROD 2")
                     }
                     
                    }   
        
        assert (CartProduct1_id == product1_id, "ID på produkt 1 matchar inte")
        assert (CartProduct2_id == product2_id, "ID på produkt 2 matchar inte")

      let q1 = await $('#antal0')
      let q2 = await $('#antal1')
      assert (await q1.getAttribute('value') == "" +  q1Added, "antalet av rpodukt 1 stämmer ej med det addrade antalet")
      assert (await q2.getAttribute('value') == "" + q2Added, "antalet av rpodukt 2 stämmer ej med det addrade antalet")




      
       });


     this.Then(/^the sum of the products is correct$/, async function () {
         
                          let      divsInProduct1 = await driver.findElements(by.css('.produkt0'))

                 for(let i = 0; i < divsInProduct1.length; i++) {
                     let text = await divsInProduct1[i].getText();
                       if(text.includes("prisinklmoms")){ 
                          CartProduct1_pris = await ( divsInProduct1[i+1].getText() ) / 1;
                          console.log(CartProduct1_pris+"______________PRIS OF CART PROD 1")
                     }
                     
                    }  
              let  divsInProduct2 = await driver.findElements(by.css('.produkt1'))

                 for(let i = 0; i < divsInProduct2.length; i++) {
                     let text = await divsInProduct2[i].getText();
                       if(text.includes("prisinklmoms")){ 
                          CartProduct2_pris = await ( divsInProduct2[i+1].getText() ) / 1;
                          console.log(CartProduct2_pris+"______________PRIS OF CART PROD 2")
                     }
                     
                    }   

                    let totalen = await $('#totalen')
                    totalen = await totalen.getText()
                    totalen = await totalen.replace(/\D/g,'');

                    console.log(totalen+"____________totalen___________");    

                    assert( (CartProduct1_pris * q1Added + CartProduct2_pris * q2Added) == totalen, "summan stämmer ej") 
                    


         
       });




} //end