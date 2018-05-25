var Search = require("../search-function.js");
var myApp = require('../app.js');


module.exports = function() {

	let {$, sleep} = require('./funcs');

	let searchFunction = new Search();
	let searchText;
	let ursprunglandnamn;
	let pris;
	let InputValue;
	let InputAttribute;

// Hur funkar cucumber? Den verkar spara myApp.displayedProducts genom hela processen. Det betyder att efter första
// sökingen på Carlsberg" Frankrike att längden på myApp.displayedProducts blir 0. Därefter klarar sig alla tester
// eftersom arrayen är tom. Kör cucumber when, when, when för alla variabler sedan kollar then?
// eller kör den given, when, then för en variabel i taget?

	this.Given(/^that a user is on the mainpage$/, async function () {
    console.warn("JJAAAAAAAAaAAAAAAA");
		await helpers.loadPage('http://localhost:3000/sortiment.html');
		await sleep(2000);
	});


//Cucumber söker efter "Vitt vin" och "Ekologisk"
  	this.When(/^a search is executed with the text: "([^"]*)" and using the ekofilter: "([^"]*)"$/, async function (arg1, arg2) {
  		searchText = arg1
  		InputAttribute = arg2

  		let field = await $("#inputfield");
  		assert(field, "didnt find the searchfield");
  		if (field) {
  			await field.sendKeys(searchText);
        	await sleep(1000);
  		}

  		let sokBtn = await $("#sokButton");
  		assert(sokBtn, "didnt find the sokBtn");
  		if (sokBtn) {
  			await sokBtn.click()
  			await sleep(1000)
  		}

  		let ekologisk = await $('#mainfiltermenu6');
  		assert(ekologisk, "Didnt find " + InputAttribute)
  		if (ekologisk) {
  			await ekologisk.click()
  			await sleep(300)
  		}
  	});

  	//Cucumber söker "Vitt vin" och "Ekologisk"
      this.Then(/^products matching "([^"]*)" and ekofilter: "([^"]*)" will show up$/, async function (arg1, arg2) {

      let giveUpAfter = 100;
      let searchlist;
      // wait until .searchlist exists
      do {
        await sleep(100);
        searchlist = await $(".productDisplayed");
        giveUpAfter--;
      } while (!searchlist && giveUpAfter > 0);

      assert(searchlist, "Didnt find the searchlist");

      if (searchlist) {
      	let foundProducts = await $(".gridDisplayedProducts .productDisplayed");
      	assert(foundProducts, "Didnt find any products!");									//Vad händer om testet inte ska hitta några?
      }

		
		
      });
      	


//Cucumber söker efter "searchText" och olika pricefilter
	this.When(/^a search is executed with "([^"]*)" and using the pricefilter: "([^"]*)"$/, async function (arg1, arg2) {
	});										//"Pris: 1 - 120"	from cucumber								


//Cucumber söker "Vete öl" (arg1) och prisfilter: "Pris: 1 - 120" (arg 2)
    this.Then(/^products matching "([^"]*)" and pricerange: "([^"]*)" will show up$/, async function (arg1, arg2) {
    });


//Cucumber söker efter "searchText" och olika ursprunglandnamn
  	this.When(/^a search is executed with the text: "([^"]*)" and filter: "([^"]*)"$/, async function (arg1, arg2) {
  	});

//Cucumber söker Text (arg 1) och ursprunglandnamn (arg2)
	this.Then(/^products matching the "([^"]*)" and "([^"]*)" will show up$/, async function (arg1, arg2) {
	});


//SCENARIO 4
	this.When(/^a search is executed with the text: "([^"]*)"$/, async function (arg1) {
	});

	this.Then(/^products matching "([^"]*)" will show up$/, async function (arg1) {
	});

}