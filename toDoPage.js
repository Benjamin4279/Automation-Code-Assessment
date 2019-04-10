var toDoPage = require("C:\Users\Benjamin\eclipse-Protractor\Protractor\pageobject.js");

describe("Calculate values", function(){

  it('Should navigate to the exercise1 homepage', function(){

    toDoPage.go();

   });

  it('Should let you add a new task', function(){

    toDoPage.addItem('New Task Item')
	
   });

});