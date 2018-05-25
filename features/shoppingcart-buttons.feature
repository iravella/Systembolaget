Feature: As a user, I should be able to use the link buttons on the shopping cart page. 
 
  Scenario:As a user I want to be able to continue shopping when I am in the shopping cart
    Given that the user is on the shopping cart page
    When the user clicks the continue shopping button 
    Then the user should be redirected to the sortiment page

    Scenario:As a user I want to be able to pay for my items when I am in the shopping cart
    Given that the user is on the shopping cart page
    When the user clicks the pay button 
    Then the user should be redirected to the payment page