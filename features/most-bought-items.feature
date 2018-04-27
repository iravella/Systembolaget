Feature: As a owner of the systembolaget
	I want to be able to see the most bought items 
	in order to increase the stock if needed

	Scenario: Check if item sold comes to bought item list
		Given that a beverage is sold
		When the buy order is complete
		Then products that is bought should be stored in a list of bought items

	Scenario: Check for most bought item
		Given that items has been purchased
		When the items has been transfered to the bought items list
		Then the items in the list should be sorted with the most bought items at the top