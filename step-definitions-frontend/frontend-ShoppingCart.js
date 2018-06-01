var { $, sleep } = require('./funcs');
var myApp = require('../app.js');
var shoppingCart = require('../shopping-cart.js');
var Person = require('../person.js');
var Product = require('../product.js');
var Category = require('../category.js');


 // Scenario: As a user i want to add a product into my cart and save it.
 //  ? Given that a user is on the sortiment homepage and logged in with an empty cart
 //  ? When a user adds 10 pieces of two random products from the sortiment
 //  ? And the user navigate to his or her shoppingcart
 //  ? Then the user should still be logged in
 //  ? And the items recently added should be displayed into that users shoppingcart
 //  ? And when the user relogg the products added should still be displayed





module.exports = function() {

	//let {$, sleep} = require('./funcs');

		let product1;
		let product2;
		let product1_id;
		let product2_id;
		let CartProduct1_id;
		let CartProduct2_id;
		let rnd1;
		let rnd2;
		let quantityAdded;



//Scenario: As a user i want to add a product into my cart and save it.
		this.Given(/^that a user is on the sortiment homepage and logged in with an empty cart$/, async function () {

						await helpers.loadPage('http://localhost:3000/shoppingcart.html');
						await sleep(2000);

					    // Enter the username in the username feild
						let username = await $('.login');
						//await username.click();
						await username.sendKeys('Tobias');

					    // Enter the password in the password feild
						let userPassword = await $('.password');
						//await userPassword.click();
						await userPassword.sendKeys("4321");
						await sleep(1500);

						let logInBtn = await $('.loginItem3');
						await logInBtn.click();
						await sleep(1500);

						let resetButton = await $('#resetButton');
						await resetButton.click();
						await sleep(2500);

						await helpers.loadPage('http://localhost:3000/sortiment.html');
						await sleep(1500);
       });



		this.When(/^a user adds (\d+) pieces of two random products from the sortiment$/, async function (arg1) {
				 quantityAdded = arg1
  				 rnd1 = await Math.floor((Math.random() * 14) );
  				
  				if (rnd1 ==	6 ) {
  					rnd1 = rnd1 + 1
  				}

  				if (rnd1 ==	4 ) {
  					rnd1 = rnd1 + 3
  				}

  				 rnd2 = await rnd1 + 1

  				if (rnd2 == 15) {
  					rnd2 = rnd2 - 2
  				}



  				//ITS BUGS when u trying to add more products then in stock and product nr6 in the 15 
  				//displayed produkts have 0 in stock.
  				//It should be a filter first sorting everything with stock 0 out.?



  				console.log("____ Random nr one: " + rnd1 +"_____")
  				console.log("____ Random nr two: " + rnd2 +"_____")
				
				assert(rnd1 !== rnd2, "random numbers are the same")

  				let antalInput1 = await $('#antal'+rnd1);
  				await antalInput1.sendKeys(arg1);
  				await sleep(1000);

  				let köpBtn1 = await $('#köp'+rnd1);
  				await köpBtn1.click();
  				await sleep(1000);
  				await driver.switchTo().alert().accept();
  				await sleep(1000);

  				let antalInput2 = await $('#antal'+rnd2);
  				await antalInput2.sendKeys(arg1);
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


		 this.When(/^the user navigate to his or her shoppingcart$/, async function () {

          await helpers.loadPage('http://localhost:3000/shoppingcart.html');
		  await sleep(1500);

       });


		this.Then(/^the user should still be logged in$/, async function () {
        		let loggedIn = await $('.loggedIn')
        		assert(loggedIn, "Hittar inte loggedIn knappen? Fel i inloggningen?") 
       });


 		this.Then(/^the items recently added should be displayed into that users shoppingcart$/, async function () {
			
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
 			
       });


 		this.Then(/^when the user relogg the products added should still be displayed$/, async function () {
 			let LoggOutBtn = await $('.loginItem3')
 			assert(LoggOutBtn, "Hittade inte logga ut")
 			let textOfLoggOutBtn = await LoggOutBtn.getText()
 			assert (textOfLoggOutBtn == "Logout", "Det står inte logout på knappen jag letar efter")

 			let q1 = await $('#antal0')
 			//q1 = q1.getAttribute('value');
 			let q2 = await $('#antal1')
 			//q1 = q2.getAttribute('value');

 			console.log(await q1.getAttribute('value')+"____________q1__________")
 			assert (await q1.getAttribute('value') == "" +  quantityAdded, "antalet av rpodukt 1 stämmer ej med det addrade antalet")
 			assert (await q2.getAttribute('value') == "" + quantityAdded, "antalet av rpodukt 2 stämmer ej med det addrade antalet")

  			await LoggOutBtn.click();
  			await sleep(2500);

  			//await helpers.loadPage('http://localhost:3000/shoppingcart.html');
			//await sleep(1500);

			// Enter the username in the username feild
			let username = await $('.login');
			//await username.click();
			await username.sendKeys('Tobias');

			// Enter the password in the password feild
			let userPassword = await $('.password');
			//await userPassword.click();
			await userPassword.sendKeys("4321");
			await sleep(1500);


			let logInBtn = await $('.loginItem3');
			await logInBtn.click();
			await sleep(1500);


			 let gridDisplayedProducts = await $('.gridDisplayedProducts');
  				for (let i = 0; i < gridDisplayedProducts.length; i++) {
  					await gridDisplayedProducts[i].click();
  				}

  				let divsInProduct1 = await driver.findElements(by.css('.produkt0'))

         				 for(let i = 0; i < divsInProduct1.length; i++) {
           					 let text = await divsInProduct1[i].getText();
           						 if(text.includes("artikelid")){ 
           				  		 	CartProduct1_id_2nd = await ( divsInProduct1[i+1].getText() ) / 1;
       							 }
           					 
          					}  
          		let divsInProduct2 = await driver.findElements(by.css('.produkt1'))

         				 for(let i = 0; i < divsInProduct2.length; i++) {
           					 let text = await divsInProduct2[i].getText();
           						 if(text.includes("artikelid")){ 
           				  		 	CartProduct2_id_2nd = await ( divsInProduct2[i+1].getText() ) / 1;
       							 }
           					 
          					}   
  			
  			assert (CartProduct1_id == CartProduct1_id_2nd, "ID på produkt 1 matchar inte")
  			assert (CartProduct2_id == CartProduct2_id_2nd, "ID på produkt 2 matchar inte")

			await sleep(2000);

       	});

} //end