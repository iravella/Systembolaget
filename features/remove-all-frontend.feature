Feature: As a user of systembolaget
	I should be able to reset the shopping cart 
	so that I can start over with the shopping cart

	Scenario: A person want to reset the shopping cart
		Given that the user is logged in on the home page
    	And that the user has a product in his shopping cart 
    	And is on the shopping cart page
		When the person clicks the reset button
		Then the shopping cart will display 0 items