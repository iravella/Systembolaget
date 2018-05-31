Feature: 
    As a user of Systembolagets online shop
    In order to buy beverages
    I want to be able to add a certain quantity of a beverage to my shopping cart

	Scenario: A user want to add certain quantity of beverage to his shopping cart
	    Given the user is a registered user
	    When the user is trying to add  3 bottles of Captain Morgan to his/her shopping cart
	    Then 3 bottles of Captain Morgan should be add to his/her shopping cart

	Scenario: A user wants to add different beverages and quantities to his/her shopping cart
	   	Given the user's shopping cart is empty
	    When the user is trying to add 3 bottles of Renat to his/her shopping cart
	    And the user is trying to add 2 bottles of Canella to his/her shopping cart
	    And the user is trying to add 1 bottles of Purcari to his/her shopping cart
	    Then 3 bottles of Renat, 2 bottles of Canella and 1 bottle of Purcari beverages should be add to his/her shopping cart

    Scenario: A user can add a maximum of 99 bottles of Captain Morgan to his shopping cart
	    Given the user is in online web shop
	    When the user is trying to add 100 bottles of Captain Morgan to his/her shopping cart
	    Then the system should be display an error message as 99 is maximum quantity than can be ordered
	    And the sytem should be added 99 bottels of Captain Morgan defaultly to his/her shopping cart
        
    Scenario: A user wants to add same beverage multiple times to his shopping cart
        Given the user has already added 3 bottles of Amicone to his/her shopping cart
        When the user is trying to add 1 more bottle of Amicone to his/her shopping cart
        Then the total of 4 bottles of Amicone should be added to his/her shopping cart

    Scenario: Out of stock
        Given the user has already added 47 bottles of Fighting Cock to his/her shopping cart
        When the user is trying to add 1 more bottle of Fighting Cock to his/her shopping cart
        Then system should be displayed an error message as Fighting Cock is out of stock