Feature: Value Calculator
	Scenario: Calculation display
	Given I view the calculator screen
	When I view each amount that corresponds to the values 
	Then I should see the values appear    
	
	Scenario: Verify the values on the screen is greater than zero
	Given I view the calculator screen
	When I view each value that is greater than zero
	Then I should see the total balance for five values that is greater than zero
	
	Scenario: Verify the total balance is correct
	Given I view the calculator screen
	When I view all the total values are displayed to calculate  
	Then I should see the correct total balance
	
	Scenario: Verify the values are formatted as currencies
	Given I view the calculator screen
	When I view each text field that is displayed with dollar currencies
	Then All fields are formatted in U.S. currencies
	
	Scenario: Verify the total balance matches sum of the values
	Given I view the calculator screen
	When All values displayed are the same.
	Then The total of all values match the sum of the values
	  