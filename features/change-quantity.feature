Feature: As a user of Systembolagets online shop
If I change my mind
I want to be able to change the quantity of a beverage already in my shopping cart

Scenario:A person want to change the quantity of a beverage
  Given that user has already added a product in their shopping cart
  When the user changes the quantity of the beverage in the cart
  Then the quantity should be changed in the shopping cart

