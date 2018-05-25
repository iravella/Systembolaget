var shoppingcart = require('./shopping-cart.js');

class ProductsDivs {

		constructor() {
		this.createDisplayedproducts();
		//this.clickOnPlus();
		//this.clickOnMinus();
		//this.clickOnKop();
		}

		createDisplayedproducts () {
		//$('.gridDisplayedProducts').empty();
		let id = 0
		let stoppedAt = $('.productDisplayed').length;
		for(let i = $('.productDisplayed').length; i < myApp.displayedProducts.length; i++) { //myApp.displayedProducts

			let eachobjekt = myApp.displayedProducts[i] //myApp.displayedProducts[i]
			id = id + 1;
			let objektNameToDisplay = $('<div>')
			.addClass('productDisplayed')
			.attr("divnr", id);

		if (typeof eachobjekt.namn2 == 'object') {
			$('<div>' +"▼ " + eachobjekt.namn + '</div>')
			.addClass('produktnamn')
			.appendTo(objektNameToDisplay)
			.on("click",function() {
				let thisid = $(this).parent().attr("divnr");
					$(this).parent().children(".values").toggle();
			}); 

		} else {

			$('<div>' +"▼   " + eachobjekt.namn + " - " + eachobjekt.namn2 + '</div>')
			.addClass('produktnamn')
			.appendTo(objektNameToDisplay)
			.on("click",function() {
				let thisid = $(this).parent().attr("divnr");
					$(this).parent().children(".values").toggle();
			});

		}

			let plusAntalMinus = $('<div>' + '</div>')
			.addClass('plusAntalMinus')
		


			let minus = $('<div>' + "-" + '</div>')
			.addClass('plusNminus')
			.attr('id', "minus"+i)
			.on('click', function () {
				let value = $(this).attr('id')
				let lastindexvalue = value.replace(/\D/g,'');
				myApp.productsDivs.clickOnMinus(lastindexvalue);
			});
			plusAntalMinus.append(minus)

		
			let divObjektAntal = $('<div>' + '</div>')

			let objektAntal = $('<input>' + '</input>')
			.addClass('antal')
			.attr('id', "antal"+i)
			.attr('type', 'text').attr('placeholder', "0")
			.attr('size','6')
			.attr('maxlength', '2');

			divObjektAntal.append(objektAntal)
			plusAntalMinus.append(divObjektAntal)

			let plus = $('<div>' + "+" + '</div>')
			.addClass('plusNminus')
			.attr('id',"plus"+i)
			.on('click', function () {
				let value = $(this).attr('id')
				let lastindexvalue = value.replace(/\D/g,'');
				myApp.productsDivs.clickOnPlus(lastindexvalue);
			});
			plusAntalMinus.append(plus)

			let objektKöp = $('<div>' + "Köp" + '</div>')
			.addClass('köp')
			.attr('id', "köp"+i)
			.on('click', function() {
				let value = $(this).attr('id')
				let lastindexvalue = value.replace(/\D/g,'');
				myApp.productsDivs.clickOnKop(lastindexvalue);
			});
			let combinedDiv = $('<div>' + '</div>')
			.attr('id', 'prisAntalKop')
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
				$('<div>' + eachproduct + '</div>').addClass('values').css('background-color', 'white')
				let b = 
				$('<div>' + valueofattr + '</div>').addClass('values').css('background-color', 'white')

				objektNameToDisplay.append(a);
				objektNameToDisplay.append(b);
				if (eachproduct == "prisinklmoms") {
				let objektPris = $('<div>' + eachobjekt[eachproduct] + " kr" + '</div>').addClass('priset');
				combinedDiv.append(objektPris);
				}


			combinedDiv.append(plusAntalMinus);
			combinedDiv.append(objektKöp);
			
			}
			
			if ($('.productDisplayed').length == stoppedAt + 15) {
				$('.visafler').remove();
				let visafler = $('<div>' + "Visa fler" + '</div>')
				.addClass('visafler')
				.on("click",function(e) {
						if(e.target !== e.currentTarget) return;
						$('.visafler').remove();
						myApp.productsDivs.createDisplayedproducts()
				});

				$('.gridDisplayedProducts').append(visafler)
				break;
			}

			if ($('.productDisplayed').length < 16) {
			$('.visafler').remove();
			}
		}

	//	let numbersofwares = $('<div>' + myApp.displayedProducts.length + '</div>')
	//	$('.lagstOrHogst').append(numbersofwares)
	

	}


	clickOnPlus(value) {

		let antal = $('#antal'+value).val()
		antal = antal/1 + 1
		 if (antal/1 > 99) {
		 	antal = 99
		 }
		$('#antal'+value).val(antal)
		
	}


	clickOnMinus(value) {

		let antal = $('#antal'+value).val()
		antal = antal/1 - 1
		if (antal/1 < 0) {
			antal = 0
		}
		$('#antal'+value).val(antal)
	}


	clickOnKop(value) {

		let antal = $('#antal'+value).val()
		antal = antal/1

		if (antal == 0) {
			return;
		}

		if (antal > 99) {
			alert("The maximum of wares is 99")
			$('#antal'+value).val(99)
			return;
		}

		if (isNaN(antal)) {
			alert("You sure you trying to add only numbers?")
			return;
		}

		if (antal * -1 > 0) {
			alert("You can only add a positive amount.")
			$('#antal'+value).val(0)
			return;
		}

		
		if (myApp.displayedProducts[value].iLager < antal) {
			alert("Cannot add more of a products than in stock! The maximum numbers is wares we got is stock is: " +myApp.displayedProducts[value].iLager)
			$('#antal'+value).val(myApp.displayedProducts[value].iLager)
			return;
		}

		myApp.shoppingCart.add(myApp.displayedProducts[value], antal)

		if (typeof myApp.displayedProducts[value].namn2 == 'object') {
		alert("Succesfully added: " + antal + " of " + myApp.displayedProducts[value].namn + " into your cart.")
		} else {
		alert("Succesfully added: " + antal + " of " + myApp.displayedProducts[value].namn + " - " + myApp.displayedProducts[value].namn2 + " into your cart.")
		}
		console.log(myApp.shoppingCart.thingsToBuy)
		$('#antal'+value).val(0)
		


	}
	
 }

module.exports = ProductsDivs;