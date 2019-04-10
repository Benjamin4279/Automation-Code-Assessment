describe("Calculate values", function(){
	var val_1 = element(by.name("txt_val_1"));
	var val_2 = element(by.name("txt_val_2"));
	var val_3 = element(by.name("txt_val_3"));
	var val_4 = element(by.name("txt_val_4"));
	var val_5 = element(by.name("txt_val_5"));
	
	it("Should navigate to the exercise_1 website", function(){
		browser.get("https://www.exercise1.com/values");
	});
	
	it("Should be able to enter numerical information to each field", function(){
		element(by.name(val_1)).sendKeys("122,365.24");
		element(by.name(val_1)).sendKeys("599.00");
		element(by.name(val_1)).sendKeys("850,139.99");
		element(by.name(val_1)).sendKeys("23,329.50");
		element(by.name(val_1)).sendKeys("566.27");
		
	});	
	
	it("Should display the result after clicking the submit button", function(){
		element(by.id("submit_button")).click();
		
	});
	
	
});