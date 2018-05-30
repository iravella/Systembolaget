Feature: As a user i want to clear the text after searching for specific product

	Scenario: To clear the text after searching for specific product
		Given the user is in sortiment page
		And the user enters Renat in searchfeild
		And the user clicks on search button
		When the user clicks on Text button
		Then the system should be cleared the search text