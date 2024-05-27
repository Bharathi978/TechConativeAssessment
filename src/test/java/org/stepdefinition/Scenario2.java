package org.stepdefinition;

import org.junit.Assert;
import org.pojo.classes.LoginPOJO;
import org.reusable.UtilityClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Scenario2 extends UtilityClass{
	
	LoginPOJO l;

	@When("User has to enter {string} in the email field")
	public void user_has_to_enter_in_the_email_field(String nonRegEmail) {
	    
		l = new LoginPOJO();
		passTextToTextBox(l.getEmailTxt(), nonRegEmail);
	}

	@When("User has to enter {string} in the password field")
	public void user_has_to_enter_in_the_password_field(String validPassword) {
	    
		passTextToTextBox(l.getPassewordTxt(), validPassword);
	}

	@When("User has to click the login button")
	public void user_has_to_click_the_login_button() {
	    
		clickWebElement(l.getLoginBtn());
	}

	@Then("User should see an error message {string}")
	public void user_should_see_an_error_message(String errorMessage) {
	    
		Assert.assertTrue("User cannot see error message", l.getWrongCredentials().getText().equals(errorMessage));
	}
	
	@Then("User has to close the browser")
	public void user_has_to_close_the_browser() {
	    
		closeBrowser();
	}

}
