Feature: As a user
	I want to be able to search for a beverage
	So that i can find the item easily

	Scenario: A person wants to search for a beverage
		Given that there is a beverage name to search for
		When search is executed
		Then an array containing all the beverages with the same name will show up