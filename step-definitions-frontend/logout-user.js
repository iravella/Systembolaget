module.exports = function() {

	function sleep(ms) {
    	return new Promise(resolve => setTimeout(resolve, ms));
  	}

   	this.When(/^the user clicks on logout button$/, async function () {
   		await sleep(3000);
   		let logOut = await driver.findElement(by.css(".loginItem3"));
   		await logOut.click();
  	});

   this.Then(/^the user should be logout from the page$/, async function () {
    	await sleep(1000);

    	let isLoggedIn = await driver.findElements(by.css(".loggedIn"));
 		
    	assert(isLoggedIn.length == 0, "The user is still logged in");
   	});
}