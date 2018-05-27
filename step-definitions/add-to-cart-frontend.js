let { $ , sleep} = require('./funcs');

module.exports = function(){

	let product;

       this.Given(/^the user is in sortiment page$/, async function () 
       {
         // Write code here that turns the phrase above into concrete actions
       
         await helpers.loadPage('http://localhost:3000');
         await sleep(1000);

          let sortiment = await $('#Sortiment');

          await sortiment.click(); 
          await sleep(1000);
       });


      this.Given(/^the user enters Captain Morgan in inputfeild$/, async function () 

      {
        // Searchin for Captain Morgan product in the list

          let searchField = await $('#inputfield');
            assert(searchField, "There is no search field");
            await searchField.sendKeys("Captain Morgan");
            
  
      });


       this.When(/^the user clicks on search button$/, async function ()  {
         // Write code here that turns the phrase above into concrete actions

         let searchBtn = await $('#sokButton');
            assert(searchBtn, "There is no search button");
            await searchBtn.click();
            await sleep(1000);
         
       });

       this.When(/^we find products \(among them Captain Morgan - Spiced Gold\)$/, async function ()  

       {

           let products = await $('.productDisplayed');
            for(product of products)
            {

            	let text = await product.getText();
            	if(text.includes("Captain Morgan - Spiced Gold"))
            	{
            		await product.click();
            		await sleep(2000);
            		
            		break;
                }

            }

       });



       this.When(/^the user enters (\d+) bottles in tnhe quantity field of Captain Morgan - Spiced Gold$/, 
       	async function (arg1)  
       	{
         // Write code here that turns the phrase above into concrete actions
         let quantityField = await product.findElement(by.css('.antal'));
            		await quantityField.sendKeys(3);
            		await sleep(5000);
         
       });


       this.Then(/^(\d+) bottles of Captain Morgan - Spiced Gold should be added to his\/her shopping cart$/, 
       	async function (arg1) {
         // Write code here that turns the phrase above into concrete actions
   
       });

}