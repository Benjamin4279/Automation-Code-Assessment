module.exports = {
		toDo: {
			addField: element(by.name("txt_val_1"))
			addField: element(by.name("txt_val_2"))
			addField: element(by.name("txt_val_4"))
			addField: element(by.name("txt_val_5"))
			addField: element(by.name("txt_val_6"))

			addButton: element(by.id("submit_button"))
		},
		
		go: function(){
			browser.get("https://www.exercise1.com/values");
			browser.waitForAngular();
		},
		
		addItem: function(item){
			var todo = this.toDo;
			
			todo.addField.isDisplayed();
			todo.addField.sendKeys(item);
			todo.addButton.click();
		}
}