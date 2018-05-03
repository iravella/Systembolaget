Feature: As a user 
	I want to know the payment methods 
	so that I can opt for the best payment method.

	Scenario:A user wants to know the available payment methods.
		Given that the person is buying alcohol
		When the person goes to payment
		Then they should see the available payment methods 