var { $, sleep } = require('./funcs');
module.exports = function() {


    this.Given(/^that the user is logged in on the home page$/, async function() {
        await helpers.loadPage('http://localhost:3000/index.html');
    
    
        let testName = await driver.findElement(by.css(".login"));
        let testPassword = await driver.findElement(by.css(".password"));
        let loginButton = await driver.findElement(by.css(".loginItem3"));
        let checkTitle = await driver.getTitle();
        let pageCheck = "Quality Liquor Store";

        await testName.click();
        await testName.sendKeys("Test");
        await testPassword.click();
        await testPassword.sendKeys("1111");
        await loginButton.click();


        let isLoggedIn = await driver.findElements(by.css(".loggedIn"));
     
        assert(isLoggedIn.length != 0, "The user is not logged in");
        assert(checkTitle == pageCheck, "The user is not on the home page!");

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