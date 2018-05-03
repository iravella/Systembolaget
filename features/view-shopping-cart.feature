Feature: As a user, I should be able to view my shopping cart so that I know the content of my shopping cart. 
 
  Scenario:As a user I want to view the contents of my shopping cart 
    Given that the user has products in his shopping cart 
    When the user wants to check his shopping cart
    Then the user should should see the products in the shopping cart