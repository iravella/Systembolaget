let Person = require('../person.js');
let myApp = require('../app.js');

module.exports = function() {

   function $(selector){
      return driver.findElement(by.css(selector));
     } 

     function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  this.Given(/^that I have chosen to pay for products in my shopping cart$/, function () {
         // Write code here that turns the phrase above into concrete actions
   
       });


       this.When(/^I enter my payment information$/, function () {
         // Write code here that turns the phrase above into concrete actions
       
       });



       this.When(/^my payment inputs are valid$/, function () {
         // Write code here that turns the phrase above into concrete actions
       
       });


       this.When(/^press the payment button$/, function () {
         // Write code here that turns the phrase above into concrete actions
       
       });


       this.Then(/^I should recieve a verification of my payment$/, function () {
         // Write code here that turns the phrase above into concrete actions
      
       });



       this.When(/^my payment inputs are invalid$/, function () {
         // Write code here that turns the phrase above into concrete actions
      
       });

       this.Then(/^I should recieve information about what inputs are invalid$/, function () {
         // Write code here that turns the phrase above into concrete actions
       
       });


       //----------------------scenario 3 ------------------------------

       this.Given(/^that a user is on the payment page$/, async function () {
        await helpers.loadPage("http://localhost:3000/payment.html");
       });

       this.Given(/^have typed in the correct information$/, async function () {
        let fr = await $("#firstName");
        await fr.click();
        await sleep(3000);
        await fr.sendKeys("Pelle");
        await sleep(3000);

        let ls = await $("#lastName");
        await ls.click();
        await sleep(3000);
        await ls.sendKeys("Khan");
        await sleep(3000);
       });

       this.When(/^the user clicks the paybutton$/, async function () {
        let paybutton = await $("#pay");
        await paybutton.click();
        await sleep(3000);
        await driver.switchTo().alert().accept();

        //code to accept the alert
       });

       this.Then(/^the user should come back to the home page$/, async function () {
          let titleCheck = await driver.getTitle();
          let pageCheck = "Quality Liquor Store";
          assert(pageCheck == titleCheck, "The redirect didn't work, you got redirected to the page with a title of " + titleCheck);
       });
     }