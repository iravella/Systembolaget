Feature:As a user of Systembolagets online shop
    In order to buy beverages 
    I want to be able to add a certain quantity of a beverage to my shopping cart

 Scenario: A person want to add certain quantity of beverage to his shopping cart
  Given the person is a registered user
  And the user is viewing a certain product
  And the quantity has been set to 3
  When the user clicks "Add to cart"
  Then the product with the quantity of 3 should be added to the user's shopping cart