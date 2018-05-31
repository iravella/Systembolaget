var { $, sleep } = require('./funcs');

module.exports = function() 
{




       this.When(/^the user clicks on logout button$/, async function () 
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

			//Click on Login button
	        let logInBtn = await $('.loginItem3');
			await logInBtn.click();
			await sleep(6000);


			//Click on Login button
	        let logOutBtn = await $('.loginItem3');
			await logOutBtn.click();
			await sleep(8000);
        	
        	

		         
       });

       this.Then(/^the user should be logout from the page$/, async function () {
         // Write code here that turns the phrase above into concrete actions
         
       });
}