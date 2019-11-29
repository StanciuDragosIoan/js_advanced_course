/*
    when a function is called an environment is created for the new scope of the function

    that environment has a field that has its own variable environment + a place that 
    points to the outer scope (which points to its outer scope, etc... till global scope)

    declare a function a() {} in console

    log the window

    look for a and it has a scopes propery (showing only the global scope)
*/