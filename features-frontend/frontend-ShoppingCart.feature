Feature: As a logged in user I want to be able to add items in my cart and keep them in my cart between logouts and window changes

	Scenario: As a user i want to add a product into my cart and save it.
		Given that a user is on the sortiment homepage and logged in with an empty cart
		When a user adds 10 pieces of two random products from the sortiment
		And the user navigate to his or her shoppingcart
		Then the user should still be logged in
		And the items recently added should be displayed into that users shoppingcart
		And when the user relogg the products added should still be displayed
