package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.tracing.Span;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class ProductDetailPage {
	
	public ProductDetailPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id = "minus")
	WebElement minus;
	
	@FindBy(id = "plus")
	WebElement plus;
	
	@FindBy(how = How.CSS, using = "css-1t6w53m")
	private WebElement btn_AddToCart;
	
	@FindBy(linkText="Anda sudah mencapai maksimal pembelian")
	WebElement maxqty;
	
	@FindBy(name = "quantity")
	WebElement quantity;
	
	
	public void clickon_AddToCart() {
		btn_AddToCart.click();
	}
	
	public void add_qty() {
		plus.click();
	}
	
	public void subs_qty() {
		minus.click();
	}
	
	public String max_qtyText() {
		return maxqty.getText();
	}
	
	public String quantity() {
		return quantity.getText();
	}
	
}
