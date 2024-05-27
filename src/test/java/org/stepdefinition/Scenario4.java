package org.stepdefinition;

import org.junit.Assert;
import org.pojo.classes.LoginPOJO;
import org.reusable.UtilityClass;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Scenario4 extends UtilityClass{
	
	LoginPOJO l;

	@When("User enter {string} in to the email or phone number text field")
	public void user_enter_in_to_the_email_or_phone_number_text_field(String emailData) {
	    
		l = new LoginPOJO();
		passTextToTextBox(l.getEmailTxt(), emailData);
	}

	@When("User enter {string} in to the password text field")
	public void user_enter_in_to_the_password_text_field(String passwordData) {
	    
		passTextToTextBox(l.getPassewordTxt(), passwordData);
	
	}

	@When("User click the login")
	public void user_click_the_login() {
	    
		clickWebElement(l.getLoginBtn());
	}
	
	@Then("User should see an error message contains {string}")
	public void user_should_see_an_error_message_contains(String errorMessage) {
		
		Assert.assertTrue("User cannot see error message", l.getWrongCredentials().getText().equals(errorMessage));		
	}

	@Then("User to close the browser")
	public void user_to_close_the_browser() {
		
		closeBrowser();
	}

}
