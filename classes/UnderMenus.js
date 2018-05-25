var Category = require('./app.js');

class CreateUnderMenus {


	constructor() {
		this.CreateUnderMenuPris()
		this.CreateUnderMenuVolym();
		this.CreateUnderMenuVarugrupp();
		this.CreateUnderMenuLänder();
		this.CreateUnderMenuFörpackning();
		this.CreateUnderMenuAlkoholhalt();
		this.CreateUnderMenuEkologisk();
	}

		CreateUnderMenuPris() {
			let formdiv = $('<form>' + '<div>').addClass('form-group undermenupris').attr('type', 'text').attr('display', 'none')
			let minpris = $('<input>' + '<div>').attr('type', 'text').attr('placeholder', "Min pris").attr('id', 'hiddenfiltermenu0').attr('size','6').attr('maxlength', '6').addClass('minPris undermenupris').attr('display', 'none')

			let formdiv2 = $('<form>' + '<div>').addClass('form-group undermenupris').attr('type', 'text').attr('display', 'none')
			let maxpris = $('<input>').attr('type', 'text').attr('placeholder', "Max pris").attr('id', 'hiddenfiltermenu0').attr('size','6').attr('maxlength', '6').addClass('maxPris undermenupris').attr('display', 'none')
			
			let ok = $('<div>').addClass('confirmbuttoninfilters undermenupris').text("ok")
			.on("click",function(e) {
							if(e.target !== e.currentTarget) return;
							let minPris = $('.minPris').val() / 1;
							let maxPris = $('.maxPris').val() / 1;
							let hacker;

							if( maxPris == 0 && minPris == 0) {						
								$('#mainfiltermenu0').children().toggle();
								return;
							}

							if (minPris > 0 && maxPris == 0) {
								maxPris = minPris + 1
								hacker = true;
							}

							if ( maxPris < minPris ) {
							alert("Max cant be less than min");
							return;
							}

							if( minPris < 0 ) {
								alert("minimum can't be less than 0")
								return;
							}

							if (isNaN(minPris) || isNaN(maxPris)) {
								alert("You sure you used only numbers to determine the min and max values?")
								return;
							}

							if (hacker == true) {
								hacker = false
								maxPris = "∞"
							}
					
							$('#hiddenfiltermenu0').toggle('swing');
							$('#mainfiltermenu0').toggle();

							myApp.searchcriteria.push( {attribute: "prisinklmoms", min: minPris, max: maxPris } )
							myApp.search.searchFromCriteras();


								$('#hiddenfiltermenu0').html(minPris + " - " + maxPris + " kr")
								.on("click",function(e) {
									if(e.target !== e.currentTarget) return;
									$('.undermenupris').remove()								//This Works as reset 
									myApp.createUnderMenus.CreateUnderMenuPris();
									
									for (let i=0; i < myApp.searchcriteria.length; i++) {
											if (myApp.searchcriteria[i].attribute == "prisinklmoms") {
												myApp.searchcriteria.splice(i, 1)
												myApp.search.reset();
												myApp.search.searchFromCriteras();
												i = i -1
											}	
									}



								});

				
							$('.undermenupris').toggle();

			});
			
			$('#mainfiltermenu0').append(formdiv)	
			$('#mainfiltermenu0').append(minpris)
			$('#mainfiltermenu0').append(formdiv2)
			$('#mainfiltermenu0').append(maxpris)
			$('#mainfiltermenu0').append(ok)
		}
	

	

		CreateUnderMenuVolym() {
			let formdiv = $('<form>' + '<div>').addClass('form-group undermenuvolym').attr('type', 'text').attr('display', 'none')
			let minvolym = $('<input>').attr('type', 'text').attr('placeholder', "Min volym i ml").attr('id', 'hiddenfiltermenu1').attr('size','6').attr('maxlength', '6').addClass('minVolym undermenuvolym').attr('display', 'none')

			let formdiv2 = $('<form>' + '<div>').addClass('form-group undermenuvolym').attr('type', 'text').attr('display', 'none')
			let maxvolym = $('<input>').attr('type', 'text').attr('placeholder', "Max volym i ml").attr('id', 'hiddenfiltermenu1').attr('size','6').attr('maxlength', '6').addClass('maxVolym undermenuvolym').attr('display', 'none')
			
			let ok = $('<div>').addClass('confirmbuttoninfilters undermenuvolym').text("ok")
			.on("click",function(e) {
					if(e.target !== e.currentTarget) return;
					let minVol = $('.minVolym').val() / 1;
					let maxVol = $('.maxVolym').val() / 1;
					let hacker;
					if( maxVol == 0 && minVol == 0) {						
						$('#mainfiltermenu1').children().toggle();
						return;
					}

					if (minVol > 0 && maxVol == 0) {
								maxVol = minVol + 1
								hacker = true;
					}

					if( minVol > maxVol) {	
								alert("Minimum value needs to be more than maximum")					
								return;
					}

					if( minVol < 0 ) {
								alert("minimum can't be less than 0")
								return;
					}

					if (isNaN(minVol) || isNaN(maxVol)) {
						alert("You sure you used only numbers to determine the min and max values?")
						return;
					}

					if (hacker == true) {
								hacker = false
								maxVol = "∞"
					}
					


					myApp.searchcriteria.push( {attribute: "volymiml", min: minVol, max: maxVol } )
					//DO THE SEARCH FROM THE myApp.searchcriteria
					myApp.search.searchFromCriteras();

					$('#mainfiltermenu1').toggle();
					$('#mainfiltermenu1').children().toggle();
					$('#hiddenfiltermenu1').toggle();

					$('#hiddenfiltermenu1').html(minVol + " - " + maxVol + " ml")
							.on("click",function(e) {
								if(e.target !== e.currentTarget) return;
								$('.undermenuvolym').remove()								//This Works as reset 
								myApp.createUnderMenus.CreateUnderMenuVolym();	

								for (let i=0; i < myApp.searchcriteria.length; i++) {
									if (myApp.searchcriteria[i].attribute == "volymiml") {
										myApp.searchcriteria.splice(i, 1)
										myApp.search.reset();
										myApp.search.searchFromCriteras();
										i = i -1
									}	
								}
						
							});
			});


			$('#mainfiltermenu1').append(formdiv)
			$('#mainfiltermenu1').append(minvolym)
			$('#mainfiltermenu1').append(formdiv2)
			$('#mainfiltermenu1').append(maxvolym)
			$('#mainfiltermenu1').append(ok)

		}

		CreateUnderMenuVarugrupp() {
			let StoppedLastAt = $('#mainfiltermenu2').children().length
			for (let i = $('#mainfiltermenu2').children().length; i < myApp.varugrupper.length; i++) {
				let aVarugrupp = $('<div>'+myApp.varugrupper[i]+'</div>')
				.addClass('buttonsOfvarugrupperFilter dropdown-item')
				.attr('style', 'display: none')
				.on("click",function(e) {
				if(e.target !== e.currentTarget) return;
					let textuclickedat = myApp.varugrupper[i]
					$('#mainfiltermenu2').toggle();
					$('#hiddenfiltermenu2').toggle('swing');
					$('#hiddenfiltermenu2').text(textuclickedat);
					$('.buttonsOfvarugrupperFilter').toggle();
					myApp.searchcriteria.push( {attribute: "varugrupp", inputValue: textuclickedat } )
					myApp.search.searchFromCriteras();
				});

				$('#mainfiltermenu2').append(aVarugrupp);

					



				if ($('#mainfiltermenu2').children().length >= StoppedLastAt + 15) {
					let visaFler = $('<div>'+"Visa fler ▼"+'</div>')
						.addClass('buttonsOfvarugrupperFilter dropdown-item')
						.attr('style', 'display: none')
						.on("click",function(e) {
						if(e.target !== e.currentTarget) return;
						$(this).remove()
						$('#mainfiltermenu2').children().toggle()
						myApp.createUnderMenus.CreateUnderMenuVarugrupp();
						$('#mainfiltermenu2').children().toggle()
						});
					$('#mainfiltermenu2').append(visaFler);
					$('#mainfiltermenu2').on('click', function(e) {
						if(e.target !== e.currentTarget) return
							if ($('#mainfiltermenu2').children().length > 16) {
								$('#mainfiltermenu2').children().remove();
								myApp.createUnderMenus.CreateUnderMenuVarugrupp();
							}
						});
					//This adds a clickfunction on the filter so it correct the varugrupps length
					$('#hiddenfiltermenu2').on('click', function(e) {
						if(e.target !== e.currentTarget) return
							if ($('#mainfiltermenu2').children().length > 16) {
								$('#mainfiltermenu2').children().remove();
								myApp.createUnderMenus.CreateUnderMenuVarugrupp();
							}

							for (let i=0; i < myApp.searchcriteria.length; i++) {
									if (myApp.searchcriteria[i].attribute == "varugrupp") {
										myApp.searchcriteria.splice(i, 1)
										myApp.search.reset();
										myApp.search.searchFromCriteras();
										i = i -1
									}	
							}

						});

				

					break;
				} 


			}
		}

		CreateUnderMenuFörpackning() {
			for (let i = 0; i < myApp.forpackning.length; i++) {
				let forpack = $('<div>'+myApp.forpackning[i]+'</div>')
				.addClass("dropdown-item buttonsOfforpackningFilter")
				.attr('style', 'display: none')
				.on("click",function(e) {
					if(e.target !== e.currentTarget) return;
					let textuclickedat = myApp.forpackning[i]
					if (textuclickedat == "Övriga") {
						textuclickedat = "Övriga förpackningar"
					}

					$('#mainfiltermenu3').toggle();
					$('#hiddenfiltermenu3').toggle('swing');
					$('#hiddenfiltermenu3').text(textuclickedat);
					$('.buttonsOfforpackningFilter').toggle();

					myApp.searchcriteria.push( {attribute: "forpackning", inputValue: textuclickedat } )
					myApp.search.searchFromCriteras();


					$('#hiddenfiltermenu3')
					.on("click", function(e) { 
						if(e.target !== e.currentTarget) return;
						for (let i=0; i < myApp.searchcriteria.length; i++) {
									if (myApp.searchcriteria[i].attribute == "forpackning") {
										myApp.searchcriteria.splice(i, 1)
										myApp.search.reset();
										myApp.search.searchFromCriteras();
										i = i -1
									}	
						}

					});

				});


				$('#mainfiltermenu3').append(forpack)
			}

		}

		CreateUnderMenuLänder() {
		    //Creating divs/the buttons and display country and how many products from that country//
		    
		    for (let i = 0; i < myApp.CountrysWith200Products.length; i++) {
		     //    let container_of_filtered_countries = $(this.selector);					//vad gör $(this.selector)?
		         let ActualLand = myApp.CountrysWith200Products[i].Country
		         let ActualNrTypes = myApp.CountrysWith200Products[i].NumberOfTypes
		         let aCountry = $('<div>'+ActualLand+'&nbsp;'+'</div>').addClass(myApp.CountrysWith200Products[i].Country).addClass('buttonsOfLandFilter').addClass("dropdown-item").attr('style', 'display: none')
		         .on("click",function(e) {
					if(e.target !== e.currentTarget) return;
					let textuclickedat = myApp.CountrysWith200Products[i].Country
					$('#mainfiltermenu4').toggle();
					$('#hiddenfiltermenu4').toggle('swing');
					if (textuclickedat == "Övriga") {
						textuclickedat = "Övriga länder"
					}
					$('#hiddenfiltermenu4').text(textuclickedat);
					$('.buttonsOfLandFilter').toggle();


					myApp.searchcriteria.push( {attribute: "ursprunglandnamn", inputValue: textuclickedat } )
					myApp.search.searchFromCriteras();



				});
		   //      let nrOfTypes = $('<div>'+'('+ActualNrTypes+')'+'</div>').addClass('nrOfTypesInACountry');
		   //      aCountry.append(nrOfTypes);
		         $('#mainfiltermenu4').append(aCountry);
		      }

		      	$('#hiddenfiltermenu4')
					.on("click", function(e) { 
						if(e.target !== e.currentTarget) return;
						for (let i=0; i < myApp.searchcriteria.length; i++) {
									if (myApp.searchcriteria[i].attribute == "ursprunglandnamn") {
										myApp.searchcriteria.splice(i, 1)
										myApp.search.reset();
										myApp.search.searchFromCriteras();
										i = i -1
									}	
						}

					});


		}

		CreateUnderMenuAlkoholhalt() {
			let formdiv = $('<form>' + '<div>').addClass('form-group undermenualkoholhalt').attr('type', 'text').attr('display', 'none')
			let minAlkoholhalt = $('<input>').attr('type', 'text').attr('placeholder', "Min alkohol %").attr('id', 'hiddenfiltermenu5').attr('size','10').attr('maxlength', '3').addClass('minAlk undermenualkoholhalt').attr('display', 'none')

			let formdiv2 = $('<form>' + '<div>').addClass('form-group undermenualkoholhalt').attr('type', 'text').attr('display', 'none')
			let maxAlkoholhalt = $('<input>').attr('type', 'text').attr('placeholder', "Max alkohol %").attr('id', 'hiddenfiltermenu5').attr('size','10').attr('maxlength', '3').addClass('maxAlk undermenualkoholhalt').attr('display', 'none')
			
			let ok = $('<div>').addClass('confirmbuttoninfilters undermenualkoholhalt').text("ok")
			.on("click",function(e) {
					if(e.target !== e.currentTarget) return;
					let minAlk = $('.minAlk').val() / 1;
					let maxAlk = $('.maxAlk').val() / 1;
					let hacker;
					
					if( minAlk == 0 && maxAlk == 0) {						
								$('#mainfiltermenu5').children().toggle();
								return;
					}

					if (minAlk > 0 && maxAlk == 0) {
								maxAlk = minAlk + 1
								hacker = true;
					}
						

					if( minAlk > maxAlk) {	
								alert("Minimum value needs to be more than maximum")					
								return;
					}

					if( minAlk < 0 ) {
								alert("minimum can't be less than 0")
								return;
					}

					if (isNaN(minAlk) || isNaN(maxAlk)) {
						alert("You sure you used only numbers to determine the min and max values?")
						return;
					}
			
					if (hacker == true) {
								hacker = false
								maxAlk = "∞"
					}



					$('#hiddenfiltermenu5').toggle('swing');
					$('#mainfiltermenu5').toggle();

					myApp.searchcriteria.push( {attribute: "alkoholhalt", min: minAlk, max: maxAlk } )
					myApp.search.searchFromCriteras();



					$('#hiddenfiltermenu5').html(minAlk + " - " + maxAlk + " %")
							.on("click",function(e) {
								if(e.target !== e.currentTarget) return;
								$('.undermenualkoholhalt').remove()								
								myApp.createUnderMenus.CreateUnderMenuAlkoholhalt();

								for (let i=0; i < myApp.searchcriteria.length; i++) {
									if (myApp.searchcriteria[i].attribute == "alkoholhalt") {
										myApp.searchcriteria.splice(i, 1)
										myApp.search.reset();
										myApp.search.searchFromCriteras();
										i = i -1
									}	
								}



								});




					$('.undermenualkoholhalt').toggle();

			});

			$('#mainfiltermenu5').append(formdiv)
			$('#mainfiltermenu5').append(minAlkoholhalt)
			$('#mainfiltermenu5').append(formdiv2)
			$('#mainfiltermenu5').append(maxAlkoholhalt)
			$('#mainfiltermenu5').append(ok)
			$('.undermenualkoholhalt').toggle();
			
		}

		CreateUnderMenuEkologisk() {
			$('#mainfiltermenu6')
			.on("click",function(e) {
					if(e.target !== e.currentTarget) return;
					$(this).toggle();
					$('#hiddenfiltermenu6').toggle('swing');

					myApp.searchcriteria.push( {attribute: "ekologisk", inputValue: 1 } )
					myApp.search.searchFromCriteras();
					
			});

			$('#hiddenfiltermenu6')
					.on("click", function(e) { 
						if(e.target !== e.currentTarget) return;
						for (let i=0; i < myApp.searchcriteria.length; i++) {
									if (myApp.searchcriteria[i].attribute == "ekologisk") {
										myApp.searchcriteria.splice(i, 1)
										myApp.search.reset();
										myApp.search.searchFromCriteras();
										i = i -1
									}	
						}

			});

		}



}

module.exports = CreateUnderMenus;