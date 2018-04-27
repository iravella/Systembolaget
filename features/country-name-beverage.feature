Feature: As a user I want to be able to see 
    from which country the beverage comes from 
    so that i know where they come from

Scenario: As a user I want to see the country name producing my beverage
     Given that user is in the online shop 
	 When the user clicks on the beverage
     Then the user should be able to see the country name that produced the beverage

   