package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.LoginPage;
import pageObjects.HomePage;
import pageObjects.ProductListingPage;
import pageObjects.ProductDetailPage;
import pageObjects.CartPage;

public class stepDefinitions {
	WebDriver driver;
	
	LoginPage login;
	HomePage home;
	ProductListingPage productListing;
	ProductDetailPage productDetail;
	CartPage cart;
	
	//@Before
	//public void setup() {
		// Initialize the webdriver and open the browser
		//System.setProperty("webdriver.chrome.driver", "C:\\Users\\ITD-STU\\eclipse-workspace\\libs\\chromedriver.exe");
		//driver = new ChromeDriver();
		//driver.manage().window().maximize();
		//driver.get("https://accounts.bhinneka.com/login");
	//}

	
	@Given("^User navigate to login page$")
	public void User_navigate_to_login_page(){
		// Initialize the webdriver and open the browser

	}

	@When ("^User enter correct username$")
	public void User_enter_correct_username(String email) {
		login = new LoginPage(driver);
		login.setEmail(email);
	}
	
	@And ("^Clicked on Selanjutnya Button$")
	public void Clicked_on_Selanjutnya_Button() {
		login = new LoginPage(driver);
		login.clickNext();
	}
	
	@Then ("^Password form should be displayed$")
	public void Password_form_should_be_displayed() {
		
	}
	
	@When ("^User enter correct password$")
	public void User_enter_correct_password(String password) {
		login = new LoginPage(driver);
		login.setPassword(password);
	}
	
	@And ("^Clicked on Masuk Button$")
	public void Clicked_on_Masuk_Button() {
		login = new LoginPage(driver);
		login.clickLogin();				
	}
	
	
	@Given ("^User search for Lenovo Laptop$")
	public void User_search_for_Lenovo_Laptop(String product) {
		home = new HomePage(driver);
		home.perform_search(product);
	}
	
	@And ("^User clicks the first laptop that appears in the search result$")
	public void User_clicks_the_first_laptop_that_appears_in_the_search_result(int productNumber) {
		productListing = new ProductListingPage(driver);
		productListing.select_product(productNumber);
	}
	
	@Then ("^Laptop product detail page should be displayed$")
	public void Laptop_product_detail_page_should_be_displayed() {
		
	}
	
	@When ("^User clicks icon plus on the quantity of product$")
	public void User_clicks_icon_plus_on_the_quantity_of_product() {
		productDetail = new ProductDetailPage(driver);
		productDetail.add_qty();
	}
	
	@And ("^product doesnt have maximum number of purchases$")
	public void product_doesnt_have_maximum_number_of_purchases() {
		productDetail = new ProductDetailPage(driver);
        Assert.assertFalse(productDetail.max_qtyText().contains("Anda sudah mencapai maksimal pembelian"));
	}
	
	@Then ("^the product quantity will be increased$")
	public void the_product_quantity_will_be_increased() {
		productDetail = new ProductDetailPage(driver);
		int qty = Integer.parseInt(productDetail.quantity()) + 1;
		Assert.assertEquals(qty, productDetail.quantity());
	}
	
	@When ("^User clicks icon minus on the quantity of product$")
	public void User_clicks_icon_minus_on_the_quantity_of_product() {
		productDetail = new ProductDetailPage(driver);
		productDetail.subs_qty();
	}
	
	@And ("^product quantity is bigger than 1$")
	public void product_quantity_is_bigger_than_1() {
		productDetail = new ProductDetailPage(driver);
		int qty = Integer.parseInt(productDetail.quantity());
		Assert.assertNotEquals(qty, 1);
	}
	
	@Then ("^the product quantity will be decreased$")
	public void the_product_quantity_will_be_decreased() {
		productDetail = new ProductDetailPage(driver);
		int qty = Integer.parseInt(productDetail.quantity()) - 1;
		Assert.assertEquals(qty, productDetail.quantity());
	}
		
	@And ("^User clicked on Tambah ke Keranjang Button$")
	public void User_clicked_on_Tambah_ke_Keranjang_Button() {
		productDetail = new ProductDetailPage(driver);
		productDetail.clickon_AddToCart();
	}
	
    @Then ("^User cart should display with added item$")
    public void User_cart_should_display_with_added_item() {
    	
    }
    
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	@Given ("^User navigate to product category")
	public void User_navigate_to_product_category() {
		
	}
	
  	@And ("^User hover to Technology and Communication category and select Computer or Laptop")
	public void User_hover_to_Technology_and_Communication_category_and_select_Computer_or_Laptop(){
  		
  	}
  	
  	@Then ("^Computer product page will be displayed and there is filter option")
	public void Computer_product_page_will_be_displayed_and_there_is_filter_option() {
  		
  	}
  	
  	@When ("^User selected some filter option")
	public void User_selected_some_filter_option() {
  		productListing = new ProductListingPage(driver);
  		productListing.filter(true);
  	}
  	
  	@Then ("^Computer product page should be displayed product that match with the filter option")
	public void Computer_product_page_should_be_displayed_product_that_match_with_the_filter_option() {
  		
  	}
  	
  	@And ("^User clicks the first laptop that appears in the computer product page")
	public void User_clicks_the_first_laptop_that_appears_in_the_computer_product_page() {
  		productListing = new ProductListingPage(driver);
  		productListing.select_product(1);
  	}
  	
 
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	@Given ("^User navigate to promo or flash sale product part in the home page")
  	public void User_navigate_to_promo_or_flash_sale_product_part_in_the_home_page() {
  		
  	}
  	
  	@And ("^User clicks the first promo that appears in the flash sale product part")
  	public void User_clicks_the_first_promo_that_appears_in_the_flash_sale_product_part() {
  		
  	}
  	
  	@Then ("^flash sale product list should be displayed")
  	public void flash_sale_product_list_should_be_displayed() {
  		
  	}
  	
  	@When ("^User clicks the first product that appears in the flash sale product list")
  	public void User_clicks_the_first_product_that_appears_in_the_flash_sale_product_list() {
  		
  	}
  	
  	@Then ("^product detail should be displayed")
  	public void product_detail_should_be_displayed() {
  		
  	}
  
}
