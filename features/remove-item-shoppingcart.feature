Feature:As a user i should be able to remove the selected item from the shopping cart 
so that it doesnt exist in my shopping cart

	 Scenario:A person want to remove the selected item from his shoppingcart
		 Given that a person has an 3 selected items in his shoppingcart
		 When the person clicks  delete on 2nd item in the shoppingcart
		 Then the 2nd item should be deleted from the shoppingcart

		 