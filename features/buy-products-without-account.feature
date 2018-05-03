Feature: As a user I should be able to buy products 
	without having to register a user account 
	so that it is easier to buy

	Scenario: buy products without using an account
		Given I am an none-registered user
		And I have products in my shoppingcart
		When I want to buy the items
		Then the website will ask for my shipping information
		And Payment method