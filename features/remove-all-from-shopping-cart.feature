Feature: As a user of systembolaget
	I should be able to reset the shopping cart 
	so that I can start over with the shopping cart

	Scenario: A person want to reset the shopping cart
		Given that a person have a shopping cart with items in it
		When the person clicks the reset button
		Then the shopping cart will be reset
		And have 0 items in it