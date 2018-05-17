var myApp = require('./app.js');

class Search {

		constructor (searchText, InputAttribute, InputValue, min, max) {
			this.searchText = searchText;
			this.InputAttribute = InputAttribute;
			this.InputValue = InputValue;
			this.min = min;
			this.max = max;
		}

		reset(){
            myApp.displayedProducts = myApp.products.slice();
		}

		fixTextAndThenSearchFreeText(searchText) {

			let searchTextSplitted = searchText.toLowerCase().split(" ");
			//This function tar bort de objekt som inte matchar searchText//
			for (let i = 0; i < myApp.displayedProducts.length; i++) {	
				let foundattribute = false
				//function aint complete. needs a workaround so all words checks
				for (let attribute in myApp.displayedProducts[i]) {
					if (["ursprunglandnamn", "namn", "namn2", "varugrupp"].includes(attribute)) {						
						let valueOFAttribute = myApp.displayedProducts[i][attribute];
						let valueOFAttributeFix = valueOFAttribute.toString().toLowerCase();
						let findRegex = new RegExp(searchTextSplitted.join('|'));				//"vitt", "vin" becomes, vitt|vin. then.test on a RegExp looking for vitt or vin.
						if (findRegex.test(valueOFAttributeFix)) {								//(vitt and vin) -->findRegEx.test("Jag gillar vitt dasdasd") = true
							foundattribute = true
						}
					}
				}

				if (foundattribute == false) {
					myApp.displayedProducts.splice(i, 1);
					i = i - 1;

				}
			}
		}

		//Function for filters with ONE criteria// Needs to do this for every criteria.
		critieriaSearch(InputAttribute, InputValue) {
			if (InputValue == "Övriga") {
				let countryNames = myApp.CountrysWithLessThan201Products.map(function(objektet) {
					return objektet.Country;
				});

				myApp.displayedProducts = myApp.displayedProducts.filter(function(product){
					return countryNames.includes(product.ursprunglandnamn);
				});
			} else {
				myApp.displayedProducts = myApp.displayedProducts.filter(function(product){
					return product[InputAttribute] === InputValue;													//if true then return (product)
				});
			}
		}			

		//Needs to create a function that handles intervalls

		criteriaIntervalls(InputAttribute, min, max) {
			for (let i = 0; i < myApp.displayedProducts.length; i++) {
				let realValue = myApp.displayedProducts[i][InputAttribute]
				if (realValue < min || realValue > max)  {
					myApp.displayedProducts.splice(i, 1);
					i = i - 1;
				}
			}

		}


}

module.exports = Search;





