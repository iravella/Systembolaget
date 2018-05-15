Feature:As a user i would like to remove certain quantity of a selected item,so that i can buy how much i want.

	Scenario: A user would like to remove certain quantity of a selected product.
	Given that the user has 3 selected products with the some quantities
	When the user remove certain quantity of the selected item
	Then the shoppingcart should be updated