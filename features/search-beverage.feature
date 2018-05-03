Feature: Search function and filter 
         As a user
	     I want to be able to search for a product in the sortiment using different filters to match my criterias
	     So that i more easily find a product im looking for

	Scenario Outline: A person wants to search for <productName> using the filter "<SearchFilter>"
		Given that a user is on the mainpage
		When a search is executed with the text: "<Search>" and filter: "<SearchFilter>"
		Then products matching the "<Search>" and "<SearchFilter>" will show up

		Examples:
		| Search    | SearchFilter |
		| Carlsberg | Frankrike    |
		| Veteöl    | Pris: 1-120  |
		| Rött Vin  | Övriga       |
		| Vodka     | Ryssland     |
		| Volvo     | Sverige      |
