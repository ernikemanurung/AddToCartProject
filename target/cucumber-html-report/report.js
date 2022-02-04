$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Add to cart feature",
  "description": "The purpose of this feature is to test add to cart functionality",
  "id": "add-to-cart-feature",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "User is Logged In",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User navigate to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enter correct email",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Clicked on Selanjutnya Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Password form should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User enter correct password",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Clicked on Masuk Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Home page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.User_navigate_to_login_page()"
});
formatter.result({
  "duration": 424569800,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "stepDefinitions.Clicked_on_Selanjutnya_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.Password_form_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.User_enter_correct_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.Clicked_on_Masuk_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 16,
  "name": "Search a product and add the first product to the user basket with manipulate the quantity of a product",
  "description": "",
  "id": "add-to-cart-feature;search-a-product-and-add-the-first-product-to-the-user-basket-with-manipulate-the-quantity-of-a-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@scenario1"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User search for Lenovo Laptop",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User clicks the first laptop that appears in the search result",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Laptop product detail page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User clicks icon plus on the quantity of product",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "product doesnt have maximum number of purchases",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the product quantity will be increased",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User clicks icon minus on the quantity of product",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "product quantity is bigger than 1",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the product quantity will be decreased",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User clicked on Tambah ke Keranjang Button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User cart should display with added item",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User clicks icon plus on the quantity of product",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "product doesnt have maximum number of purchases",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the product quantity will be increased",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User clicks icon minus on the quantity of product",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "product quantity is bigger than 1",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the product quantity will be decreased",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.User_search_for_Lenovo_Laptop(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.User_clicks_the_first_laptop_that_appears_in_the_search_result(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.Laptop_product_detail_page_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.User_clicks_icon_plus_on_the_quantity_of_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.product_doesnt_have_maximum_number_of_purchases()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.the_product_quantity_will_be_increased()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.User_clicks_icon_minus_on_the_quantity_of_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.product_quantity_is_bigger_than_1()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.the_product_quantity_will_be_decreased()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.User_clicked_on_Tambah_ke_Keranjang_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.User_cart_should_display_with_added_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.User_clicks_icon_plus_on_the_quantity_of_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.product_doesnt_have_maximum_number_of_purchases()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.the_product_quantity_will_be_increased()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.User_clicks_icon_minus_on_the_quantity_of_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.product_quantity_is_bigger_than_1()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.the_product_quantity_will_be_decreased()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "User is Logged In",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User navigate to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enter correct email",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Clicked on Selanjutnya Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Password form should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User enter correct password",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Clicked on Masuk Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Home page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.User_navigate_to_login_page()"
});
formatter.result({
  "duration": 45600,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "stepDefinitions.Clicked_on_Selanjutnya_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.Password_form_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.User_enter_correct_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.Clicked_on_Masuk_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 37,
  "name": "Navigate to the list of category and manipulate the filter",
  "description": "",
  "id": "add-to-cart-feature;navigate-to-the-list-of-category-and-manipulate-the-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@scenario2"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User navigate to product category",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "User hover to Technology and Communication category and select Computer or Laptop",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Computer product page will be displayed and there is filter option",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "User selected some filter option",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "Computer product page should be displayed product that match with the filter option",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "User clicks the first laptop that appears in the computer product page",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Laptop product detail page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "User clicked on Tambah ke Keranjang Button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User cart should display with added item",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.User_navigate_to_product_category()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.User_hover_to_Technology_and_Communication_category_and_select_Computer_or_Laptop()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.Computer_product_page_will_be_displayed_and_there_is_filter_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.User_selected_some_filter_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.Computer_product_page_should_be_displayed_product_that_match_with_the_filter_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.User_clicks_the_first_laptop_that_appears_in_the_computer_product_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.Laptop_product_detail_page_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.User_clicked_on_Tambah_ke_Keranjang_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.User_cart_should_display_with_added_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "User is Logged In",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User navigate to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enter correct email",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Clicked on Selanjutnya Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Password form should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User enter correct password",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Clicked on Masuk Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Home page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.User_navigate_to_login_page()"
});
formatter.result({
  "duration": 48200,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "stepDefinitions.Clicked_on_Selanjutnya_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.Password_form_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.User_enter_correct_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.Clicked_on_Masuk_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 49,
  "name": "Navigate to flash sale product and add minimum 2 product to the cart",
  "description": "",
  "id": "add-to-cart-feature;navigate-to-flash-sale-product-and-add-minimum-2-product-to-the-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@scenario3"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "User navigate to promo or flash sale product part in the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "User clicks the first promo that appears in the flash sale product part",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "flash sale product list should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "User clicks the first product that appears in the flash sale product list",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "product detail should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "User clicked on Tambah ke Keranjang Button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User cart should display with added item",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User clicks icon plus on the quantity of product",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "product doesnt have maximum number of purchases",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the product quantity will be increased",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "User clicks icon minus on the quantity of product",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "product quantity is bigger than 1",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the product quantity will be decreased",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.User_navigate_to_promo_or_flash_sale_product_part_in_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.User_clicks_the_first_promo_that_appears_in_the_flash_sale_product_part()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.flash_sale_product_list_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.User_clicks_the_first_product_that_appears_in_the_flash_sale_product_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.product_detail_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.User_clicked_on_Tambah_ke_Keranjang_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.User_cart_should_display_with_added_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.User_clicks_icon_plus_on_the_quantity_of_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.product_doesnt_have_maximum_number_of_purchases()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.the_product_quantity_will_be_increased()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.User_clicks_icon_minus_on_the_quantity_of_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.product_quantity_is_bigger_than_1()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.the_product_quantity_will_be_decreased()"
});
formatter.result({
  "status": "skipped"
});
});