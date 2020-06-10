/*
	Lexical Environment
	
		Lexical environment refers to where the code is written (in global context or function context)
		
		each function has its own lexical environment (its own scope) 
		
		lexical = where is the code at compile time 
		
			
			lexical scope = the vailable data/functions/variables where the function was defined
							this determines our 'available' variables
							
			dynamic scope = where the function is called 
			
			the first lexical enviromnett is the global one;
			
			
	Lexical Environment vs Function Scope
	
		Execution Context & Execution Context stack : Execution context is the internal javascript 
		construct to track execution of a function or the global code. 
		
		Lexical Environment : it's the internal js engine construct that holds identifier-variable 
		mapping.
				
		For every execution context 
			-- 1) a corresponding lexical environment is created and 
			-- 2) if any function is created in that execution context, reference to that lexical 
			environment is stored at the internal property ( [[Environment]] ) of that function. 
			
			So, every function tracks the lexical environment related to the execution context it was 
			created in.
			
		
		Scope: dynamic vs lexical
		
		
		'https://medium.com/@osmanakar_65575/javascript-le	xical-and-dynamic-scoping-72c17e4476dd'
		
		Scoping itself is how you search for a variable with a given name. A variable has a scope 
		which is the whole area in which that variable can be accessed by name.
		
		2 models of scope: Lexical scope and Dynamic Scope
		
		Dynamic Scope:
		
			In dynamic scoping, you search in the local function first, then you search in the 
			function that called the local function, then you search in the function that called 
			that function, and so on, up the call-stack.	
			
		side - call stack:
					Call-stack is a mechanism for an interpreter to keep track of its 
					place in a script that calls multiple functions — what function is 
					currently being run and what functions are called from within that function, 
					etc. Stack data structure is LIFO that means, last in first out
			
			
			

*/
