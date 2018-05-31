var { $, sleep } = require('./funcs');

module.exports = function() 
{

   this.Given(/^that the user is in home page$/, async function () 
   {
    await helpers.loadPage('http://localhost:3000');
	await sleep(10000);

    
   });

   this.When(/^the user is going to login with incorrect username and password$/, 
   async function () {

    // Enter the incorrect username 
	let username = await $('.login');
	await username.click();
	await username.sendKeys('Tobi');

    // Enter the incorrect password 
	let userPassword = await $('.password');
	await userPassword.click();
	await userPassword.sendKeys("431");

	//Click on Login button
    let clikBtn = await $('.loginItem3');
	await clikBtn.click();
	await sleep(800);

   });

   this.Then(/^the system should be show an error meesage$/, async function () {
     // showing an error message on the web-page
     
   });


}