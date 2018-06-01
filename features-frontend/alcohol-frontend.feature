Feature:As a user i want to see all products with an alchohol percentage between 5-15.
 
  Scenario:A user want to see list of  products with an alchohol percentage between 5-15
 
    Given that the user is on online systembolaget
 
    When the user chooses the name sorting and alchohol percentage
 
    Then a list of products should be displayed in alphabetical order within the given percentage of alchohol