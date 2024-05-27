Feature: To verify facebook login with negative test cases

  @Scenario1
  Scenario: To validate login with invalid email format
    When I enter "bharathi@com" in the email field
    And I enter "ValidPassword123" in the password field
    And I click the login button
    Then I should see an error message "Invalid username or password"
    And To close the browser

  @Scenario2
  Scenario: To validate login with unregistered email
    When User has to enter "notregistered@example.com" in the email field
    And User has to enter "ValidPassword123" in the password field
    And User has to click the login button
    Then User should see an error message "Invalid username or password"
    And User has to close the browser

  @Scenario3
  Scenario: To validate login with incorrect password
    When User has to enter "9092737724" in the email address or phone number field
    And User enter "bharathi@123" in the password field
    And User click the login button
    Then User should see error message "Invalid username or password"
    And User close the browser

  @Scenario4
  Scenario Outline: To validate login with empty fields
    When User enter "<email>" in to the email or phone number text field
    And User enter "<password>" in to the password text field
    And User click the login
    Then User should see an error message contains "Invalid username or password"
    And User to close the browser

    Examples: 
      | email                  | password         |
      |                        |                  |
      |                        | ValidPassword123 |
      | validemail@example.com |                  |

  @Scenario5
  Scenario: To validate login with unregistered mobile number
    When User enter invalid "8925775089" in the email or mobile number field
    And User enter valid "ValidPassword123" in the password field
    And User to click the login button
    Then User should see an error message like "Invalid username or password"
    And Close the browser
