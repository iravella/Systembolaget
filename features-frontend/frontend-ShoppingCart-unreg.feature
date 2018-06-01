Feature: As an unreg user I want to be able to add items in my cart and keep them there when navigate trough the homepage

	Scenario: As a unregistrated user i want to add a product into my cart and save it.
		Given that a user is on the sortiment homepage as an unregistreated user with an empty cart
		When an unreg user adds one to ten pieces of two random products from the sortiment
		And the user navigate to the shoppingcart
		Then the items recently added with macthing quantity should be displayed into that unreg users shoppingcart 
		And the sum of the products is correct
		