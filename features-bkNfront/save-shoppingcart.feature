Feature:As a user, I would like to save my shopping cart
when I leave the cart and close my browser

Scenario:A user would like to save his/her shoppingcart,when he leave the cart and close the browser
	Given that the user has some products in the shoppingcart
	When the user leave the shoppingcart or close the browser
	And when the user reopens the browser
	Then the same shoppingcart should be reopened
