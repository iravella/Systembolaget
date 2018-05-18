Feature: Search function and filter 
         As a user
	     I want to be able to search for a product in the sortiment using different filters to match my criterias
	     So that i more easily find a product im looking for

	     Background: Given that a user is on the mainpage

	Scenario Outline: A person wants to search for <productName> using the landfilter "<SearchFilter>"
		When a search is executed with the text: "<Search>" and filter: "<SearchFilter>"
		Then products matching the "<Search>" and "<SearchFilter>" will show up

		Examples:
		| Search    | SearchFilter |
		| Carlsberg | Frankrike    |
		| Veteöl    | Norge        |
		| Rött Vin  | Övriga       |
		| Vodka     | Ryssland     |
		| Volvo     | Sverige      |

	Scenario: A person searches using the text: "Veteöl" using the pricefilter: "Pris: 1-120"
		When a search is executed with "Veteöl" and using the pricefilter: "Pris: 1-120"
		Then products matching "Veteöl" and pricerange: "Pris: 1-120" will show up

	Scenario: A person searches using the text: "Vitt vin" using the ekofilter: "ekologisk"
		When a search is executed with the text: "Vitt vin" and using the ekofilter: "ekologisk"
		Then products matching "Vitt vin" and ekofilter: "ekologisk" will show up

	Scenario Outline: A person searches using the text: "<TEXT>"
		When a search is executed with the text: "<TEXT>"
		Then products matching "<TEXT>" will show up

		Examples:
		| TEXT |
		| 43   |
		| b2   |
		| 1    |
		| a    |
		| >    |
		| .0   |