  let { $, sleep } = require('./funcs');
 module.exports = function() {

 this.Given(/^that the user is on online systembolaget$/, async function () {
 	await helpers.loadPage('http://localhost:3000');
         console.log("page is loaded");
         await sleep(1000);

         let username = await $('.login');
         await sleep(3000);
         await username.click();
          await username.sendKeys("Brad"); 
          await sleep(300);    

          let password = await $('.password');
          await password.click();
          await password.sendKeys(1234);
          await  sleep(300);

          let login = await $('.loginItem3');
          await login.click();
          await sleep(2000);
         
       });

 this.When(/^the user chooses the name sorting and alchohol percentage$/, async function () {
 	let sortiment = await $('#Sortiment');
         await sortiment.click();
         await sleep(1000);

         let sortpris = await $('.sorteraNamn');
         await sortpris.click();
         await sleep(1000);

         let alchoholhalt = await $('#mainfiltermenu5');
         await alchoholhalt.click();
         await sleep(100);
         //giving the minim alchohol value
         let minalchohol = await $('.minAlk.undermenualkoholhalt');
         await minalchohol.sendKeys(5);
         await sleep(100);
         let maxalchohol = await $('.maxAlk.undermenualkoholhalt');
         await maxalchohol.sendKeys(15);
         await sleep(500);
         let okbtn = await $('.confirmbuttoninfilters.undermenualkoholhalt');
         await okbtn.click();
         await sleep(1000);

        
       });

  this.Then(/^a list of products should be displayed in alphabetical order within the given percentage of alchohol$/, async function () {
         
       });

}