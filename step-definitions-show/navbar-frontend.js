module.exports = function() { 

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  let testPage;

  this.Given(/^that the user is on the home page$/, async function () {
    await helpers.loadPage('http://localhost:3000/index.html');
  
  });

  this.When(/^the user clicks on the "([^"]*)" link$/, async function (arg1) {
      
    if (arg1 == "Hem") {
      testPage = await driver.findElement(by.css('#Hem'));
      await testPage.click();
      
    }

    if (arg1 == "Sortiment") {
      testPage = await driver.findElement(by.css('#Sortiment'));
      await testPage.click();
      
    }

    if (arg1 == "Kundvagn") {
      testPage = await driver.findElement(by.css('#Kundvagn'));
      await testPage.click();

    }
  });

  this.Then(/^the user redirects to the "([^"]*)" page$/, async function (arg1) {
    let titleCheck = await driver.getTitle();
    if (arg1 == "Hem"){
     assert(titleCheck == "Quality Liquor Store","The redirect didn't work, you got redirected to the page with a title of " + titleCheck);
    }
    else{
       assert(arg1 == await titleCheck, "The redirect didn't work, you got redirected to the page with a title of " + titleCheck);
    }
    await sleep(1000);
   
 });

  this.Given(/^that the user is on the sortiment page$/, async function () {
    await helpers.loadPage('http://localhost:3000/sortiment.html');
    await sleep(1000);
 
  });

  this.Given(/^that the user is on the shoppingcart page$/, async function () {
    await helpers.loadPage('http://localhost:3000/shoppingcart.html');
    await sleep(1000);
 
 
  });
}