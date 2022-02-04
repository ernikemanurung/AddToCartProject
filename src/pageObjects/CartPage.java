package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class CartPage {
	
	public CartPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(name = "shoppingbasket")
	private WebElement btn_Cart;
	
	@FindBy(how = How.CSS, using = "css-lurryv")
	private WebElement btn_Buy;
	
	@FindBy(id = "minus")
	WebElement minus;
	
	@FindBy(id = "plus")
	WebElement plus;
	
	public void clickOn_Cart() {
		btn_Cart.click();
	}
	
	public void clickOn_Buy() {
		btn_Buy.click();
		try { 
			Thread.sleep(5000);
		} catch (InterruptedException e) {}
	}
	
	public void add_qty() {
		plus.click();
	}
	
	public void subs_qty() {
		minus.click();
	}
	
}
