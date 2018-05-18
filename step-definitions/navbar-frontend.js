module.exports = function() { 

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  let testPage;

  this.Given(/^that the user is on the home page$/, async function () {
    await helpers.loadPage('http://localhost:3000/index.html');
  
  });

  this.When(/^the user clicks on the "([^"]*)" link$/, async function (arg1) {
    
    if (arg1 == "index") {
      testPage = await driver.findElement(by.css('#index'));
      await testPage.click();
      
    }

    if (arg1 == "sortiment") {
      testPage = await driver.findElement(by.css('#sortiment'));
      await testPage.click();
      
    }

    if (arg1 == "shoppingcart") {
      testPage = await driver.findElement(by.css('#shoppingcart'));
      await testPage.click();

    }
  });

  this.Then(/^the user redirects to the "([^"]*)" page$/, async function (arg1) {
    let titleCheck = await driver.getTitle();
    let pageCheck = arg1;
    assert(pageCheck == titleCheck, "The redirect didn't work, you got redirected to the page with a title of " + titleCheck);
 });

  this.Given(/^that the user is on the sortiment page$/, async function () {
    await helpers.loadPage('http://localhost:3000/sortiment.html');
 
  });

  this.Given(/^that the user is on the shoppingcart page$/, async function () {
    await helpers.loadPage('http://localhost:3000/shoppingcart.html');
 
  });
}