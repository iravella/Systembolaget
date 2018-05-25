var myApp = require('./app.js');

class Search {

		constructor (searchText, inputAttribute, inputValue, min, max) {
			this.searchText = searchText;
			this.inputAttribute = inputAttribute;
			this.inputValue = inputValue;
			this.min = min;
			this.max = max;
		}

		reset(){
            myApp.displayedProducts = myApp.products.slice();
		}

		searchFromCriteras () {
		//making a search from myApp.searchcriteria
		let ValuesForCriteriaIntervalls = ["volymiml", "prisinklmoms", "alkoholhalt"]
		let ValuesForTextFilter = ["freetext"]
		let ValuesForCritieriaSearch = ["ekologisk", "ursprunglandnamn", "forpackning", "varugrupp"]

			for (let i = 0; i < myApp.searchcriteria.length; i++) {

				if (ValuesForCriteriaIntervalls.includes(myApp.searchcriteria[i].attribute)) {
					var inputAttribute = myApp.searchcriteria[i].attribute
					var min = myApp.searchcriteria[i].min
					var max = myApp.searchcriteria[i].max
					this.criteriaIntervalls(inputAttribute, min, max)
					continue;
				}

				if (ValuesForTextFilter.includes(myApp.searchcriteria[i].attribute)) {
					var searchText = myApp.searchcriteria[i].text
					this.fixTextAndThenSearchFreeText(searchText)
					continue;
				}

				if (ValuesForCritieriaSearch.includes(myApp.searchcriteria[i].attribute)) {
					var inputAttribute = myApp.searchcriteria[i].attribute
					var inputValue = myApp.searchcriteria[i].inputValue
					this.critieriaSearch(inputAttribute, inputValue)
					continue;
				}
			}

			$('.productDisplayed').remove();							// } Both these works as a reset
			myApp.productsDivs.createDisplayedproducts();				// } everytime you make a search from criteria
			if ( $('.productDisplayed').length == 0) {
				$('.visafler').text("Sökningen hittade inga produkter")
			}

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
		//inputAttribute = ursprungsnamnland, varugrupp, namn, ekologisk etc...
		//inputvalue = Renat, Carlsberg, 1, Tyskland etc..
		critieriaSearch(inputAttribute, inputValue) {
			if (inputValue == "Övriga länder") {
				let countryNames = myApp.CountrysWithLessThan201Products.map(function(objektet) {
					return objektet.Country;
				});

				myApp.displayedProducts = myApp.displayedProducts.filter(function(product){
					return countryNames.includes(product.ursprunglandnamn);
				});

			} else if (inputValue == "Övriga förpackningar") {
				
						myApp.displayedProducts = myApp.displayedProducts.filter(function(product){
						return myApp.forpackningOvriga.includes(product.forpackning)										//if true then return (product)
						});
					
			} else if (inputValue == "Flaskor < 0.6 L") {
		
						myApp.displayedProducts = myApp.displayedProducts.filter(function(product){
						return myApp.forpackningBiggerThen500ml.includes(product.forpackning)										//if true then return (product)
						});

			} else if (inputValue == "Flaskor > 0.6 L") {

						myApp.displayedProducts = myApp.displayedProducts.filter(function(product){
						return myApp.forpackningLesserOrEqual500ml.includes(product.forpackning)										//if true then return (product)
						});
			} else {

			 			myApp.displayedProducts = myApp.displayedProducts.filter(function(product){
			 			return product[inputAttribute] === inputValue;													//if true then return (product)
			 			});
			}
		}			

		//Needs to create a function that handles intervalls

		criteriaIntervalls(inputAttribute, min, max) {
			for (let i = 0; i < myApp.displayedProducts.length; i++) {
				let realValue = myApp.displayedProducts[i][inputAttribute]
				if (realValue < min || realValue > max)  {
					myApp.displayedProducts.splice(i, 1);
					i = i - 1;
				}
			}

		}


}

module.exports = Search;





