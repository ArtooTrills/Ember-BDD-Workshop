Feature: visit index page

  Scenario: When fancy album page is visited

    Given I have [n] albums
    When I visit fancy album page
    Then I should see [n] albums

Where:

	n 
	12