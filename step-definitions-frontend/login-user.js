var { $, sleep } = require('./funcs');

module.exports = function() 
{


this.When(/^the user is login with correct username and password$/, async function () 
{

	await helpers.loadPage('http://localhost:3000');
	await sleep(10000);

    // Enter the username in the username feild
	let username = await $('.login');
	await username.click();
	await username.sendKeys('Tobias');

    // Enter the password in the password feild
	let userPassword = await $('.password');
	await userPassword.click();
	await userPassword.sendKeys("4321");

});

       this.When(/^the user clicks on the login button$/, async function () 
       {
       	//Click on Login button
        let clikBtn = await $('.loginItem3');
		await clikBtn.click();
		await sleep(8000);
        
       }); 

this.Then(/^the user should be logged-in$/, async function () {
 // Write code here that turns the phrase above into concrete actions

});

 		
}