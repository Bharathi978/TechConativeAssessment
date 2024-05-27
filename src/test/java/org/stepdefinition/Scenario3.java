package org.stepdefinition;

import org.junit.Assert;
import org.pojo.classes.LoginPOJO;
import org.reusable.UtilityClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Scenario3 extends UtilityClass{
	
	LoginPOJO l;

	@When("User has to enter {string} in the email address or phone number field")
	public void user_has_to_enter_in_the_email_address_or_phone_number_field(String regPhoneNumber) {
	    
		l = new LoginPOJO();
		passTextToTextBox(l.getEmailTxt(), regPhoneNumber);
	}

	@When("User enter {string} in the password field")
	public void user_enter_in_the_password_field(String inValidPassword) {
	    
		passTextToTextBox(l.getPassewordTxt(), inValidPassword);
	}

	@When("User click the login button")
	public void user_click_the_login_button() {
	    
		clickWebElement(l.getLoginBtn());
	}

	@Then("User should see error message {string}")
	public void user_should_see_error_message(String errorMessage) {
	    
		Assert.assertTrue("User cannot see error message", l.getWrongCredentials().getText().equals(errorMessage));
	}

	@Then("User close the browser")
	public void user_close_the_browser() {
	    
		closeBrowser();
	}
}
