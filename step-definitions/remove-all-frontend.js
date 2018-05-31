module.exports = function(){


  this.Given(/^that the shopping cart displays the users items$/, async function () {
          await helpers.loadPage('http://localhost:3000/shoppingcart.html');
        let cartItems = await $("#product0").isDisplayed();
        assert(await cartItems == true, "Items are not displayed");


       });



       this.When(/^the person clicks the reset button$/, async function () {
        
       let resetButton = await $("#resetButton");
        await resetButton.click();


       });



       this.Then(/^the shopping cart will display (\d+) items$/, async function (arg1) {
          
        let cartItems = await $("#product0").isDisplayed();
        assert(await cartItems == false, "Items are displayed");
        


       });

}
	     
       
