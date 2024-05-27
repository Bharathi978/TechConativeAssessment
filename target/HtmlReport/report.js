$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FacebookNegative.feature");
formatter.feature({
  "name": "To verify facebook login with negative test cases",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate login with invalid email format",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Scenario1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"bharathi@com\" in the email field",
  "keyword": "When "
});
formatter.match({
  "location": "Scenario1.i_enter_in_the_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"ValidPassword123\" in the password field",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario1.i_enter_in_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario1.i_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see an error message \"Invalid username or password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario1.i_should_see_an_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario1.to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login with unregistered email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Scenario2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to enter \"notregistered@example.com\" in the email field",
  "keyword": "When "
});
formatter.match({
  "location": "Scenario2.user_has_to_enter_in_the_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to enter \"ValidPassword123\" in the password field",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario2.user_has_to_enter_in_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario2.user_has_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see an error message \"Invalid username or password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario2.user_should_see_an_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario2.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login with incorrect password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Scenario3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to enter \"9092737724\" in the email address or phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "Scenario3.user_has_to_enter_in_the_email_address_or_phone_number_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"bharathi@123\" in the password field",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario3.user_enter_in_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario3.user_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see error message \"Invalid username or password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario3.user_should_see_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario3.user_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate login with empty fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Scenario4"
    }
  ]
});
formatter.step({
  "name": "User enter \"\u003cemail\u003e\" in to the email or phone number text field",
  "keyword": "When "
});
formatter.step({
  "name": "User enter \"\u003cpassword\u003e\" in to the password text field",
  "keyword": "And "
});
formatter.step({
  "name": "User click the login",
  "keyword": "And "
});
formatter.step({
  "name": "User should see an error message contains \"Invalid username or password\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User to close the browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    },
    {
      "cells": [
        "",
        "ValidPassword123"
      ]
    },
    {
      "cells": [
        "validemail@example.com",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate login with empty fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Scenario4"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"\" in to the email or phone number text field",
  "keyword": "When "
});
formatter.match({
  "location": "Scenario4.user_enter_in_to_the_email_or_phone_number_text_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"\" in to the password text field",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario4.user_enter_in_to_the_password_text_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario4.user_click_the_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see an error message contains \"Invalid username or password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario4.user_should_see_an_error_message_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User to close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario4.user_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login with empty fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Scenario4"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"\" in to the email or phone number text field",
  "keyword": "When "
});
formatter.match({
  "location": "Scenario4.user_enter_in_to_the_email_or_phone_number_text_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"ValidPassword123\" in to the password text field",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario4.user_enter_in_to_the_password_text_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario4.user_click_the_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see an error message contains \"Invalid username or password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario4.user_should_see_an_error_message_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User to close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario4.user_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login with empty fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Scenario4"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"validemail@example.com\" in to the email or phone number text field",
  "keyword": "When "
});
formatter.match({
  "location": "Scenario4.user_enter_in_to_the_email_or_phone_number_text_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"\" in to the password text field",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario4.user_enter_in_to_the_password_text_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario4.user_click_the_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see an error message contains \"Invalid username or password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario4.user_should_see_an_error_message_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User to close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario4.user_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login with unregistered mobile number",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Scenario5"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User enter invalid \"8925775089\" in the email or mobile number field",
  "keyword": "When "
});
formatter.match({
  "location": "Scenario5.user_enter_invalid_in_the_email_or_mobile_number_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter valid \"ValidPassword123\" in the password field",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario5.user_enter_valid_in_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario5.user_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see an error message like \"Invalid username or password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario5.user_should_see_an_error_message_like(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario5.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});