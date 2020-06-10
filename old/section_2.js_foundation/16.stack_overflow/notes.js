/*
    Stack overflow

    if we call multiple functions 1 after the other, they just get added onto the stack, executed
    and popped off the stack 1 after the other


    what if we call multiple nested functions so that we keep growing the stack until we can't do it anymore?
        this is called stack overflow

    e.g. (this is called recursion  - a function calling itself  = recursion)

    function inception(){
        inception();
    }

    inception(); //running this causes a stack overflow and prints the stack trace as an error (stack trace = the order in which
        functions are executed on the stack)

*/