Feature: Add to cart feature
  The purpose of this feature is to test add to cart functionality
  
  
  Background: User is Logged In
  	Given User navigate to login page
  	When User enter correct email
  	And Clicked on Selanjutnya Button
  	Then Password form should be displayed
  	When User enter correct password
  	And Clicked on Masuk Button
  	Then Home page should be displayed
  	

  @scenario1
  Scenario: Search a product and add the first product to the user basket with manipulate the quantity of a product
    Given User search for Lenovo Laptop
    And User clicks the first laptop that appears in the search result
    Then Laptop product detail page should be displayed
    When User clicks icon plus on the quantity of product
    And product doesnt have maximum number of purchases
    Then the product quantity will be increased
    When User clicks icon minus on the quantity of product
    And product quantity is bigger than 1
    Then the product quantity will be decreased
    And User clicked on Tambah ke Keranjang Button
    Then User cart should display with added item
    When User clicks icon plus on the quantity of product
    And product doesnt have maximum number of purchases
    Then the product quantity will be increased
    When User clicks icon minus on the quantity of product
    And product quantity is bigger than 1
    Then the product quantity will be decreased
    
    
  @scenario2
  Scenario: Navigate to the list of category and manipulate the filter
  	Given User navigate to product category
  	And User hover to Technology and Communication category and select Computer or Laptop
  	Then Computer product page will be displayed and there is filter option
  	When User selected some filter option
  	Then Computer product page should be displayed product that match with the filter option
  	And User clicks the first laptop that appears in the computer product page
  	Then Laptop product detail page should be displayed
    And User clicked on Tambah ke Keranjang Button
    Then User cart should display with added item
  	
  @scenario3
  Scenario:  Navigate to flash sale product and add minimum 2 product to the cart
  	Given User navigate to promo or flash sale product part in the home page
  	And User clicks the first promo that appears in the flash sale product part
  	Then flash sale product list should be displayed
  	When User clicks the first product that appears in the flash sale product list
  	Then product detail should be displayed
  	And User clicked on Tambah ke Keranjang Button
    Then User cart should display with added item
    When User clicks icon plus on the quantity of product
    And product doesnt have maximum number of purchases
    Then the product quantity will be increased
    When User clicks icon minus on the quantity of product
    And product quantity is bigger than 1
    Then the product quantity will be decreased
    
  	
  	
  
