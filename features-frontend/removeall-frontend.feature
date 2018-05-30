Feature: A user of a shoppingcart would like to empty his shoppingcart

	Scenario: A user would like to reset his shoppingcart
		Given that the user is on the shoppingcart
		And the user has three selected items in his cart
		When the user clicks remove all button
		Then the shoppingcart should become empty 