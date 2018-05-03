Feature:A user should be able to shutdown his browser and 
	reopen it with the same shopping cart


	Scenario: The user want to see the same cart when he close the window and reopen 
		Given that user has already 2 selected items in his shoppingcart 
		When the user close the browser and reopen same browser 
		Then the shoping cart should be display whatever the user has already in his cart   



