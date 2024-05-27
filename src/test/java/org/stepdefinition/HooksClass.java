package org.stepdefinition;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.reusable.UtilityClass;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HooksClass extends UtilityClass{
	
	@Before
	public void preCondition() {

		launchBrowser("Edge");
		launchUrl("https://www.facebook.com/");
		implitWait();
	}
	
	@After
	private void postCondition(Scenario s) {

		if (s.isFailed()) {
			
			TakesScreenshot ts = (TakesScreenshot)driver;
			byte[] pic = ts.getScreenshotAs(OutputType.BYTES);
			s.embed(pic, "image/png");
			System.out.println("Failed : " + s.getName());
		}
		
		closeBrowser();
	}

}
