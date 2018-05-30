Feature: 
    As a user of Systembolagets online shop I would like to get a confirmation when I enter my payment information

    Scenario: As a user I would like to get a confirmation when I enter my payment information
        Given that I have chosen to pay for products in my shopping cart
        When I enter my payment information 
        And my payment inputs are valid
        And press the payment button
        Then I should recieve a verification of my payment 

  	Scenario: As a user I want to know if my payment inputs are invalid so that I can correct them
        Given that I have chosen to pay for products in my shopping cart
        When I enter my payment information 
        And my payment inputs are invalid
        Then I should recieve information about what inputs are invalid

    Scenario: As a user i would like to go to the home page when i payed for my products
        Given that a user is on the payment page
        And have typed in the correct information
        When the user clicks the paybutton
        Then the user should come back to the home page


  
   

