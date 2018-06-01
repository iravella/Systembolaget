Feature:As a user i should be able to remove the selected item from the shopping cart 
so that it doesnt exist in my shopping cart


	Scenario:A person want to remove the selected item from his shoppingcart
		 Given that the user has Zero products in the shoppingcart
		 When the user tries to delete an item from the shoppingcart
		 Then an error message should pop up


	Scenario:A person want to remove the selected item from his shoppingcart
		 Given that a person has an 3 selected items in his shoppingcart
		 When the person clicks  delete on 2nd item in the shoppingcart
		 Then the 2nd item should be deleted from the shoppingcart

	Scenario:A user want to delete 2 selected items from his shoppingcart
		 Given that the user has selected "Renat" 3,"King Cobra" 5 and "Gurkha" 8
		 When the user delets "Renat" and "Gurkha" from the shoppingcart
		 Then the two products should be deleted from the shoppingcart

	Scenario: A user would like to remove certain quantity of a selected product.
		 Given that the user has 3 selected products with the some quantities
		 When the user remove certain quantity of the selected item
		 Then the shoppingcart should be updated	 



	 
		 