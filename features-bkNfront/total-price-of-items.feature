Feature: As a user, I should be able to see the total price of all items in my shopping cart. 
 
  Scenario:A person want to know the total price of his shopping cart items.
    Given that the user has products in his shopping cart 
    When the user checks his shopping cart
    Then the correct total price of those items should appear