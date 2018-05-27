Feature: 
    As a user of Systembolagets online shop
    In order to buy beverages
    I want to be able to add a certain quantity of a beverage to my shopping cart

	Scenario: A user want to add certain quantity of beverage to his shopping cart
	    Given the user is in sortiment page
	    And the user enters Captain Morgan in inputfeild
	    When the user clicks on search button 
	    And we find products (among them Captain Morgan - Spiced Gold)
	    And the user enters 3 bottles in tnhe quantity field of Captain Morgan - Spiced Gold
	    Then 3 bottles of Captain Morgan - Spiced Gold should be added to his/her shopping cart

	Scenario: A user can add a maximum of 99 bottles of Canella - Bellini to his shopping cart
	    Given the user is in sortiment page
		And the user enters Canella - Bellini in searchfeild
		When the user clicks on Canella - Bellini
		And the user enters 100 bottles in the quantity field of Canella - Bellini
	    Then the system should be display an error message as 99 is maximum quantity than can be ordered
	    And the sytem should be added 99 bottels of Canella - Bellini defaultly to his/her shopping cart
	