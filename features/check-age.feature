Feature: Warn about underage
  As a user of Systembolagets online shop
  In order to not waste my time
  I want to be warned at an early stage
  If I am too young to be able to buy alcoholic beverages in the shop

  Scenario: When we don't know that age of a user ask for it
    Given that we don't know the age of user / not registrered
    When the user tries to see our products
    Then ask the user for to register

  Scenario Outline: When a user with the age <age> tries to see our products then a warning should <warning> be displayed
    Given that I am a registrered user with a known age of "<age>"
    When the user tries to see our products
    Then a warning should "<warning>" be displayed

    Examples:
    | age | warning |
    | 15  |         |
    | 19  |         |
    | 25  | not     |
    | 40  | not     |