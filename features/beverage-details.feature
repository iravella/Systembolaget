Feature: As a user I want to able to see/get the beverage 
	basic details(ursprunglandnamn, prisinklmoms, volymiml, alkoholhalt) 
	so that I can easily get an overview of the product.


	Scenario Outline: The user want to see/get the basic details of beverage
		Given that user is a registered user
		When the user chooses a certain beverage "<namn>"
		Then the user should get basic information of the beverage ursprunglandnamn "<ursprunglandnamn>", volymiml <volymiml>, alkoholhalt "<alkoholhalt>" and prisinklmoms <prisinklmoms>


	  Examples:
	  |namn		|ursprunglandnamn| |volymiml| |alkoholhalt| |prisinklmoms|
	  |Renat	|Sverige 		 | |700	    | |37.5		  | |204		 |
	  |Ole Smoky|USA	 		 | |500		| |17.5		  |	|149		 |
	  |Maria	|Sydafrika 		 | |375		| |9		  |	|159		 |
