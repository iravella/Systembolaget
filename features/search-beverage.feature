Feature: As a user
	I want to be able to search for veteöl
	So that i can find it easily

	Scenario: A person wants to search for veteöl
		Given that veteöl is the searched for name
		When search is executed
		Then an array containing all the veteöl will show up