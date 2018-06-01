Feature: As a admin show an error message if user search with unknown text

	Scenario:search with unknown text show an error message
		Give the user in sortiment page
		And the user enter abcdefg in searchfeild
		When click on search button
		Then the sytem should be show an error message as "Sökningen hittade inga produkter"