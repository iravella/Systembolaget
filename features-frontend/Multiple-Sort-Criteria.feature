Feature: As a user I want to sort the products based on multiple criterias

	Scenario: Sort the products based on multiple criterias
		Given the user is in sortiment page
		When the user clicks on pris buton
		And the user enters min 10kr and max 500kr in that feilds
		And the user clicks on volym button
		And the user enters min 300ml and max 790ml volymiml
		And the user clicks on varugrupp button
		And the user chooses öl in the list
		And the user clicks on länder button
		And the user chooses Chile namn
		Then the product should be sorted by pris,volym,varugrupp,länder


