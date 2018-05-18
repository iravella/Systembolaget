class ProductsDivs {

		constructor() {
		this.createDisplayedproducts();
		}

		createDisplayedproducts () {
		let id = 0
		let stoppedAt = $('.productDisplayed').length;
		for(let i = $('.productDisplayed').length; i < myApp.displayedProducts.length; i++) { //myApp.displayedProducts

			let eachobjekt = myApp.displayedProducts[i] //myApp.displayedProducts[i]
			id = id + 1;
			let objektNameToDisplay = $('<div>')
			.addClass('productDisplayed')
			.attr("divnr", id);

		if (typeof eachobjekt.namn2 == 'object') {
			$('<div>' + eachobjekt.namn + " ▼" + '</div>')
			.addClass('produktnamn')
			.appendTo(objektNameToDisplay)
			.on("click",function() {
				let thisid = $(this).parent().attr("divnr");
					$(this).parent().children(".values").toggle();
			}); 

		} else {

			$('<div>' + eachobjekt.namn + " - " + eachobjekt.namn2 + " ▼" + '</div>')
			.addClass('produktnamn')
			.appendTo(objektNameToDisplay)
			.on("click",function() {
				let thisid = $(this).parent().attr("divnr");
					$(this).parent().children(".values").toggle();
			});

		}

			let objektPris = $('<div>' + "Pris" + '</div>').addClass('priset');
			let objektAntal = $('<div>' + "Antal" + '</div>').addClass('antal');
			let objektKöp = $('<div>' + "Köp" + '</div>').addClass('köp');
			let combinedDiv = $('<div>' + '</div>'); 
			combinedDiv.append(objektPris);
			combinedDiv.append(objektAntal);
			combinedDiv.append(objektKöp);
			objektNameToDisplay.append(combinedDiv);

			$('.gridDisplayedProducts').append(objektNameToDisplay);
			for (let eachproduct in eachobjekt) {
				let valueofattr = eachobjekt[eachproduct]
				if (typeof valueofattr == 'object') {
					continue;
				}
				if (eachproduct == 'namn2') {
					continue;
				}

				if (eachproduct == 'namn') {
					continue;
				}

				let a = 
				$('<div>' + eachproduct + '</div>').addClass('values').css('background-color', 'lightgrey')
				let b = 
				$('<div>' + valueofattr + '</div>').addClass('values').css('background-color', 'lightgrey')

				objektNameToDisplay.append(a);
				objektNameToDisplay.append(b);
			}
			
			if ($('.productDisplayed').length == stoppedAt + 15) {
			$('.visafler').remove();
			let visafler = $('<div>' + "Visa fler" + '</div>')
			.addClass('visafler')
			.on("click",function(e) {
			if(e.target !== e.currentTarget) return;
			DisplayProducts.createDisplayedproducts()
			});
			$('.gridDisplayedProducts').append(visafler)
			break;
			}
		}

		
	

	}
	
 }

module.exports = ProductsDivs;