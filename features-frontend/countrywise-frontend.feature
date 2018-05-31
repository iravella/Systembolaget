Feature: A user of the systembolaget would like to see the products according to the countrywise

	Scenario:A user want to see to products according to the country-wise
		Given that the user is on systembolaget
		When a user chooses the price and country name Australien
		Then the lists of products from that country should be displayed in increasing order


	