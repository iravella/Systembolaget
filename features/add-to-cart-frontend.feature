Feature: 
    As a user of Systembolagets online shop
    In order to buy beverages
    I want to be able to add a certain quantity of a beverage to my shopping cart

	Scenario: A user want to add certain quantity of beverage to his shopping cart
	    Given the user is in sortiment page
	    And the user clicks on sorting button
	    And the user clicks on sorting by name
	    When the user clicks on Captain Morgan 
	    And the user enter 3 bottels in quantity feild 
	    Then 3 bottles of Captain Morgan should be add to his/her shopping cart

	Scenario Outline: A user wants to add different beverages and quantities to his/her shopping cart
		Given the user is in sortiment page
		And the page is sorted by name
        When the user clicks on <namn>
        And the user clicks on <quantity>
        Then 3 bottles of Renat, 2 bottles of Canella and 1 bottle of Purcari beverages should be add to his/her shopping cart

        Examples:
        
        |namn			|quantity|
        |Captain Morgan	|3		 |
        |Renat			|2		 |
        |Purcari		|1		 |

    Scenario: A user can add a maximum of 99 bottles of Captain Morgan to his shopping cart
	    Given the user is in sortiment page
		And the page is sorted by name
		When the user clicks on Captain Morgan
		And the user enters 100 bottles of Captain Morgan 
	    Then the system should be display an error message as 99 is maximum quantity than can be ordered
	    And the sytem should be added 99 bottels of Captain Morgan defaultly to his/her shopping cart

	Scenario: A user can add a maximum of 99 bottles of beverages Marie to his shopping cart
	    Given the user's shopping cart has already added 99 bottles of Motzenbäcker Marie to his/her cart 
	    When the user is trying to add 1 more bottle of Captain Morgan to his/her shopping cart
	    Then the system should be display an error message as 99 is maximum quantity than can be ordered
        
    Scenario: A user wants to add same beverage multiple times to his shopping cart
        Given the user has already added 3 bottles of Amicone to his/her shopping cart
        When the user is trying to add 1 more bottle of Amicone to his/her shopping cart
        Then the total of 4 bottles of Amicone should be added to his/her shopping cart

    Scenario: Out of stock
        Given the user has already added 47 bottles of Fighting Cock to his/her shopping cart
        When the user is trying to add 1 more bottle of Fighting Cock to his/her shopping cart
        Then system should be displayed an error message as Fighting Cock is out of stock

    Scenario: Out of stock
        Given the user is in online web shop
        When the user is trying to add 10 bottles of Schlappeseppel to his/her shopping cart
        Then system should be displayed an error message as Schlappeseppel is out of stock
