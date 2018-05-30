var { $, sleep } = require('./funcs');

module.exports =  function() 
{

this.Given(/^the user enters Schlappeseppel Specialität in inputfeild$/, async function () {
 // Write code here that turns the phrase above into concrete actions
 	let searchField = await $('#inputfield');
    assert(searchField, "There is no search field");
    await searchField.sendKeys("Schlappeseppel Specialität"); 

    let searchBtn = await $('#sokButton');
     assert(searchBtn, "There is no Search Button");
     await searchBtn.click();
     await sleep(2000);     

});


this.When(/^the user chooses namn option$/, async function () 
{
 // Sorting produt name by alphabetical order
  let prisOption = await $('.sorteraNamn');
     await prisOption.click();
     await sleep(8000);


 	
});

this.Then(/^the system sholud sort\-by\-namn by alphabetical order$/, async function () {
 // Write code here that turns the phrase above into concrete actions
 	

});

}
