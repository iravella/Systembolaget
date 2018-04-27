Feature: As a user I want to choose/see certain categories of beverages 
         in order to get the information easily.

	Scenario: The user want to get the information of certain categories of beveragess
		Given that the user is a registered user
		When the user chooses a certain category by name
		Then the user should get a list of all products in that category