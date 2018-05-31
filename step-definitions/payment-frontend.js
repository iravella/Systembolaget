let Person = require('../person.js');
let myApp = require('../app.js');

module.exports = function() {

   function $(selector){
      return driver.findElement(by.css(selector));
     } 

     function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  this.Given(/^that I have chosen to pay for products in my shopping cart$/, async function () {
         await helpers.loadPage("http://localhost:3000/shoppingcart.html");
         await $("#payButton").click();
         await sleep(1000);

   
       });


       this.When(/^I enter valid payment information$/, async function () {
        let fr = await $("#firstName");
        await fr.sendKeys("Pelle");
        await sleep(1000);

        let ls = await $("#lastName");
        await ls.sendKeys("Khan");
        await sleep(1000);

        let cn = await $("#cardNumber");
        await cn.sendKeys(1337133713371337);
        await sleep(1000);

        let vn = await $("#verificationNumber");
        await vn.sendKeys(133);
        await sleep(1000);
       });

       this.When(/^press the payment button$/, async function () {
       let paybutton = await $("#pay");
        await paybutton.click();
        await sleep(1000);  
       
       });


       this.Then(/^I should recieve a verification of my payment$/, async function () {
        let alerttext = await driver.switchTo().alert().getText();  
        assert(alerttext == "Tack för att du handla hos oss! Din order är påväg.", "The alert didnt show!")
        await driver.switchTo().alert();
       });

       //-------------------SCENARIO 2 --------------------------

       this.When(/^I enter invalid payment information$/, async function () {
           let fr = await $("#firstName");
        await fr.click();
        await sleep(1000);
        await fr.sendKeys("123");
        await sleep(1000);

        let ls = await $("#lastName");
        await ls.click();
        await sleep(1000);
        await ls.sendKeys("123");
        await sleep(1000);

       let cn = await $("#cardNumber");
        await cn.sendKeys(1337133713371337);
        await sleep(1000);

        let vn = await $("#verificationNumber");
        await vn.sendKeys(133);
        await sleep(1000);

        //trigger pay
         let paybutton = await $("#pay");
        await paybutton.click();
        await sleep(1000);  
       
      
       });

       this.Then(/^I should recieve information about what inputs are invalid$/, async function () {
         let FirstWarning = await $("#Fwarning").isDisplayed();
         let LastWarning = await $("#Lwarning").isDisplayed();
         assert(await FirstWarning == true, "the first warning text is not displayed");
         assert(await LastWarning == true, "the last warning text is not displayed");
       
       });


       //----------------------scenario 3 ------------------------------

       this.Given(/^that a user is on the payment page$/, async function () {
        await helpers.loadPage("http://localhost:3000/payment.html");
       });

       this.Given(/^have typed in the correct information$/, async function () {
         let fr = await $("#firstName");
        await fr.sendKeys("Pelle");
        await sleep(1000);

        let ls = await $("#lastName");
        await ls.sendKeys("Khan");
        await sleep(1000);

       let cn = await $("#cardNumber");
        await cn.sendKeys(1337133713371337);
        await sleep(1000);

        let vn = await $("#verificationNumber");
        await vn.sendKeys(133);
        await sleep(1000);
       });

       this.When(/^the user clicks the paybutton$/, async function () {
        let paybutton = await $("#pay");
        await paybutton.click();
        await sleep(1000);
        await driver.switchTo().alert().accept();

        //code to accept the alert
       });

       this.Then(/^the user should come back to the home page$/, async function () {
          let titleCheck = await driver.getTitle();
          let pageCheck = "Quality Liquor Store";
          assert(pageCheck == titleCheck, "The redirect didn't work, you got redirected to the page with a title of " + titleCheck);
          await sleep(2000);
       });
     }