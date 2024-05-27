package org.stepdefinition;

import org.junit.Assert;
import org.pojo.classes.LoginPOJO;
import org.reusable.UtilityClass;

import com.sun.source.tree.AssertTree;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Scenario1 extends UtilityClass{
	
	LoginPOJO l;

	@When("I enter {string} in the email field")
	public void i_enter_in_the_email_field(String emailData) {
	    
		l = new LoginPOJO();
		passTextToTextBox(l.getEmailTxt(), emailData);
	}

	@When("I enter {string} in the password field")
	public void i_enter_in_the_password_field(String passwordData) {
	    
		passTextToTextBox(l.getPassewordTxt(), passwordData);
	}

	@When("I click the login button")
	public void i_click_the_login_button() {
	    
		clickWebElement(l.getLoginBtn());
	}

	@Then("I should see an error message {string}")
	public void i_should_see_an_error_message(String errorMessage) {
	    
		Assert.assertTrue("User cannot see error message", l.getWrongCredentials().getText().equals(errorMessage));
	}
	
	@Then("To close the browser")
	public void to_close_the_browser() {
	    
		closeBrowser();
	}

}
