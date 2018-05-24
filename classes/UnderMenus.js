var Category = require('./app.js');

class CreateUnderMenus {

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

							if( maxPris == 0 && minPris == 0) {						
								$('#mainfiltermenu0').toggle();
							}


							if (minPris > 0 && maxPris == 0) {
								maxPris = undefined;
							}
							
							if ( maxPris !== "Max pris") {
								if (typeof maxPris == 'string') {
									alert("you can only type numbers as max price");
									return;
								}
							}
						
							if ( maxPris < minPris ) {
							alert("Max cant be less than min");
							return;
							}


							$('#hiddenfiltermenu0').toggle('swing');
						//	$('#mainfiltermenu0').toggle();
							$('#hiddenfiltermenu0').html(minPris + " - " + maxPris + " kr")
							.on("click",function(e) {
								if(e.target !== e.currentTarget) return;
								$('.undermenupris').remove()								//This Works as reset 
								myUndermenus.CreateUnderMenuPris();							//This +

							});

				
							$('.undermenupris').toggle();
						// let pris = mySearch.criteriaIntervalls("prisinklmoms", minPris, maxPris);
						myApp.searchcriteria.push({ text: "prisinklmoms", min: minPris, max: maxPris})
						console.log("totala filter arrayn:", myApp.searchcriteria)

							//Insert searchfunction here! // using the attribute prisinklmoms? shall we add that to the class?

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
					if( maxVol == 0 && minVol == 0) {						
						$('#mainfiltermenu1').children().toggle();
						return;
					}

					myApp.searchcriteria.push( {attribute: "volymiml", min: minVol, max: maxVol } )
					//DO THE SEARCH FROM THE myApp.searchcriteria
					myApp.search();

					$('#mainfiltermenu1').toggle();
					$('#mainfiltermenu1').children().toggle();
					$('#hiddenfiltermenu1').toggle();

					$('#hiddenfiltermenu1').html(minVol + " - " + maxVol + " ml")
							.on("click",function(e) {
								if(e.target !== e.currentTarget) return;
							// $('#mainfiltermenu1').toggle('swing');						//resetta alla värden
							$('#hiddenfiltermenu1').toggle('swing');					
								$('.minVolym').val("");			
								$('.maxVolym').val("");

								for (let i=0; i < myApp.searchcriteria.length; i++) {
									if (myApp.searchcriteria[i].attribute == "volymiml") {
										myApp.searchcriteria.splice(i, 1)
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
					//insert searhfuntion here like...search(ursprungsnamnland, textuclickedat)
					$('.buttonsOfvarugrupperFilter').toggle();
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
						myUndermenus.CreateUnderMenuVarugrupp()
						$('#mainfiltermenu2').children().toggle()
						});
					$('#mainfiltermenu2').append(visaFler);
					$('#mainfiltermenu2').on('click', function(e) {
						if(e.target !== e.currentTarget) return
							if ($('#mainfiltermenu2').children().length > 16) {
								$('#mainfiltermenu2').children().remove();
								myApp.a.CreateUnderMenuVarugrupp();
							}
						});
					//This adds a clickfunction on the filter so it correct the varugrupps length
					$('#hiddenfiltermenu2').on('click', function(e) {
						if(e.target !== e.currentTarget) return
							if ($('#mainfiltermenu2').children().length > 16) {
								$('#mainfiltermenu2').children().remove();
								myUndermenus.CreateUnderMenuVarugrupp();
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
					$('#mainfiltermenu3').toggle();
					$('#hiddenfiltermenu3').toggle('swing');
					$('#hiddenfiltermenu3').text(textuclickedat);
					//insert searhfuntion here like...search(forpackning, textuclickedat)
					$('.buttonsOfforpackningFilter').toggle();
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
		         let aCountry = $('<button>'+ActualLand+'&nbsp;'+'</button>').addClass(myApp.CountrysWith200Products[i].Country).addClass('buttonsOfLandFilter').addClass("dropdown-item").attr('style', 'display: none')
		         .on("click",function(e) {
					if(e.target !== e.currentTarget) return;
					let textuclickedat = myApp.CountrysWith200Products[i].Country
					$('#mainfiltermenu4').toggle();
					$('#hiddenfiltermenu4').toggle('swing');
					$('#hiddenfiltermenu4').text(textuclickedat);
					//insert searhfuntion here like...search(ursprungsnamnland, textuclickedat)
					$('.buttonsOfLandFilter').toggle();
				});
		         let nrOfTypes = $('<div>'+'('+ActualNrTypes+')'+'</div>').addClass('nrOfTypesInACountry');
		         aCountry.append(nrOfTypes);
		         $('#mainfiltermenu4').append(aCountry);
		      }


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
					$('#hiddenfiltermenu5').toggle('swing');
					$('#mainfiltermenu5').toggle();
					$('#hiddenfiltermenu5').html(minAlk + " - " + maxAlk + " %")
							.on("click",function(e) {
								if(e.target !== e.currentTarget) return;
								$('.undermenualkoholhalt').remove()								//This Works as reset 
								myUndermenus.CreateUnderMenuAlkoholhalt();		
							});

							if( minAlk == 0 && maxAlk == 0) {						
								$('#hiddenfiltermenu5').toggle();
								$('#mainfiltermenu5').toggle();
							}
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
					//insert searhfuntion here like...search(ursprungsnamnland, textuclickedat)
			});
		}


		CreateAllUnderMenus() {
		this.CreateUnderMenuPris()
		this.CreateUnderMenuVolym();
		this.CreateUnderMenuVarugrupp()
		this.CreateUnderMenuLänder();
		this.CreateUnderMenuFörpackning();
		this.CreateUnderMenuAlkoholhalt();
		this.CreateUnderMenuEkologisk();
		}


}