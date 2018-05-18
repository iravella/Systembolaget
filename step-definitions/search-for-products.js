let Search = require("../search-function.js");
let myApp = require('../app.js');

module.exports = function() {
<<<<<<< Updated upstream
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

	this.Given(/^that a user is on the mainpage$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback();
	});

//Cucumber söker efter "Vitt vin" och "Ekologisk"
  	this.When(/^a search is executed with the text: "([^"]*)" and using the ekofilter: "([^"]*)"$/, function (arg1, arg2, callback) {
         searchText = arg1;
         InputAttribute = arg2;
         InputValue = 1;
         searchFunction.reset();
         searchFunction.critieriaSearch(InputAttribute, InputValue);
console.log(myApp.displayedProducts.length + "  FIRST FILTER: InputAttribut: ", InputAttribute + "InputValue: " + InputValue)
         searchFunction.fixTextAndThenSearchFreeText(searchText);
console.log(myApp.displayedProducts.length + "  SECOND FILTER: freetext: ", searchText)
         callback();
    });

  	//Cucumber söker "Vitt vin" och "Ekologisk"
      this.Then(/^products matching "([^"]*)" and ekofilter: "([^"]*)" will show up$/, function (arg1, arg2, callback) {
      		searchText = arg1
      	
      			for(let product of myApp.displayedProducts) {	
					assert(product.ekologisk == 1, "all the displayed products didnt counts as ekological (value 1)")
				}

			let searchTextSplitted = searchText.toLowerCase().split(" ");
				for (let i = 0; i < myApp.displayedProducts.length; i++) {
				let FOUNDIT = false	
					for (let attribute in myApp.displayedProducts[i]) {						
							let valueOFAttribute = myApp.displayedProducts[i][attribute];
							let valueOFAttributeFix = valueOFAttribute.toString().toLowerCase();
							let findRegex = new RegExp(searchTextSplitted.join('|'));
							if (findRegex.test(valueOFAttributeFix)) {
								FOUNDIT = true
							}
					}

					assert (FOUNDIT == true)
				}
         callback();
       });

//Cucumber söker efter "searchText" och olika pricefilter
	this.When(/^a search is executed with "([^"]*)" and using the pricefilter: "([^"]*)"$/, function (arg1, arg2, callback) {
        searchText = arg1;
  		pris = arg2;												//"Pris: 1 - 120"	from cucumber								
		let min = pris.split("Pris: ")[1].split("-")[0] / 1			// "1"
		let max = pris.split("Pris: ")[1].split("-")[1]	/ 1			// "120"
		InputAttribute = "prisinklmoms"

  		searchFunction.reset();
  		searchFunction.criteriaIntervalls(InputAttribute, min, max)
console.log(myApp.displayedProducts.length + "   FIRST FILTER: InputAttribut: ", InputAttribute)
		searchFunction.fixTextAndThenSearchFreeText(searchText)
console.log(myApp.displayedProducts.length + "   SECOND FILTER: freetext: ", searchText)

        callback();
       });


//Cucumber söker "Vete öl" (arg1) och prisfilter: "Pris: 1 - 120" (arg 2)
    this.Then(/^products matching "([^"]*)" and pricerange: "([^"]*)" will show up$/, function (arg1, arg2, callback) {

    	searchText = arg1
    	pris = arg2
    	let min = pris.split("Pris: ")[1].split("-")[0]		// "1"
		let max = pris.split("Pris: ")[1].split("-")[1]		// "120"
		for(let i = 0; i < myApp.displayedProducts.length; i++) {
			assert (myApp.displayedProducts[i].prisinklmoms >= min, "Prisinklmoms är tyvärr mer än " + min)
			assert (myApp.displayedProducts[i].prisinklmoms <= max, "Prisinklmoms är tyvärr mer än " + max)
		}

			let searchTextSplitted = searchText.toLowerCase().split(" ");
				for (let i = 0; i < myApp.displayedProducts.length; i++) {
				let FOUNDIT = false	
					for (let attribute in myApp.displayedProducts[i]) {						
							let valueOFAttribute = myApp.displayedProducts[i][attribute];
							let valueOFAttributeFix = valueOFAttribute.toString().toLowerCase();
							let findRegex = new RegExp(searchTextSplitted.join('|'));
							if (findRegex.test(valueOFAttributeFix)) {
								FOUNDIT = true
							}
					}

					assert (FOUNDIT == true)
				}

        callback();
=======
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

  this.Given(/^that a user is on the mainpage$/, async function(callback) {
    await helpers.loadPage('https://localhost:3000');
    callback();
  });

  //Cucumber söker efter "Vitt vin" och "Ekologisk"
  this.When(/^a search is executed with the text: "([^"]*)" and using the ekofilter: "([^"]*)"$/, async function(arg1, arg2, callback) {
    searchText = arg1;
    InputAttribute = arg2;
    InputValue = 1;
    searchFunction.reset();
    searchFunction.critieriaSearch(InputAttribute, InputValue);
    console.log(myApp.displayedProducts.length + "  FIRST FILTER: InputAttribut: ", InputAttribute + "InputValue: " + InputValue)
    searchFunction.fixTextAndThenSearchFreeText(searchText);
    console.log(myApp.displayedProducts.length + "  SECOND FILTER: freetext: ", searchText)
    callback();
  });

  //Cucumber söker "Vitt vin" och "Ekologisk"
  this.Then(/^products matching "([^"]*)" and ekofilter: "([^"]*)" will show up$/, async function(arg1, arg2, callback) {
    searchText = arg1

    for (let product of myApp.displayedProducts) {
      assert(product.ekologisk == 1, "all the displayed products didnt counts as ekological (value 1)")
    }

    let searchTextSplitted = searchText.toLowerCase().split(" ");
    for (let i = 0; i < myApp.displayedProducts.length; i++) {
      let FOUNDIT = false
      for (let attribute in myApp.displayedProducts[i]) {
        let valueOFAttribute = myApp.displayedProducts[i][attribute];
        let valueOFAttributeFix = valueOFAttribute.toString().toLowerCase();
        let findRegex = new RegExp(searchTextSplitted.join('|'));
        if (findRegex.test(valueOFAttributeFix)) {
          FOUNDIT = true
        }
      }

      assert(FOUNDIT == true)
    }
    callback();
  });

  //Cucumber söker efter "searchText" och olika pricefilter
  this.When(/^a search is executed with "([^"]*)" and using the pricefilter: "([^"]*)"$/, async function(arg1, arg2, callback) {
    searchText = arg1;
    pris = arg2; //"Pris: 1 - 120"	from cucumber								
    let min = pris.split("Pris: ")[1].split("-")[0] / 1 // "1"
    let max = pris.split("Pris: ")[1].split("-")[1] / 1 // "120"
    InputAttribute = "prisinklmoms"

    searchFunction.reset();
    searchFunction.criteriaIntervalls(InputAttribute, min, max)
    console.log(myApp.displayedProducts.length + "   FIRST FILTER: InputAttribut: ", InputAttribute)
    searchFunction.fixTextAndThenSearchFreeText(searchText)
    console.log(myApp.displayedProducts.length + "   SECOND FILTER: freetext: ", searchText)

    callback();
  });


  //Cucumber söker "Vete öl" (arg1) och prisfilter: "Pris: 1 - 120" (arg 2)
  this.Then(/^products matching "([^"]*)" and pricerange: "([^"]*)" will show up$/, async function(arg1, arg2, callback) {

    searchText = arg1
    pris = arg2
    let min = pris.split("Pris: ")[1].split("-")[0] // "1"
    let max = pris.split("Pris: ")[1].split("-")[1] // "120"
    for (let i = 0; i < myApp.displayedProducts.length; i++) {
      assert(myApp.displayedProducts[i].prisinklmoms >= min, "Prisinklmoms är tyvärr mer än " + min)
      assert(myApp.displayedProducts[i].prisinklmoms <= max, "Prisinklmoms är tyvärr mer än " + max)
    }

    let searchTextSplitted = searchText.toLowerCase().split(" ");
    for (let i = 0; i < myApp.displayedProducts.length; i++) {
      let FOUNDIT = false
      for (let attribute in myApp.displayedProducts[i]) {
        let valueOFAttribute = myApp.displayedProducts[i][attribute];
        let valueOFAttributeFix = valueOFAttribute.toString().toLowerCase();
        let findRegex = new RegExp(searchTextSplitted.join('|'));
        if (findRegex.test(valueOFAttributeFix)) {
          FOUNDIT = true
        }
      }

      assert(FOUNDIT == true)
    }

    callback();
  });


  //Cucumber söker efter "searchText" och olika ursprunglandnamn
  this.When(/^a search is executed with the text: "([^"]*)" and filter: "([^"]*)"$/, async function(arg1, arg2, callback) {
    searchText = arg1;
    InputValue = arg2;
    InputAttribute = "ursprunglandnamn"
    //if InputAttribute == Övriga förpackningar || Flaskor mer än 0.6 L || Flaskor mindre än 0.6 L


    searchFunction.reset();

    searchFunction.critieriaSearch(InputAttribute, InputValue);
    console.log(myApp.displayedProducts.length + "  FIRST FILTER: InputAttribut: ", InputAttribute + "InputValue: " + InputValue)
    searchFunction.fixTextAndThenSearchFreeText(searchText)
    console.log(myApp.displayedProducts.length + "   SECOND FILTER: freetext: ", searchText)
    callback();
  });


  //Cucumber söker Text (arg 1) och ursprunglandnamn (arg2)
  this.Then(/^products matching the "([^"]*)" and "([^"]*)" will show up$/, async function(arg1, arg2, callback) {
    searchText = arg1;
    inputAttribute = arg2;

    if (inputAttribute == "Övriga länder") {
      let countryNames = myApp.CountrysWithLessThan201Products.map(function(objektet) {
        return objektet.Country;
>>>>>>> Stashed changes
      });
      let ovrigaRegEx = new RegExp(countryNames.join('|'));
      //console.log(ovrigaRegEx)

      for (let i = 0; i < myApp.displayedProducts.length; i++) {
        assert(ovrigaRegEx.test(myApp.displayedProducts[i].ursprunglandnamn), "the " + ovrigaRegEx + "didnt was not included in all displayedProducts")
      }

<<<<<<< Updated upstream
//Cucumber söker efter "searchText" och olika ursprunglandnamn
  	this.When(/^a search is executed with the text: "([^"]*)" and filter: "([^"]*)"$/, function (arg1, arg2, callback) {
		searchText = arg1;
		InputValue = arg2;
		InputAttribute = "ursprunglandnamn"

		searchFunction.reset();

		searchFunction.critieriaSearch(InputAttribute, InputValue);
console.log(myApp.displayedProducts.length + "  FIRST FILTER: InputAttribut: ", InputAttribute + "InputValue: " + InputValue)		
		searchFunction.fixTextAndThenSearchFreeText(searchText)
console.log(myApp.displayedProducts.length + "   SECOND FILTER: freetext: ", searchText)
		callback();
	});


//Cucumber söker Text (arg 1) och ursprunglandnamn (arg2)
	this.Then(/^products matching the "([^"]*)" and "([^"]*)" will show up$/, function (arg1, arg2, callback) {
		searchText = arg1;
		inputAttribute = arg2;

		if (inputAttribute == "Övriga länder") {
				let countryNames = myApp.CountrysWithLessThan201Products.map(function(objektet) {
					return objektet.Country;
				});
				let ovrigaRegEx = new RegExp(countryNames.join('|'));
//console.log(ovrigaRegEx)
			
			for(let i = 0; i < myApp.displayedProducts.length; i++) {
			assert (ovrigaRegEx.test(myApp.displayedProducts[i].ursprunglandnamn), "the " + ovrigaRegEx + "didnt was not included in all displayedProducts")
			}

		} else if (inputAttribute == "Övriga förpackningar") {

			for(let i = 0; i < myApp.displayedProducts.length; i++) {
			assert (myApp.forpackningOvriga.includes(myApp.displayedProducts[i].forpackning) )
			}
			
		} else if (inputAttribute == "Flaskor mer än 0.6 L") {

			for(let i = 0; i < myApp.displayedProducts.length; i++) {
			assert (myApp.forpackningBiggerThen500ml.includes(myApp.displayedProducts[i].forpackning) )
			}

		} else if (inputAttribute == "Flaskor mindre än 0.6 L") {

			for(let i = 0; i < myApp.displayedProducts.length; i++) {
			assert (myApp.forpackningLesserOrEqual500ml.includes(myApp.displayedProducts[i].forpackning) )
			}

		} else	{ 
					for(let i = 0; i < myApp.displayedProducts.length; i++) {
							assert(myApp.displayedProducts[i].ursprunglandnamn == inputAttribute, "the ursprunglandnamn didn't match all products that is Displayed")
					}
				}

			let searchTextSplitted = searchText.toLowerCase().split(" ");
				for (let i = 0; i < myApp.displayedProducts.length; i++) {
				let FOUNDIT = false	
					for (let attribute in myApp.displayedProducts[i]) {						
							let valueOFAttribute = myApp.displayedProducts[i][attribute];
							let valueOFAttributeFix = valueOFAttribute.toString().toLowerCase();
							let findRegex = new RegExp(searchTextSplitted.join('|'));
							if (findRegex.test(valueOFAttributeFix)) {
								FOUNDIT = true
							}
					}

					assert (FOUNDIT == true)
				}

			callback();
    });



//SCENARIO 4
		this.When(/^a search is executed with the text: "([^"]*)"$/, function (arg1, callback) {
			searchText = arg1

				searchFunction.reset();
     			searchFunction.fixTextAndThenSearchFreeText(searchText)
console.log(myApp.displayedProducts.length)
         callback();
       });

		 this.Then(/^products matching "([^"]*)" will show up$/, function (arg1, callback) {
				searchText = arg1

		 		let searchTextSplitted = searchText.toLowerCase().split(" ");
				for (let i = 0; i < myApp.displayedProducts.length; i++) {
				let FOUNDIT = false	
					for (let attribute in myApp.displayedProducts[i]) {						
							let valueOFAttribute = myApp.displayedProducts[i][attribute];
							let valueOFAttributeFix = valueOFAttribute.toString().toLowerCase();
							let findRegex = new RegExp(searchTextSplitted.join('|'));
							if (findRegex.test(valueOFAttributeFix)) {
								FOUNDIT = true
							}
					}

					assert (FOUNDIT == true)
				}

      			
         callback();
       });


      
}
	
=======
    } else if (inputAttribute == "Övriga förpackningar") {

      for (let i = 0; i < myApp.displayedProducts.length; i++) {
        assert(myApp.forpackningOvriga.includes(myApp.displayedProducts[i].forpackning))
      }

    } else if (inputAttribute == "Flaskor mer än 0.6 L") {

      for (let i = 0; i < myApp.displayedProducts.length; i++) {
        assert(myApp.forpackningBiggerThen500ml.includes(myApp.displayedProducts[i].forpackning))
      }

    } else if (inputAttribute == "Flaskor mindre än 0.6 L") {

      for (let i = 0; i < myApp.displayedProducts.length; i++) {
        assert(myApp.forpackningLesserOrEqual500ml.includes(myApp.displayedProducts[i].forpackning))
      }

    } else {
      for (let i = 0; i < myApp.displayedProducts.length; i++) {
        assert(myApp.displayedProducts[i].ursprunglandnamn == inputAttribute, "the ursprunglandnamn didn't match all products that is Displayed")
      }
    }

    let searchTextSplitted = searchText.toLowerCase().split(" ");
    for (let i = 0; i < myApp.displayedProducts.length; i++) {
      let FOUNDIT = false
      for (let attribute in myApp.displayedProducts[i]) {
        let valueOFAttribute = myApp.displayedProducts[i][attribute];
        let valueOFAttributeFix = valueOFAttribute.toString().toLowerCase();
        let findRegex = new RegExp(searchTextSplitted.join('|'));
        if (findRegex.test(valueOFAttributeFix)) {
          FOUNDIT = true
        }
      }

      assert(FOUNDIT == true)
    }

    callback();
  });



  //SCENARIO 4
  this.When(/^a search is executed with the text: "([^"]*)"$/, async function(arg1, callback) {
    searchText = arg1

    searchFunction.reset();
    searchFunction.fixTextAndThenSearchFreeText(searchText)
    console.log(myApp.displayedProducts.length)
    callback();
  });

  this.Then(/^products matching "([^"]*)" will show up$/, async function(arg1, callback) {
    searchText = arg1

    let searchTextSplitted = searchText.toLowerCase().split(" ");
    for (let i = 0; i < myApp.displayedProducts.length; i++) {
      let FOUNDIT = false
      for (let attribute in myApp.displayedProducts[i]) {
        let valueOFAttribute = myApp.displayedProducts[i][attribute];
        let valueOFAttributeFix = valueOFAttribute.toString().toLowerCase();
        let findRegex = new RegExp(searchTextSplitted.join('|'));
        if (findRegex.test(valueOFAttributeFix)) {
          FOUNDIT = true
        }
      }

      assert(FOUNDIT == true)
    }


    callback();
  });



}
>>>>>>> Stashed changes
