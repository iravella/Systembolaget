 let { $, sleep } = require('./funcs');
 module.exports = function() {


 this.Given(/^that the user is on systembolaget$/, async function() {
 	await helpers.loadPage('http://localhost:3000');
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


       // /scenaro 2
    this.Given(/^that the user is on the sytembolaget$/, async function () {
      await helpers.loadPage('http://localhost:3000');
         console.log("page is loaded");
         await sleep(1000);

    });  

     this.When(/^the user chooses the name in the sorting and the country name Portugal$/, async function () {

      let sortiment = await $('#Sortiment');
     await sortiment.click();
         await sleep(1000);
         let sortpris = await $('.sorteraNamn');
         await sortpris.click();
         await sleep(1000);
         let country = await $('#mainfiltermenu4');
         await country.click();
         let countryname = await $('.Portugal.buttonsOfLandFilter.dropdown-item');
         await sleep(1000);
         await countryname.click();
         await sleep(10000);
         
        
       });


       this.Then(/^the list of products from that country should be displayed in alphabetical order$/, async function () {
         
       });


    
}