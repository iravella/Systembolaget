module.exports = function(){
//behövs för att använda SLEEP xd
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

	this.Given(/^when$/, async function () {
	  await helpers.loadPage('http://localhost:3000');
 		console.log("it works");
 		//Använd ifall man vill se lite vad som händer.
 		//await sleep(1000);
 
	});


	this.When(/^then$/, async function () {
		let theButton = await driver.findElement(by.css('#wow'));
    	await theButton.click();
	});

	this.Then(/^given$/, async function () {
		let body = await driver.findElement(by.css("body"));
		let bgColor = await body.getCssValue("background-color");
		assert(bgColor == "rgba(255, 12, 170, 1)", 
			"You have the wrong background color! You should have rgba(255, 12, 170, 1) but you have " + bgColor);
	});

}