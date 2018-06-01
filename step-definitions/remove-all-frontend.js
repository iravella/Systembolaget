module.exports = function(){


       this.When(/^the person clicks the reset button$/, async function () {
        
       let resetButton = await driver.findElement(by.css("#resetButton"));
        await resetButton.click();


       });



       this.Then(/^the shopping cart will display (\d+) items$/, async function (arg1) {
          
           let namn = await driver.findElements(by.css(".BigGrid"));
           //it have to contain 1 item becuase its a h4 that says shoppingcart is empty
            assert(namn.length == 1, "you still have  items");


       });

}
	     
       
