var { $, sleep } = require('./funcs');
module.exports = function() {


    this.Given(/^that the user is logged in on the home page$/, async function() {
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

        let clikBtn = await $('.loginItem3');
    await clikBtn.click();
    await sleep(8000);

    });

    this.When(/^the user clicks on logout button$/, async function() {
        await sleep(3000);
        let logOut = await driver.findElement(by.css(".loginItem3"));
        await logOut.click();
    });

    this.Then(/^the user should be logout from the page$/, async function() {
        await sleep(1000);

        let isLoggedIn = await driver.findElements(by.css(".loggedIn"));

        assert(isLoggedIn.length == 0, "The user is still logged in");
    });
}