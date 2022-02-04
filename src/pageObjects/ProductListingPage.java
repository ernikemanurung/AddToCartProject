package pageObjects;

import java.util.List;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class ProductListingPage {
	public ProductListingPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}
	
	@FindAll(@FindBy(how = How.CSS, using = "css-hxbh7b e1uu5jkk7"))
	private List<WebElement> prd_List;
	
	@FindBy(xpath = "//*[text()='Merek']")
	WebElement merek;
	
	@FindAll(@FindBy(how = How.CSS, using ="css-12obs87"))
	List<WebElement> check;
	
	public void select_product(int productNumber) {
		prd_List.get(productNumber).click();
	}
	
	
	public void filter(Boolean bval) {
		bval = false;   
		// Create a variable which will have boolean value True/False
		bval = check.get(0).isSelected();   // Will return True if box is selected.
		 
		if(bval = true){
			check.get(1).click(); // If the first check box is selected by default, this will select Second check box 
		}
		else
		{
			check.get(0).click(); // If the first check box is not selected by default, the first will be selected
		}
	}
	
	
}
