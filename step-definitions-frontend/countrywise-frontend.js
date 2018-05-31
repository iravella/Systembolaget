 let { $, sleep } = require('./funcs');
 module.exports = function() {


 this.Given(/^that the user is on systembolaget$/, async function() {
 	let driver = await helpers.loadPage('http://localhost:3000');
         console.log("page is loaded");
         await sleep(1000);
         
       });

  this.When(/^a user chooses the price and country name Australien$/, async function() {
  	let sortiment = await $('#Sortiment');
  	 await sortiment.click();
         await sleep(1000);
         let sortpris = await $('.sorteraPris');
         await sortpris.click();
         await sleep(1000);
         let country = await $('#mainfiltermenu4');
         await country.click();
         let countryname = await $('.Australien.buttonsOfLandFilter.dropdown-item');
         await sleep(1000);
         await countryname.click();
         await sleep(10000);
         
       });



  // <div class="Australien buttonsOfLandFilter dropdown-item" style="">Australien&nbsp;</div>

   this.Then(/^the lists of products from that country should be displayed in increasing order$/,async function() {
    
         
       });

    
}