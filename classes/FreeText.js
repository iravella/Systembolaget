class FreeText {

	constructor() {
		this.searchingTextField();
	}



	searchingTextField() {
		let divSearchingTextField = $('<div>' + '</div>')
		.attr('id', 'divSearchingTextField');

		let inputfield = $('<input>' + '</inuput>')
		.attr('id', 'inputfield');
		inputfield.appendTo('#navbarResponsive')

		let sokButton = $('<button>' +"Sök"+ '</button>')
		.attr('id', 'sokButton')
		.on('click', function() {
			let searchtext =  $('#inputfield').val()
			$('#inputfield').val("");


		
					if (searchtext == "") { 
						return; 
					} else {

						for (let i=0; i < myApp.searchcriteria.length; i++) {
								if (myApp.searchcriteria[i].attribute == "freetext") {
									myApp.searchcriteria.splice(i, 1)
									myApp.search.reset();
									myApp.search.searchFromCriteras();
									i = i -1
								}	
						}



						$('#filtersearchtext').remove();
						let sokfieldFilter = $('<div>'+"Text: "+searchtext+'</div>')
						.addClass('btn btn-secondary hiddenfiltermenu')
						.attr('id', 'filtersearchtext')
						.attr('aria-pressed', "false")
						.attr('autocomplete', 'off')
						.attr('val', searchtext)
						.on('click', function () {
							$(this).remove();
									for (let i=0; i < myApp.searchcriteria.length; i++) {
											if (myApp.searchcriteria[i].attribute == "freetext") {
												myApp.searchcriteria.splice(i, 1)
												myApp.search.reset();
												myApp.search.searchFromCriteras();
												i = i -1
											}	
									}

						});

						sokfieldFilter.appendTo('.sokfieldFilter')
						myApp.searchcriteria.push( {attribute: "freetext", text: searchtext } )
						myApp.search.searchFromCriteras();
					
					}

		});

		sokButton.appendTo('#navbarResponsive')


		divSearchingTextField.appendTo( '.sokfield' ) 


	}

}



module.exports = FreeText;