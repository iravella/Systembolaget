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
	
    Scenario Outline: A user wants to add different beverages and quantities to his/her shopping cart
        Given the user is in sortiment page
        And the user enters <namn> in searchfeild
        When the user clicks on search button 
        And we find products <specific-product>
        And the user enters <quantity> in quantity feild
        Then the system should be added <specific-product> and <quantity> to his/her shopping cart

        Examples:
        
        |namn             	 |specific-product           			 |quantity|
        |Captain Morgan 	 |Captain Morgan - White Rum			 |3       |
        |Renat          	 |Renat                      			 |2       |
        |Valtellina Superiore|Valtellina Superiore - Sassella Riserva|1       |
     
    Scenario Outline: A user wants to add same beverage multiple times to his shopping cart
     	Given the user is in sortiment page
     	And the user enters <namn> in searchfeild
        When the user clicks on search button 
        And the user find some products to choose <specific-product>
        And the user enters <quantity> in quantity feild
        Then the total <quantity> of Amicone should be added to his/her shopping cart   

        Examples:

     	|namn            |specific-product   |quantity|
        |Amicone 	 	 |Amicone - Bianco	 |3       |
        |Amicone 	 	 |Amicone - Bianco	 |1       |
    
    Scenario: Out of stock
    	Given the user is in sortiment page
     	And the user enters Fighting Cock in searchfeild
        When the user clicks on search button 
        And the user find some products to choose Fighting Cock - Kentucky Straight Bourbon
        And the user enters 48 bottels in the quantity feild
        Then the system should be displayed an error message as Fighting Cock is out of stock