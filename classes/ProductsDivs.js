var shoppingcart = require('./shopping-cart.js');

class ProductsDivs {

		constructor() {
		this.createDisplayedproducts();
		//this.clickOnPlus();
		//this.clickOnMinus();
		//this.clickOnKop();
		}

		createDisplayedproducts () {
		//$('.gridDisplayedProducts').empty()
		let id = 0
		let stoppedAt = $('.productDisplayed').length;
		for(let i = $('.productDisplayed').length; i < myApp.displayedProducts.length; i++) { //myApp.displayedProducts

			let eachobjekt = myApp.displayedProducts[i] //myApp.displayedProducts[i]
			id = id + 1;
			let objektNameToDisplay = $('<div>')
			.addClass('productDisplayed')
			.attr("id", "produkt"+i);

		if (typeof eachobjekt.namn2 == 'object') {

			$('<div>' +"▼ " + eachobjekt.namn + '</div>')
			.addClass('produktnamn')
			.appendTo(objektNameToDisplay)
			//.attr('id', 'divnr'+i)				??
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

	


		// console.log(eachobjekt.varugrupp)
		// if (eachobjekt.varugrupp == "Öl") {
		// 	$('.produktnamn').append(
		// 		'<div class="divvarugruppsbild">' +
		// 		'<div>'+
		// 		"hej"+
		// 		'</div>'+
		// 		'<img class="varugruppsbild" src="./images/varugrupper/öl.jpg"/>'+
		// 		'</div>'
		// 		);
		// }

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

			//adding the pictures

			let divofpic = $('<div>' + '</div>' + '<div>' + '</div>')
			.addClass('divinvarugrupp')
			.attr('id', 'imgdiv'+i)
			.on('click', function() {
				$(this).parent().children(".values").toggle();
			});

			$('#produkt'+i).append(divofpic)

			if (eachobjekt.varugrupp == "Öl") {
				$('#imgdiv'+i).append('<img class="varugruppsbild" style="width:10%" style="height:10%"  src="./images/varugrupper/öl.jpg"/>')
			}

			if (eachobjekt.varugrupp == "Vitt vin") {
				$('#imgdiv'+i).append('<img class="varugruppsbild" style="width:10%" style="height:10%"  src="./images/varugrupper/vitt vin.jpg"/>')
			}

			if (eachobjekt.varugrupp == "Vitt") {
				$('#imgdiv'+i).append('<img class="varugruppsbild" style="width:10%" style="height:10%"  src="./images/varugrupper/vitt vin.jpg"/>')
			}

			if (eachobjekt.varugrupp == "Rött vin") {
				$('#imgdiv'+i).append('<img class="varugruppsbild" style="width:10%" style="height:10%"  src="./images/varugrupper/rött vin.jpg"/>')
			}

			if (eachobjekt.varugrupp == "Rött") {
				$('#imgdiv'+i).append('<img class="varugruppsbild" style="width:10%" style="height:10%"  src="./images/varugrupper/rött vin.jpg"/>')
			}

			if (eachobjekt.varugrupp == "Cider") {
				$('#imgdiv'+i).append('<img class="varugruppsbild" style="width:10%" style="height:10%"  src="./images/varugrupper/cider.jpg"/>')
			}

			if (eachobjekt.varugrupp == "Whiskey") {
				$('#imgdiv'+i).append('<img class="varugruppsbild" style="width:10%" style="height:10%"  src="./images/varugrupper/whiskey.jpg"/>')
			}


			if (eachobjekt.varugrupp == "Whisky") {
				$('#imgdiv'+i).append('<img class="varugruppsbild" style="width:10%" style="height:10%"  src="./images/varugrupper/whiskey.jpg"/>')
			}

			if (eachobjekt.varugrupp == "Mousserande vin") {
				$('#imgdiv'+i).append('<img class="varugruppsbild" style="width:10%" style="height:10%"  src="./images/varugrupper/mousserande vin.jpg"/>')
			}

			if (eachobjekt.varugrupp == "Okryddad sprit") {
				$('#imgdiv'+i).append('<img class="varugruppsbild" style="width:10%" style="height:10%"  src="./images/varugrupper/okryddad sprit.jpg"/>')
			}

			
			if ( $('#imgdiv'+i+' img').length == 0) {
				$('#imgdiv'+i).append('<img class="varugruppsbild" style="width:10%" style="height:10%"  src="./images/varugrupper/product-placeholder.png"/>')
			}
	





			//

	


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

		if (!localStorage.users) {
			alert("Logga in för att kunna addera produkter till din varukorg")
			return;
		}


		if (localStorage.users) {
			myApp.users[0].shoppingCart.add(myApp.displayedProducts[value], antal)
			localStorage.users = JSON.stringify(myApp.users[0])
			let data = window.JSON.parse(localStorage.users)
			myApp.productsDivs.readJsonData(data)
			console.log(data)
		} 

		console.log(myApp.displayedProducts[value].namn);
		console.log(myApp.displayedProducts[value].namn2);
		console.log(antal);
	
		if (typeof myApp.displayedProducts[value].namn2 == 'object') {
		alert("Succesfully added: " + antal + " of " + myApp.displayedProducts[value].namn + " into your cart.")
		} else {
		alert("Succesfully added: " + antal + " of " + myApp.displayedProducts[value].namn + " - " + myApp.displayedProducts[value].namn2 + " into your cart.")
		}
		$('#antal'+value).val(0)
		


	}

	async readJsonData(data){

			let thisAccountNr = data.accountnumber
			console.log(thisAccountNr)

			//data enbart objektet som ska sparas.
		//	console.log(thisAccountNr)
			let allUsers = await JSON._load('../../json/usersaccounts.json')
			
			for (let i = 0; i < allUsers.length; i++) {
					if (allUsers[i].accountnumber == thisAccountNr) {
						console.log("MATCH")
						allUsers.splice(i, 1);
						allUsers.push(data)
					}
			}

		//	console.log(allUsers)


			JSON._save('../../json/usersaccounts.json', allUsers).then(function(){
 			 console.log('Saved!');
			});
    }


	
 }

module.exports = ProductsDivs;