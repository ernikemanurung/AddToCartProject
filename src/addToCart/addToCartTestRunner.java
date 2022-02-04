package addToCart;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions (
		features = "feature",
		plugin = {"pretty", "html:target/cucumber-html-report"},
		glue = "stepDefinitions"
		//tags = {"@scenario1","@scenario2", "@scenario3"}
		)


public class addToCartTestRunner {

}


