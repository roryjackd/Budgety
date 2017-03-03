// BUDGET CONTROLLER
var budgetController = (function() {

	// Some Code

})(); 

//UI CONTROLLER
var UIController = (function(){

	// Some Code

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

	var ctrlAddItems = function() {
		console.log('It works.')
	}


	document.querySelector('.add__btn').addEventListener('click', ctrlAddItems);

	document.addEventListener('keypress', function(event) {
		if (event.keycode === 13 || event.which === 13) {
			ctrlAddItems();
		}
	});

})(budgetController, UIController);