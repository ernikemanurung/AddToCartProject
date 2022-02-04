package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	
	WebDriver driver;
	
	@FindBy(id = "email")
	WebElement email;
	
	@FindBy(id = "next")
	WebElement next;
	
	@FindBy(id = "password")
	WebElement password;
	
	@FindBy(className = "ant-btn ant-btn-primary" )
	WebElement login;
	
	public LoginPage(WebDriver driver) {
		this.driver = driver;
		
		PageFactory.initElements(driver, this);
	}
	
	// Set email in textbox
	public void setEmail(String strEmail) {
		email.sendKeys(strEmail);
	}
	
	// Click on Selanjutnya button
	public void clickNext() {
		next.click();
	}
	
	// Set password in textbox
	public void setPassword(String strPassword) {
		password.sendKeys(strPassword);
	}
	
	// Click on Masuk button
	public void clickLogin() {
		login.click();
	}
	
	public void login(String strEmail, String strPassword) {
		
		// Fill email
		this.setEmail(strEmail);
		
		// Click Selanjutnya button
		this.clickNext();
		
		// Fill password
		this.setPassword(strPassword);
		
		// Click Masuk button
		this.clickLogin();
	}
	
}