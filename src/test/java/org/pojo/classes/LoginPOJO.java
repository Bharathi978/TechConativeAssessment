package org.pojo.classes;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;
import org.reusable.UtilityClass;

public class LoginPOJO extends UtilityClass {
	
	// 1. Non parametrized constructor
	public LoginPOJO() {

		PageFactory.initElements(driver, this);
	} 
	 
	
	// 2. Private WebElements : WebElement email = driver.findElement(By.id("email"));
	@FindBy(id="email") 
	private WebElement emailTxt;   
	
	@FindBy(xpath="//div[@id='pageFooter']//child::li")
	private List<WebElement> bottomWebelements;
	
	@FindBy(name="pass")
	private WebElement passewordTxt;
	
	
	@FindBy(xpath="//button[text()='Log in']")
	private WebElement loginBtn;
	
	@FindBy(xpath="//div[@class='_9ay7']")
	private WebElement errorPage;
	
	@FindBy(xpath="//span[@class='_akzt']")
	private WebElement incorrectPassword;
	
	@FindBy(xpath="//div[text()='Not Registered']")
	private WebElement notRegister;
	
	@FindBy(xpath="//a[text()='Try another way']")
	private WebElement tryAnotherWay;
	
	@FindBy(xpath="//div[text()='Invalid username or password']")
	private WebElement wrongCredentials;
	
	 
	@FindBys({ // AND operator
		
		@FindBy(xpath="//button[@id='u_0_5_8z']"), 
		@FindBy(xpath="//button[text()='Log in']"),
		@FindBy(xpath="//button[@data-testid='royal_login_button']"),
		@FindBy(xpath="//button[@name='login']")		
	})
	private WebElement loginFindBys;
	
	
	@FindAll({ // OR operator
		
		@FindBy(xpath="//button[@id='u_0_5_8z']"), 
		@FindBy(xpath="//button[text()='Log in']"),
		@FindBy(xpath="//button[@data-testid='royal_login_button']"),
		@FindBy(xpath="//button[@name='login']")
	})
	private WebElement loginFindAll;

	
	
	// 3. Getters to access those private WebElements outside the class
	
	
	
	public WebElement getEmailTxt() { 
		return emailTxt;
	}

	
	public WebElement getWrongCredentials() {
		return wrongCredentials;
	}


	public WebElement getTryAnotherWay() {
		return tryAnotherWay;
	}


	public WebElement getIncorrectPassword() {
		return incorrectPassword;
	}


	public WebElement getNotRegister() {
		return notRegister;
	}


	public WebElement getErrorPage() {
		return errorPage;
	}


	public List<WebElement> getBottomWebelements() {
		return bottomWebelements;
	}


	public WebElement getPassewordTxt() {
		return passewordTxt;
	}

	public WebElement getLoginBtn() {
		return loginBtn;
	}

	public WebElement getLoginFindBys() {
		return loginFindBys;
	}

	public WebElement getLoginFindAll() {
		return loginFindAll;
	}
	
}
