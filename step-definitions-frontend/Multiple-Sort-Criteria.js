var { $, sleep } = require('./funcs');

module.exports = function() 
{

   	this.When(/^the user clicks on pris buton$/, async function () 
	{
		// click on prise button
	 	let prisBtn = await $('#mainfiltermenu0');
	 	await prisBtn.click();
	 	// await sleep(1000); 
	});

   this.When(/^the user enters min (\d+)kr and max (\d+)kr in that feilds$/, async function (arg1, arg2) {

	 	// Enter minimum & maximum values
	 	let minFeild = await $('input.minPris');
	 	await minFeild.sendKeys(arg1);
	 	// await sleep(1000);
	 	
	 	let maxFeild = await $('input.maxPris');
	 	await maxFeild.sendKeys(arg2);
	 	// await sleep(1000);

	 	//click on ok button
	 	let okBtn = await $('.confirmbuttoninfilters.undermenupris');
	 	await okBtn.click();
	 	// await sleep(2000);
   });

   this.When(/^the user clicks on volym button$/, async function () 
   {
     // click on Volym button
	 	let volymBtn = await $('#mainfiltermenu1');
	 	await volymBtn.click();
	 	// await sleep(1000);  
   });

    this.When(/^the user enters min (\d+)ml and max (\d+)ml volymiml$/, 
    async function (arg1, arg2) 
    {
    	// Enters min and max values 
    	let minFeildV = await driver.findElement(by.css('.minVolym'));
	 	await minFeildV.sendKeys(arg1);
	 	// await sleep(1000);
	 	
	 	let maxFeildV = await driver.findElement(by.css('.maxVolym'));
	 	await maxFeildV.sendKeys(arg2);
	 	// await sleep(1000);

	 	//click on ok button
	 	let okBtnV = await $('.confirmbuttoninfilters.undermenuvolym');
	 	await okBtnV.click();
	 	// await sleep(2000);

   });

   this.When(/^the user clicks on varugrupp button$/, async function () 
   {
     // click on Varugrupp button
	 	let varuGruppBtn = await $('#mainfiltermenu2');
	 	await varuGruppBtn.click();
	 	// await sleep(5000);
   });

   this.When(/^the user chooses öl in the list$/, async function () 
   {
      //select öl fom the list
    let varuGrupp = await $('.buttonsOfvarugrupperFilter');
    for(let div of varuGrupp)
    {
    	let text = await div.getText();

    	if (text === 'Öl'){
    		varuGrupp = div;
    		break;
    	}
	}
	await varuGrupp.click();	
 	// await sleep(5000);  

   });

   this.When(/^the user clicks on länder button$/, async function ()
   {
     // click on länder button
     let varuGruppBtn = await $('#mainfiltermenu4');
	 	await varuGruppBtn.click();


   });

   this.When(/^the user chooses Chile namn$/, async function () 
   {
       //select Chile from the list
    let varuGrupp = await $('.buttonsOfvarugrupperFilter');
    for(let div of varuGrupp)
    {
    	let text = await div.getText();

    	if (text === 'Chile'){
    		varuGrupp = div;
    		break;
    	}
	}
	await varuGrupp.click();	
 	// await sleep(5000);  

     
   });


   this.Then(/^the product should be sorted by pris,volym,varugrupp,länder$/, async function () 
   {
     // Write code here that turns the phrase above into concrete actions
     
   });

}

