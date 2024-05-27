package org.cucu.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.jvm.report.generate.RepoJvm;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src//test//resources", 
                 glue="org.stepdefinition",
                 monochrome=true,
                 dryRun=false,
                 plugin= {"html:target//HtmlReport", 
                		 "junit:target//JunitReport//junitrepo.xml", 
                		 "json:target//JsonReport//jsonrepo.json"})
public class TestRunner {
	
	@AfterClass
	public static void report() {

		RepoJvm.repoGeneration("C:\\Users\\VISHAL\\eclipse-workspace\\TechConativeProject\\target\\JsonReport\\jsonrepo.json");
	}

}
