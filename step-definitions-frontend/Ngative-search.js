var { $, sleep } = require('./funcs');

module.exports =  function() 
{
  
       this.Given(/^the user enter abcdefg in searchfeild$/, async function () {

   			await helpers.loadPage('http://localhost:3000');
	 		await sleep(1000);
 	 		let sortiment = await $('#Sortiment');
     		await sortiment.click();
     		await sleep(1000);
         // Searchin for abcdefg product in the list
            let searchField = await $('#inputfield');
            assert(searchField, "There is no search field");
            await searchField.sendKeys("abcdefg"); 
  
       });

       this.When(/^click on search button$/, async	 function () {
         // Write code here that turns the phrase above into concrete actions
          searchBtn = await $('#sokButton');
		     assert(searchBtn, "There is no Search Button");
		     await searchBtn.click();
		     await sleep(2000);
       
       });


       this.Then(/^the sytem should be show an error message as "([^"]*)"$/, async function (arg1) {
         // Write code here that turns the phrase above into concrete actions
         
       });

}