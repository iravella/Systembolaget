Feature:A user of the online shoppingcart would like to delete 2selected items from his shoppingcart so that they are not in the shoppingcart.

	Scenario:A user want to delete 2 selected items from his shoppingcart
	   Given that the user has selected "Renat" 3,"King Cobra" 5 and "Gurkha" 8
	   When the user delets "Renat" and "Gurkha" from the shoppingcart
	   Then the two products should be deleted from the shoppingcart