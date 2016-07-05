Feature: search empty string

  Scenario: Searching fancy albums with empty string

  	Given I have [n] albums
  	When I visit fancy album page
    Given I enter "[search]"
    Then I should see [these many] albums

Where:

	n	|search |these many
	12	|X  	|1
	 	