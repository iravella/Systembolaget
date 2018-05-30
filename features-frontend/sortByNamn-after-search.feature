Feature: As a user/non-user of Systembolagets online shop
    In order to buy beverages
    I want to be able to sort-by-name after searching products 

	Scenario: A user want to sort-by-prise after searching products 
	    Given the user is in sortiment page
	    And the user enters Schlappeseppel Specialität in inputfeild
	    When the user clicks on sorting-option button
	    And the user chooses namn option
	    And the user clicks on sorting-by button 
	    Then the system sholud sort-by-namn by alphabetical order 
    

        
