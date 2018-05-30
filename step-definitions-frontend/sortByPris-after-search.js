var { $, sleep } = require('./funcs');

module.exports = async function() 
{

   this.Given(/^the user is in sortiment page$/, async function () {
     // Write code here that turns the phrase above into concrete actions
     await helpers.loadPage('http://localhost:3000');
     await sleep(1000);
     let sortiment = await $('#Sortiment');
     await sortiment.click();
     await sleep(1000);

   });
 	
   this.Given(/^the user enters Captain Morgan in inputfeild$/, async function () {
     // Write code here that turns the phrase above into concrete actions
      // Searchin for Captain Morgan product in the list
            let searchField = await $('#inputfield');
            assert(searchField, "There is no search field");
            await searchField.sendKeys("Captain Morgan");        
   });

   this.Given(/^we find some products$/, async function () {
     // Write code here that turns the phrase above into concrete actions
     	//Click on search button
     let searchBtn = await $('#sokButton');
     assert(searchBtn, "There is no Search Button");
     await searchBtn.click();
     await sleep(2000);
     
   });

   this.When(/^the user clicks on sorting\-option button$/, async function () {
     // Write code here that turns the phrase above into concrete actions
     let sortOption = await $('.listOfSortera');
     await sortOption.click();
     await sleep(2000);

     //.sorteraNamn.sorteraPris


     
   });
   
   this.When(/^the user chooses pris option$/, async function () {
     // Write code here that turns the phrase above into concrete actions
     let prisOption = await $('.sorteraPris');
     await prisOption.click();
     await sleep(8000);
     
   });


   this.When(/^the user clicks on sorting\-by button$/, async function () {

     // Write code here that turns the phrase above into concrete actions
     let sortLowPris = await $('#lagstOrHogst');
     await sortLowPris.click();
     await sleep(5000); 

     let sortHighPris = await $('#lagstOrHogst');
     await sortHighPris.click();
     await sleep(5000);    
   });


   this.Then(/^the system sholud sort\-by pris low to high price$/, async function () {
     // Write code here that turns the phrase above into concrete actions
     
   });


}