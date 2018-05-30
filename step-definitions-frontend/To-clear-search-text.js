// <div class="btn btn-secondary hiddenfiltermenu" id="filtersearchtext" aria-pressed="false" autocomplete="off" val="renat">Text: renat</div>

var { $, sleep } = require('./funcs');

module.exports =  function() 
{

   	this.Given(/^the user enters Renat in searchfeild$/, async function () 
   	{
   		// To go to sortiment page
		// await helpers.loadPage('http://localhost:3000');
		// await sleep(1000);
		// let sortiment = await $('#Sortiment');
		// await sortiment.click();
		// await sleep(1000);

		// Enter Renat in search feild
	    let searchField = await $('#inputfield');
        assert(searchField, "There is no search field");
        await searchField.sendKeys("Renat"); 
	    await sleep(3000);
    });

    this.Given(/^the user clicks on search button$/, async function () 
    {
    	searchBtn = await $('#sokButton');
	    assert(searchBtn, "There is no Search Button");
	    await searchBtn.click();
	    await sleep(2000);
       
    });

   this.When(/^the user clicks on Text button$/, async function () 
   {
   		let clearTextBtn = await $('#filtersearchtext');
   		await clearTextBtn.click();
   		await sleep(8000);

   });


   this.Then(/^the system should be cleared the search text$/, async function () {
     // Write code here that turns the phrase above into concrete actions
            });
}