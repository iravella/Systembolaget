 module.exports = function() {

    function $(selector){
      return driver.findElement(by.css(selector));
     } 



     function sleep(ms) {
    
    return new Promise(resolve => setTimeout(resolve, ms));
  }

       this.Given(/^that the user is on the shopping cart page$/, async function () {
        await helpers.loadPage('http://localhost:3000/shoppingcart.html');
         assert(await driver.getTitle() == 'Kundvagn', "you are on the wrong page");
       });

       this.When(/^the user clicks the continue shopping button$/, async function () {
        let contButton = await $("#continueButton");
        await contButton.click();
         
       });

       this.Then(/^the user should be redirected to the sortiment page$/, async function () {
        assert(await driver.getTitle() == "Sortiment", "you are on the wrong page");
         
       });

       this.When(/^the user clicks the pay button$/, async function () {
        let payButton = await $("#payButton");
        await payButton.click();         
       });

       this.Then(/^the user should be redirected to the payment page$/, async function () {
         assert(await driver.getTitle() == "Betalning", "you are on the wrong page");
         
       });
  

      }