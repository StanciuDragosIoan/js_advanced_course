/*
	Hoisting
	
		is the behaviour of moving the variables/function declarations to the top of their
		environment during compilation
		
			vars are partially hoisted and functions fully are hoisted
		
		
		@code:
		
		
		console.log(test); //undefined
		
		test(); //runs properly and is not undefined
		
		function test(){
			//test something..
		}
			
		var test = 'test';
		
		
		
		Initially the JS engine looks through the code and when it sees variable or function declarations
		allocates memory, initially it sets the var test to undefined (as the engine doesn't know what it
		is yet, so it assigns undefined initially)
		
		next it adds the function to memory (every time we call the function it accesses it from memory)
		
		if I declare the function like:
		
		(function test(){
			test something...
		})
		
		it will NOT be hoisted (so if I try to call it I'll get an error);
		
		Note the difference between function declarations and function expressions
		
		Function Declaration:
		
		function test () {
			//test something
		}
		
		--> this is  hoisted (can call it before defining it and if we console.log it, it will be undefined)
		
		Function expression
		
		test();
		console.log(test);
		var test = function() {
			//test something
		}
		
		--> this is NOT  hoisted (can't call it before defining it as it will be 'undefined')
		
		
		console.log(test); //logs an error 'cannot access test before initialization' (NOT hoisted)
		let test = 'test';
		
		console.log(test);
		const test = 'test'; //logs an error 'cannot access test before initialization' (NOT hoisted)
		
		console.log(test);
		var test = 'test'; //logs 'undefined' (hoisted)
		
		

*/
