package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
	WebDriver driver;
	
	@FindBy(id = "searchProduct")
	WebElement keyword;
	
	@FindBy(id = "search_2_")
	WebElement search;
	
	public HomePage(WebDriver driver) {
		this.driver = driver;
		
		PageFactory.initElements(driver, this);
	}
	
	public void perform_search(String strKeyword) {
		keyword.sendKeys(strKeyword);
	}
	
	public void click_search() {
		search.click();
	}
	
	public void home(String strKeyword) {
		this.perform_search(strKeyword);
		this.click_search();
	}
	
}
