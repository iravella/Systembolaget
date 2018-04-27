Feature: As a user, I should be able to view my shopping cart so that I know the content of my shopping cart. 
 
  Scenario:As a user I want to view the contents of my shopping cart 
    Given that the user has 10 products in his shopping cart 
    When the user clicks shopping cart 
    Then the user should should see 10 products in his shopping cart