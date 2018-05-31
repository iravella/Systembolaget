 module.exports = function() {
  
  function $(selector){
      return driver.findElement(by.css(selector));
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  this.Given(/^that the user is logged in on the home page$/, async function () {
    await helpers.loadPage('http://localhost:3000/index.html');
    await sleep(3000);
    
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
    await helpers.loadPage('http://localhost:3000/sortiment.html');

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
  

 });




 this.Then(/^the user should see the quantity change to (\d+) on that item$/, async function (quan) {
   //CHANGE QUANTITY TO INPUT AMOUNT
   let quantity = await driver.findElement(by.css("antal0"));
   assert(await quantityChanger.getText() == quan, "Your quantity did not change");

  
 });




 this.When(/^the user enters a quantity which is higher than the stock balance$/, async function () {
   
  let quantityChanger = await driver.findElement(by.css("#quantityChangerP1"));
   await quantityChanger.click();
   await quantityChanger.sendKeys(50000000);
   //console.log(quantityChanger.getText());
   
 });




 this.Then(/^the quantity will change to the maximum stock balance$/, async function () {
   // Write code here that turns the phrase above into concrete actions
   let quantity = await driver.findElement(by.css("#quantity"));
   assert(await quantityChanger.getText() == "28","Your quantity is higher then 28");
 });




 this.Then(/^the user will be notified$/, async function () {
   let highText = await driver.findElement(by.css("#highText"));
   
    assert(await highText.isDisplayed(), "highText is not displayed");
    assert(await highText.getText() == "Your quantity can't go higher than max in stock","message wasn't displayed");
 });



 this.When(/^the user enters a quantity lower than one$/, async function () {
   let quantityChanger = await driver.findElement(by.css("#quantityChangerP1"));
   await quantityChanger.click();
   await quantityChanger.sendKeys(0);
   //console.log(quantityChanger.getText());
   
 });



  this.Then(/^the quantity will change to one$/,  async function () {
    let quantity = await driver.findElement(by.css("#quantity"));
   assert(await quantityChanger.getText() == "1","Your quantity is lower then 1");
    
  });


  this.Then(/^the user will be notified that quantity can't go lower than ones$/, async function () {
    let lowText = await driver.findElement(by.css("#lowText"));
    await lowText.isDisplayed();
    assert(await lowText.getText() == "Your quantity can't go lower then one","message wasn't displayed");
  });

      }