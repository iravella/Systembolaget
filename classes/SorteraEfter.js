class SorteraEfter {

	constructor() {
		this.SorteraText();
		
	}

	SorteraText() {

		let SorterasEfter = $('<div>'+"Sorteras efter:"+'</div>' )
		$('.WrapSorteraEfter').append(SorterasEfter)

		let wrapperlagstOrHogst = $('<div>' + '</div>')
		.addClass('wrapperlagstOrHogst')
		$('.WrapSorteraEfter').append(wrapperlagstOrHogst)

		let lagstOrHogst = $('<div>'+"▼"+'</div>')
		.attr('id', 'lagstOrHogst')
		.on('click', function() {
			if ( $('#lagstOrHogst').text() == "▼" ) {
				$('#lagstOrHogst').text("▲")
				myApp.displayedProducts.reverse();
				$('.productDisplayed').remove();						
				myApp.productsDivs.createDisplayedproducts();

			} else {
				$('#lagstOrHogst').text("▼")
				myApp.displayedProducts.reverse();
				$('.productDisplayed').remove();						
				myApp.productsDivs.createDisplayedproducts();
			}

		});

		wrapperlagstOrHogst.append(lagstOrHogst)

		let sorteraText = $('<select>'+'</select>')
		.addClass('listOfSortera')
		.on('change', function () {
			if ( $('.listOfSortera').val() == "Namn") {
				myApp.SorteraEfter.Namn();
				$('.sorteraValj').remove();
				return;
			}

			if ( $('.listOfSortera').val() == "Pris") {
				$('.sorteraValj').remove();
				myApp.SorteraEfter.Pris();
				return;
			}

		});

		$('.WrapSorteraEfter').append(sorteraText)

		let ValjDiv = $('<option>'+"Valfri sortering"+'</option>')
		.addClass('sorteraValj')
		$('.listOfSortera').append(ValjDiv)


		let namnDiv = $('<option>'+"Namn"+'</option>')
		.addClass('sorteraNamn')
		$('.listOfSortera').append(namnDiv)

		let prisDiv = $('<option>'+"Pris"+'</option>')
		.addClass('sorteraPris')
		$('.listOfSortera').append(prisDiv)


		//WHY DOESNT THE SORT FUNCTION WORK?
		// let pelle = [ 
		// {namn: 'pelle', pris: 50},
		// {namn: 'anders', pris: 56.4},
		// {namn: 'qqqqq', pris: 100},
		// {namn: 'pelle', pris: 30},
		// ];
		


		// console.log(myApp.displayedProducts)
	}




	Namn() {

			myApp.displayedProducts.sort( function (a,b) {
				let namnA = "", namnB = "";
				if(typeof a.namn === "string"){ namnA += a.namn; }
				if(typeof a.namn2 === "string"){ namnA += " " + a.namn2; }
				if(typeof b.namn === "string"){ namnB += b.namn; }
				if(typeof b.namn2 === "string"){ namnB += " " + b.namn2; }
				return namnA.toLowerCase() >  namnB.toLowerCase() ? 1 : -1;
			});
			$('.productDisplayed').remove();						
			myApp.productsDivs.createDisplayedproducts();


		// let NamnArray = [];
		// let SortedByNamn = [];
		// let name;

		// 	for (let i = 0; i < myApp.displayedProducts.length; i++) {

		// 		if (typeof myApp.displayedProducts[i].namn2 == 'object') {
		// 			NamnArray.push(myApp.displayedProducts[i].namn)
		// 		} else {
		// 			NamnArray.push(myApp.displayedProducts[i].namn + myApp.displayedProducts[i].namn2)
		// 		}
		// 	}

		// 	NamnArray.sort();			//Sorterar namnarrayen

		// 	for (let x of NamnArray) {
		// 		for (let i = 0; i < myApp.displayedProducts.length; i++) {
		// 			if (typeof myApp.displayedProducts[i].namn2 == 'object') {
		// 				name =  myApp.displayedProducts[i].namn
		// 				} else {
		// 				name = myApp.displayedProducts[i].namn + myApp.displayedProducts[i].namn2
		// 				}

		// 				if (x == name) {
		// 				 	SortedByNamn.push(myApp.displayedProducts[i]);
		// 				 	myApp.displayedProducts.splice(i, 1);
		// 				 	i = i - 1
		// 					break;
		// 				}
		// 		}
		// 	}

		// 	myApp.displayedProducts = SortedByNamn;
		// 	SortedByNamn = [];
		// 	NamnArray = [];
		// 	$('.productDisplayed').remove();						
		// 	myApp.productsDivs.createDisplayedproducts();
	}


	Pris() {


		myApp.displayedProducts.sort( function (a,b) {return a.prisinklmoms - b.prisinklmoms}  )
		$('.productDisplayed').remove();						
		myApp.productsDivs.createDisplayedproducts();

		// let PrisArray = [];
		// let SortedByPris = [];
		// let pris;

		// 	for (let i = 0; i < myApp.displayedProducts.length; i++) {
		// 			PrisArray.push(myApp.displayedProducts[i].prisinklmoms)
		// 	}

		// 	PrisArray.sort();			//Sorterar namnarrayen

		// 	for (let x of PrisArray) {
		// 		for (let i = 0; i < myApp.displayedProducts.length; i++) {
			
		// 				pris =  myApp.displayedProducts[i].prisinklmoms
				

		// 				if (x == pris) {
		// 				 	SortedByPris.push(myApp.displayedProducts[i]);
		// 				 	myApp.displayedProducts.splice(i, 1);
		// 				 	i = i - 1
		// 					break;
		// 				}
		// 		}
		// 	}


		// 	myApp.displayedProducts = SortedByPris;
		// 	SortedByPris = [];
		// 	PrisArray = [];
		// 	$('.productDisplayed').remove();						
		// 	myApp.productsDivs.createDisplayedproducts();


	}





}

module.exports = SorteraEfter;