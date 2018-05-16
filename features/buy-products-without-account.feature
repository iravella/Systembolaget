Feature: As a user I should be able to buy products 
	without having to register a user account 
	so that it is easier to buy

	Scenario: buy products without using an account
		Given the user is an none-registered user
		And the user have products in my shoppingcart
		When the user enters the payment information
		And the payment information is valid
		Then the user should have bougth the items