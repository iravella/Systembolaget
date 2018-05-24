 module.exports = function() {

 
     function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  this.Given(/^is on the shopping cart page$/, async function () {
    //We are now on the Shopping cart page  
    let result = await helpers.loadPage('http://localhost:3000');
    assert(await driver.getTitle() != 'Error', "you are not on the website");
  });



       this.When(/^the user enters a new quantity of (\d+) to an item$/, async function (quan) {
         //INPUT CODE HERE
         //All products added 2 the cart should have there own ID for example quantity changer for product 1 can be quantityChanger p1
         //and for product 2 quantityChangerP2
         let quantityChanger = await driver.findElement(by.css("#quantityChangerP1"));
         await quantityChanger.click();
         await quantityChanger.sendKeys(quan);
         
       });


       this.Then(/^the user should see the quantity change to (\d+) on that item$/, async function (quan) {
         //CHANGE QUANTITY TO INPUT AMOUNT
         let quantity = await driver.findElement(by.css("#quantity"));
         assert(await quantityChanger.getText() == quan, "Your quantity did not change");

        
       });

       this.When(/^the user enters a quantity which is higher than the stock balance$/, async function () {
         
        let quantityChanger = await driver.findElement(by.css("#quantityChangerP1"));
         await quantityChanger.click();
         await quantityChanger.sendKeys(50000000);
         console.log(quantityChanger.getText());
         
       });



       this.Then(/^the quantity will change to the maximum stock balance$/, async function () {
         // Write code here that turns the phrase above into concrete actions
         let quantity = await driver.findElement(by.css("#quantity"));
         assert(await quantityChanger.getText() == "28","Your quantity is higher then 28");
       });



       this.Then(/^the user will be notified$/, async function () {
         let highText = await driver.findElement(by.css("#highText"));
         await highText.isDisplayed();
          assert(await highText.getText() == "Your quantity can't go higher than max in stock","message wasn't displayed");
         
       });



       this.When(/^the user enters a quantity lower than one$/, async function () {
         let quantityChanger = await driver.findElement(by.css("#quantityChangerP1"));
         await quantityChanger.click();
         await quantityChanger.sendKeys(0);
         console.log(quantityChanger.getText());
         
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