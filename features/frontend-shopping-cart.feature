Feature: As a user, I should be able to enter a new quantity of items in my shopping cart.
 
  Scenario:As a user I want to be able to enter a new quantity of items in my shopping cart.
  	Given that the user is logged in on the home page
    And that the user has a product in his shopping cart 
    And is on the shopping cart page
    When the user enters a new quantity of 5 to an item
    Then the user should see the quantity change to 5 on that item

  Scenario:As the boss I don't want users to be able to change the quantity above the stock balance.
	Given that the user has products in his shopping cart
	And is on the shopping cart page
	When the user enters a quantity which is higher than the stock balance
	Then the quantity will change to the maximum stock balance
	And the user will be notified

  Scenario:As the boss I don't want users to be able to enter a quantity of less than one
	Given that the user has products in his shopping cart
	And is on the shopping cart page
	When the user enters a quantity lower than one
	Then the quantity will change to one
	And the user will be notified that quantity can't go lower than ones