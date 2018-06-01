 module.exports = function() {
  
  function $(selector){
      return driver.findElement(by.css(selector));
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  this.Given(/^that the user is logged in on the home page$/, async function () {

    await helpers.loadPage('http://localhost:3000/index.html');
    await sleep(5000);
    
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

    await sleep(2000);
    let isLoggedIn = await driver.findElements(by.css(".loggedIn"));
 
    assert(isLoggedIn.length != 0, "The user is not logged in");
    assert(checkTitle == pageCheck, "The user is not on the home page!");
    await sleep(1000);
  });



  this.Given(/^that the user has a product in his shopping cart$/, async function() {
    await helpers.loadPage('http://localhost:3000/shoppingcart.html');
    let resetButton = await $("#resetButton");
    await resetButton.click();
    let testPage = await driver.findElement(by.css('#Sortiment'));
    await testPage.click();

    await sleep(2000);
    let product = await driver.findElement(by.css("#antal0"));
    let buyProduct = await driver.findElement(by.css("#köp0"));

  
    await product.click();
    await product.sendKeys("1");
    await buyProduct.click();

    
    let isAlertPresent = false;
    try { 
      driver.switchTo().alert(); 
      isAlertPresent = true; 
    }   // try 
    catch (e) { 
        isAlertPresent = false; 
    }   // catch 
    await sleep(2000);
    let buyMessage = await driver.switchTo().alert().accept();
    await sleep(1000);
    assert(isAlertPresent == true, "The product wasn't added to the cart");
  });



  this.Given(/^is on the shopping cart page$/, async function () {
    //We are now on the Shopping cart page  
    let result = await helpers.loadPage('http://localhost:3000/shoppingcart.html');
    assert(await driver.getTitle() != 'Error', "you are not on the website");
    
  });




 this.When(/^the user enters a new quantity of (\d+) to an item$/, async function (quan) {
   //INPUT CODE HERE
   //All products added 2 the cart should have there own ID for example quantity changer for product 1 can be quantityChanger p1
   //and for product 2 quantityChangerP2
   
        let köpId = await driver.findElement(by.css('#plus0'));
        await köpId.click();
        await köpId.click();
        await köpId.click();
        await köpId.click();        
        await sleep(2000);
 });




 this.Then(/^the user should see the quantity change to (\d+) on that item$/, async function (quan) {
   //CHANGE QUANTITY TO INPUT AMOUNT
   let pris = await driver.findElement(by.css("#antal0"));
   assert(await pris.getAttribute("value") == "5", "Your quantity did not change");
   await sleep(1000);

  
 });

 this.When(/^the user enters a quantity lower than one$/, async function () {
   let namn = await driver.findElement(by.css("#namn0"));
   let köpId = await driver.findElement(by.css('#minus0'));
        await köpId.click(); 
   
 });



  this.Then(/^the item will be removed$/,  async function () {
    let namn = await driver.findElements(by.css(".BigGrid .DivNamn"));
    assert(namn.length == 0, "you still have 1 item");
  });

      }