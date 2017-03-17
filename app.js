// BUDGET CONTROLLER /////////////////////////////////////////
var budgetController = (function() {

	var Expense = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var Income = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		}
	}

})(); 




//UI CONTROLLER ////////////////////////////////////////////
var UIController = (function(){

	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn'
	}



	return {
		getinput: function () {
			return {
                type: document.querySelector(DOMstrings.inputType).value, //Will be either inc or exp
			    description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
			};
        },

        getDOMstrings: function () {
			return DOMstrings;
        }
	};

})();




// GLOBAL APP CONTROLLER /////////////////////////////////////
var controller = (function(budgetCtrl, UICtrl){

	var setupEventListeners = function() {
		
		var DOM = UICtrl.getDOMstrings();

		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItems);

		document.addEventListener('keypress', function(event) {
			if (event.keycode === 13 || event.which === 13) {
				ctrlAddItems();
			}
		});
	};

	

	var ctrlAddItems = function() {

		//1. Get the field input data
		var input = UICtrl.getinput();


	};

	return {
		init: function() {
			console.log('Application has started.');
			setupEventListeners();
		}
	};
	

})(budgetController, UIController);

controller.init();