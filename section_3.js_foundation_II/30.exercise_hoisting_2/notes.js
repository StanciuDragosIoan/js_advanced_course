/*
	Exercise Hoisting 2
	
		 
		var favouriteFood = 'grapes';
		
		var foodThoughts = function () {
			console.log("Original favourite food: " + favouriteFood);  //logs undefined
			
			var favouriteFood = "sushi";
			
			console.log("New favourite food: " + favouriteFood);  //logs sushi
		}
		
		foodThoughts();

		
		
		line 8 logs undefined because hoisting happens on every execution context (on every scope/function
		so at that point in the execution context the favouriteFood var is undefined)
		
		
		usually hoisting is not recommended (we can avoid it by declaring vars with let & const )
		 
*/

