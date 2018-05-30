Feature: As a user/non-user of Systembolagets online shop
    In order to buy beverages
    I want to be able to sort-by-prise after searching products 

	Scenario: A user want to sort-by-prise after searching products 
	    Given the user is in sortiment page
	    And the user enters Captain Morgan in inputfeild
	    And we find some products
	    When the user clicks on sorting-option button
	    And the user chooses pris option
	    And the user clicks on sorting-by button 
	    Then the system sholud sort-by pris low to high price


        
