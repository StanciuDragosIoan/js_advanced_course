/*
	Execution context
	
		each function has its own execution context (which is created when thefunction is
		called)
		
		The base execution context is the global one
		
		e.g.
		
		
		customFunction()
		global()
		
		
		
		When the JS engine starts the global exectution context gives us:
			the Global Object
			
			and
			
			the 'this'  keyword
			
		the 2 objects are === (in browser this === window will give true)
		
		in node the global object is called Global instead of Window
		
		each new variable that we create gets attached to the global object
		
		so we have 2 basic phases: 
		
			Global Execution Context creation (gives us Global obj and this)
			
			Function execution context (when our code is ran)
		
				
		The Global execution context has 
			a creation phase (when variables are declared)
			the execution phase (code is ran)
			
			

*/
