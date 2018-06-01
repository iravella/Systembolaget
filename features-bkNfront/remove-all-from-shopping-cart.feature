Feature: As a user of systembolaget
	I should be able to reset the shopping cart 
	so that I can start over with the shopping cart

	Scenario: A person want to reset the shopping cart
		Given that a person have a shopping cart with items in it
		When the person resets the shopping cart
		Then the shopping cart will be reset