class shoppingCartDivs {

	constructor() {
		this.constructorContinued();

	}

	async constructorContinued() {

		 if (!localStorage.users) {
		 	$('.BigGrid').append('<div>' + '</div>' + '<h1>'+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Din varukorg är tom!"+'</h1')
		 	console.log("fail safe1")
		 	return;}


		 if (JSON.parse(localStorage.users).shoppingCart.thingsToBuy[0] == undefined) {
		 	$('.BigGrid').append('<div>' + '</div>' + '<h1>'+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Din varukorg är tom!"+'</h1')
		 	console.log("Fail safe2")
		 	return;
		 }	
		this.products = JSON.parse(localStorage.users).shoppingCart.thingsToBuy
		let Namn1plus2;
		let DivNamn;
		let DivAttribute;
		let DivValue;
		let DivFiller;
		let gridOfProducts;

			//JSON.parse(localStorage.users).shoppingCart.thingsToBuy[i].quantity


		for (let i = 0; i < this.products.length; i++ ) {
			let DoThisOnce = false;
			for (let attribute in this.products[i].product) {


				if (typeof this.products[i].product.namn2 == 'object') {
					Namn1plus2 = "▼ " + this.products[i].product.namn
				} else {
					Namn1plus2 = "▼ " + this.products[i].product.namn + " - " + this.products[i].product.namn2
				}
				
				if (typeof this.products[i].product[attribute] == 'object') {continue;}
				if (attribute == "namn" || attribute == "namn2") {continue;}
				
				if (DoThisOnce == false) {

					DivNamn = $('<div>' + Namn1plus2 + "&nbsp&nbsp" +this.products[i].product.prisinklmoms + " kr" + '</div>')
					.addClass("DivNamn")
					.attr("id", "namn"+i)
					.on('click', function (e) {
						if(e.target !== e.currentTarget) return;
						$('.gridDisplayedProducts').children('.produkt'+i).toggle(50);
					});

					DivFiller = $('<div>'+'</div>')
					//.addClass("produkt"+i)

					gridOfProducts = $('<div>' + '</div>')
					.addClass('gridDisplayedProducts')
					.on('click', function () {
						$('.gridDisplayedProducts').children('.produkt'+i).toggle(50);
					});
					
					$('.BigGrid').append(DivNamn)
					$('#namn'+i).append(DivFiller)
					$('#namn'+i).append(gridOfProducts)
					
								//diven med plusAntalMinus
								let plusAntalMinus = $('<div>' + '</div>')
								.addClass('plusAntalMinus')


								//Minus
								let minus = $('<div>' + "-" + '</div>')
								.addClass('plusNminus')
								.attr('id', "minus"+i)
								.on('click', function () {
									let value = $(this).attr('id')
									let lastindexvalue = value.replace(/\D/g,'');
									ShopCart.clickOnMinus(lastindexvalue);
								});
								plusAntalMinus.append(minus)

								// if (this.products[i].quantity == 0) {
								// 	this.products[i].quantity = 1;
								// }

								// $('#antal'+i).val(JSON.parse(localStorage.users).shoppingCart.thingsToBuy[i].quantity)
								
								//Antal
								let divObjektAntal = $('<div>' + '</div>')
								let objektAntal = $('<input>' + '</input>')
								.addClass('antal')
								.attr('id', "antal"+i)
								.attr('type', 'text').attr('placeholder', "0")
								.attr('size','6')
								.attr('maxlength', '2')
								.val(await JSON.parse(localStorage.users).shoppingCart.thingsToBuy[i].quantity)
								.on('change', function () {

											let antal = $(this).val() / 1
											let value = $(this).attr('id')
											let lastindexvalue = value.replace(/\D/g,'');
											console.log(antal)
										//	console.log(ShopCart.products)
										//	console.log(this.products[lastindexvalue])
											ShopCart.products[lastindexvalue].quantity = antal
											let userData = JSON.parse(localStorage.users)
											userData.shoppingCart.thingsToBuy = ShopCart.products
											localStorage.users = JSON.stringify(userData)			//sparar tillbaka userdatan

											$('#pris'+lastindexvalue).text( ShopCart.products[lastindexvalue].product.prisinklmoms * antal) 
											ShopCart.readJsonData(userData)
											ShopCart.TotalSumman = ShopCart.sum()
											$('#totalen').text("Summa:    " + ShopCart.TotalSumman + " kr")

								});
							
			
								divObjektAntal.append(objektAntal)
								plusAntalMinus.append(divObjektAntal)

								//Plus
								let plus = $('<div>' + "+" + '</div>')
								.addClass('plusNminus')
								.attr('id',"plus"+i)
								.on('click', function () {
									let value = $(this).attr('id')
									let lastindexvalue = value.replace(/\D/g,'');
									ShopCart.clickOnPlus(lastindexvalue);
								});
								plusAntalMinus.append(plus)
								//SRTTING EM ALL ONTO DIVFILLER
								DivFiller.append(plusAntalMinus);

								let pris = $('<div>' + this.products[i].product.prisinklmoms * $('#antal'+i).val() +'</div>')
								.attr('id', 'pris'+i)
								.addClass('Pris')
								plusAntalMinus.append(pris);

								//$('.Pris'+i).val(ShopCart.products[i].product.prisinklmoms * ( $('#antal'+i).val() / 1 ) )
								//DivFiller.append(SUM)

								DoThisOnce = true;
			if (this.products[i].product.varugrupp == "Öl") {
				$('#namn'+i).append('<img class="varugruppsbild" style="width:50%" style="height:50%"  src="./images/varugrupper/öl.jpg"/>')
				continue;
			}

			if (this.products[i].product.varugrupp == "Vitt vin") {
				$('#namn'+i).append('<img class="varugruppsbild" style="width:50%" style="height:50%"  src="./images/varugrupper/vitt vin.jpg"/>')
				continue;
			}

			if (this.products[i].product.varugrupp  == "Vitt") {
				$('#namn'+i).append('<img class="varugruppsbild" style="width:50%" style="height:50%"  src="./images/varugrupper/vitt vin.jpg"/>')
				continue;
			}

			if (this.products[i].product.varugrupp  == "Rött vin") {
				$('#namn'+i).append('<img class="varugruppsbild" style="width:50%" style="height:50%"  src="./images/varugrupper/rött vin.jpg"/>')
				continue;
			}

			if (this.products[i].product.varugrupp  == "Rött") {
				$('#namn'+i).append('<img class="varugruppsbild" style="width:50%" style="height:50%"  src="./images/varugrupper/rött vin.jpg"/>')
				continue;
			}

			if (this.products[i].product.varugrupp  == "Cider") {
				$('#namn'+i).append('<img class="varugruppsbild" style="width:50%" style="height:50%"  src="./images/varugrupper/cider.jpg"/>')
				continue;
			}

			if (this.products[i].product.varugrupp  == "Whiskey") {
				$('#namn'+i).append('<img class="varugruppsbild" style="width:50%" style="height:50%"  src="./images/varugrupper/whiskey.jpg"/>')
				continue;
			}


			if (this.products[i].product.varugrupp == "Whisky") {
				$('#namn'+i).append('<img class="varugruppsbild" style="width:50%" style="height:50%"  src="./images/varugrupper/whiskey.jpg"/>')
				continue;
			}

			if (this.products[i].product.varugrupp  == "Mousserande vin") {
				$('#namn'+i).append('<img class="varugruppsbild" style="width:50%" style="height:50%"  src="./images/varugrupper/mousserande vin.jpg"/>')
				continue;
			}

			if (this.products[i].product.varugrupp == "Okryddad sprit") {
				$('#namn'+i).append('<img class="varugruppsbild" style="width:50%" style="height:50%"  src="./images/varugrupper/okryddad sprit.jpg"/>')
				continue;
			}

		 	$('#namn'+i).append('<img class="varugruppsbild" style="width:50%" style="height:50%"  src="./images/varugrupper/product-placeholder.png"/>')
	

					
					
				}

			

				DivAttribute = $('<div>' + attribute + '</div>')
				.addClass("produkt"+i)
				.css('display', "none")

				DivValue = $('<div>' + this.products[i].product[attribute] + '</div>')
				.addClass("produkt"+i)
				.css('display', "none")

				
				gridOfProducts.append(DivAttribute)
				gridOfProducts.append(DivValue)


				
				}	//For loop2
			
			
		}	//For loop1

		if (ShopCart == undefined) {
			return;
		}


		ShopCart.TotalSumman = ShopCart.sum()
		let filler = $('<div>' +"&nbsp"+'</div>')
		.addClass('Totalsumma');
		let filler2 =$('<div>'+'</div>')
		let totalsumma = $('<div>' + "Summa: " + ShopCart.TotalSumman + " kr" + '</div>')
		.addClass('Totalsumma')
		.attr('id', 'totalen');
		filler2.append(totalsumma)
		filler.append(filler2)
		$('.BigGrid').append(filler)

		$('.BigGrid').prepend('<h1>' + "DIN VARUKORG" + '</h1>');

	}

	clickOnPlus(value) {

		let antal = $('#antal'+value).val()
		antal = antal/1 + 1
		 if (antal/1 > 99) {
		 	antal = 99
		 }
		$('#antal'+value).val(antal)
		$('#pris'+value).text( ShopCart.products[value].product.prisinklmoms * antal) 


		ShopCart.products[value].quantity = antal
		let userData = JSON.parse(localStorage.users)
		userData.shoppingCart.thingsToBuy = ShopCart.products
		localStorage.users = JSON.stringify(userData)			//sparar tillbaka userdatan

		ShopCart.readJsonData(userData)

		ShopCart.TotalSumman = ShopCart.sum()
		$('#totalen').text("Summa: " + ShopCart.TotalSumman + " kr")
		
	}


	clickOnMinus(value) {

		let antal = $('#antal'+value).val()
		antal = antal/1 - 1
		if (antal/1 < 0) {
			antal = 0							
		}
		$('#antal'+value).val(antal)
		$('#pris'+value).text( ShopCart.products[value].product.prisinklmoms * antal) 

		ShopCart.products[value].quantity = antal
		let userData = JSON.parse(localStorage.users)
		userData.shoppingCart.thingsToBuy = ShopCart.products
		localStorage.users = JSON.stringify(userData)			//sparar tillbaka userdatan

		ShopCart.readJsonData(userData)
		
		ShopCart.TotalSumman = ShopCart.sum()
		$('#totalen').text("Summa: " + ShopCart.TotalSumman + " kr")	
	}

	sum(){
  
    let priceArray = this.products.map(function(item) {
      return item.product.prisinklmoms * item.quantity;
    });
    
    let Sum = priceArray.reduce(function(accumulator, currentValue){
      return accumulator + currentValue;
    }, 0);
    return Sum;
    
  	}

  	SettingTotalen() {
  		ShopCart.TotalSumman = ShopCart.sum()
		let filler = $('<div>' +"&nbsp"+'</div>')
		.addClass('Totalsumma');
		let totalsumma = $('<div>' + "Summa: " + ShopCart.TotalSumman + " kr" + '</div>')
		.addClass('Totalsumma')
		.attr('id', 'totalen');
	}

  	async readJsonData(userData){

			let thisAccountNr = userData.accountnumber

		 	let allUsers = await JSON._load('../../json/usersaccounts.json')
			
			// console.log(userData.shoppingCart.thingsToBuy.length)
			for (let i = 0; i < userData.shoppingCart.thingsToBuy.length; i++) {
				if(userData.shoppingCart.thingsToBuy[i].quantity == 0) {
				//	ShopCart.getConfirmation(i);

				// var retVal = confirm("Do you want to continue ?");
    //         	   if( retVal == true ){
    //             	  console.log("User wants to continue!");
    //          	    }
    //           		 else {
    //            		 console.log ("User does not want to continue!");
       					
         		
    //      				$('.produkt'+i).remove();
				// 	$('#namn'+i).remove();
    //            location.reload();

    //             return;
    //            }

    //            console.log("I PASSED TROUGH CONFIRMATION __________________")
					userData.shoppingCart.thingsToBuy.splice(i, 1)
					localStorage.users = JSON.stringify(userData)

					$('.produkt'+i).remove();
					$('#namn'+i).remove();
					location.reload();

					 // if (await JSON.parse(localStorage.users).shoppingCart.thingsToBuy[0] == undefined) {
		 			// 		$('.BigGrid').append('<div>' + '</div>' + '<h1>'+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Din varukorg är tom!"+'</h1')
		 			// 	}


				}
			}

		 	if (!userData.shoppingCart.thingsToBuy) {
		 	 	userData.shoppingCart.thingsToBuy = []
		 	 	$('.BigGrid').append('<h1>'+"Din varukorg är tom!"+'</h1')
		 	 }

			for (let i = 0; i < allUsers.length; i++) {
					if (allUsers[i].accountnumber == thisAccountNr) {
						console.log("MATCH")
						//localStorage.users = JSON.stringify(allUsers[i])
						allUsers.splice(i, 1);
						allUsers.push(userData)
					}
			}

			JSON._save('../../json/usersaccounts.json', allUsers).then(function(){
 			 console.log('Saved!');
			});

    }



}

ShopCart = new shoppingCartDivs();





