Feature:As a user i want to remove an item from the shoppingcart
	

	Scenario:A person want to remove the selected item from his shoppingcart
		 Given that user is on shoppingcart
		 And the user has 3 products in the shoppingcart
		 When the person clicks  delete on 2nd item in the shoppingcart
		 Then the 2nd item should be deleted from the shoppingcart

	