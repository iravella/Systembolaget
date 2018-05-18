module.exports = function() { 

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  this.Given(/^that the user is on the home page$/, async function () {
    await helpers.loadPage('http://localhost:3000');
    await sleep(2000);
  
  });

  this.When(/^the user clicks on the "([^"]*)" link$/, async function (arg1) {
    
    if (arg1 == "home") {
      let homePage = await driver.findElement(by.css('#index'));
      await homePage.click();
      
    }

    if (arg1 == "sortiment") {
      let homePage = await driver.findElement(by.css('#sortiment'));
      await homePage.click();
      
    }

    if (arg1 == "Shopping cart") {
      let homePage = await driver.findElement(by.css('#shoppingcart'));
      await homePage.click();
      
    }
  });

  this.Then(/^the user redirects to the "([^"]*)" page$/, async function (arg1) {
    await sleep(5000);
  });

}