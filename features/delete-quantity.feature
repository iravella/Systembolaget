Feature: As a user of Systembolagets online shop
If I change my mind
I want to be able to remove a beverage from my shopping cart

Scenario:A person want to remove a beverage
  Given that user has already added a product in their shopping cart
  When the user removes the the beverage in the cart
  Then the beverage should be removed in the shopping cart
