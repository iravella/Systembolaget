class MainMenu {

	constructor() {
		this.CreateButtonForFilter();
	}

	CreateButtonForFilter() {
	let choosenCriterias = ["Pris", "Volym", "Varugrupp", "Förpackning", "Länder", "Alkoholhalt", "Ekologisk"];
	let button = [];
	let i = 0;

		for (i = 0; i < choosenCriterias.length; i++) {
			button[i] = new Criterabutton ();
		}

		function Criterabutton() {
			let innertext;
			let buttoncreation =
			$('<div>'+choosenCriterias[i]+'</div>')
					.addClass('btn btn-secondary mainfiltermenu')
					.attr('id', 'mainfiltermenu'+i)
					.attr('aria-pressed', "false")
					.attr('autocomplete', 'off')
					.attr('val', i)
					.css('display', "inline-block")
					.on("click",function(e) {
							if(e.target !== e.currentTarget) return;
							$(this).children().toggle();
					});

			let buttoncreationInvis =													//this is kinda the filter once u clicked the confirm button and added the filter..
			$('<div>'+choosenCriterias[i]+'</div>')
					.addClass('btn btn-secondary hiddenfiltermenu')
					.attr('id', 'hiddenfiltermenu'+i)
					.attr('aria-pressed', "false")
					.attr('autocomplete', 'off')
					.attr('val', i)
					.css('display', "none")
					.on("click",function(e) {
							if(e.target !== e.currentTarget) return;
							$(this).toggle('swing');
							$('#'+'mainfiltermenu'+$(this).attr('val')).toggle('swing');
					});
			$('.FiltersHidden').append( buttoncreationInvis );
			$('.Filters').append( buttoncreation );

		}
	}
}

module.exports = MainMenu;