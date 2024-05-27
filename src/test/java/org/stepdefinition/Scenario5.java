package org.stepdefinition;

import org.junit.Assert;
import org.pojo.classes.LoginPOJO;
import org.reusable.UtilityClass;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Scenario5 extends UtilityClass {
	
	LoginPOJO l;

	@When("User enter invalid {string} in the email or mobile number field")
	public void user_enter_invalid_in_the_email_or_mobile_number_field(String unRegPhoneNumber) {
	    
		l = new LoginPOJO();
		passTextToTextBox(l.getEmailTxt(), unRegPhoneNumber);
	}

	@When("User enter valid {string} in the password field")
	public void user_enter_valid_in_the_password_field(String password) {
	    
		passTextToTextBox(l.getPassewordTxt(), password);
	}

	@When("User to click the login button")
	public void user_to_click_the_login_button() {
	    
		clickWebElement(l.getLoginBtn());
	}

	@Then("User should see an error message like {string}")
	public void user_should_see_an_error_message_like(String errorMessage) {
		
		Assert.assertTrue("User cannot see error message", l.getWrongCredentials().getText().equals(errorMessage));		
	}

	@Then("Close the browser")
	public void close_the_browser() {
		
		closeBrowser();
	}
	
	
}
