module.exports = function(){

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

       this.When(/^the person clicks the reset button$/, async function () {
        
       let resetButton = await driver.findElement(by.css("#resetButton"));
        await resetButton.click();
        await sleep(1000);
 


       });



       this.Then(/^the shopping cart will display (\d+) items$/, async function (arg1) {
          
           let namn = await driver.findElements(by.css(".BigGrid .DivNamn"));
            assert(namn.length == 0, "you still have 1 item");
            await sleep(1000);
 


       });

}
	     
       
