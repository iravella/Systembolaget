Feature: Test the navbar
	As a user i want to be able to click the links on the navbar so that it redirects me to diffrent pages

	Scenario Outline: Test so a user can go from the home page to a <html> page
		Given that the user is on the home page
		When the user clicks on the "<html>" link
		Then the user redirects to the "<html>" page

		Examples:
		| html          |
		| Hem           |
		| Sortiment     |
		| Kundvagn      |


	Scenario Outline: Test so a user can go from the sortiment to a <html> page
		Given that the user is on the sortiment page
		When the user clicks on the "<html>" link
		Then the user redirects to the "<html>" page

		Examples:
		| html          |
		| Hem           |
		| Sortiment     |
		| Kundvagn      |

	Scenario Outline: Test so a user can go from the shoppingcart to a <html> page
		Given that the user is on the shoppingcart page
		When the user clicks on the "<html>" link
		Then the user redirects to the "<html>" page

		Examples:
		| html          |
		| Hem           |
		| Sortiment     |
		| Kundvagn      |


