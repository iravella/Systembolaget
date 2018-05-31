Feature: As a user of systembolaget
	I should be able to reset the shopping cart 
	so that I can start over with the shopping cart

	Scenario: A person want to reset the shopping cart
		Given that the shopping cart displays the users items
		When the person clicks the reset button
		Then the shopping cart will display 0 items