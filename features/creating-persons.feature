Feature: Create persons
  As a SystemboldateOfBirtht employee
  In order to keep track of people in the store
  I want to be able to register persons

  Scenario: A person has a fullName and dateOfBirth
    Given that we have a fullName as a non-empty string
    And an dateOfBirth as a number
    When I try to create a person with this data
    Then a new person should be created
    And have the properties fullName and dateOfBirth
    And the properties should be equal to our original data

  Scenario Outline: A person should have a fullName that is not a <non-valid-data-type>
    Given that we have a fullName that is of the data type "<non-valid-data-type>"
    When we try to create a person
    Then we should get a runtime error

    Examples:
    | non-valid-data-type |
    | number              |
    | boolean true        |
    | boolean false       |
    | array               |
    | object              |
    | null                |
    | undefined           |
    | empty string        |
  