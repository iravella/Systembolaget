Feature: Search function and filter 
         As a user
	     I want to be able to search for a product in the sortiment using different filters to match my criterias
	     So that i more easily find a product im looking for

	Scenario: A person searches using the text: "Vitt vin" using the ekofilter: "ekologisk"
		Given that a user is on the mainpage
		When a search is executed with the text: "Vitt vin" and using the ekofilter: "ekologisk"
		Then products matching "Vitt vin" and ekofilter: "ekologisk" will show up

