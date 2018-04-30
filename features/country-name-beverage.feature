Feature: As a user I want to be able to see 
    from which country the beverage comes from 
    so that i know where they come from

	Scenario: As a user I want to know from which country the beverage come from
	    Given that user is a registered person
		When the user chooses a "Vitt vin" beverage 
	    Then the user should be able to see the country name from where the beverage come from

   