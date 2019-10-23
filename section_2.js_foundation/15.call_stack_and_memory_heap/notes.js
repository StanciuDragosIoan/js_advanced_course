/*
    The call stack and memory heap

    The JS engine mainly does 2 things: reads the code and executes it

    The 2 most important things in the process are: call stack and memory heap

        -we need a place to store our info/data/vars  (memory heap)

        -we need also a place to keep track of what's happening line by line
        so we can run the code in the right order(call stack)

    These 2 elements (call stack and memory heap ) are used by the engine

*/


//call stack and memory heap

const number = 610; //allocate memory for number and make this variable point in the memory heap to the value 610
const string = '_some text_'; //allocate memory for a string var

//allocate memorey for an object and its values
const human = {
    firstName: 'Andrei',
    lastNane: 'Neagoie'
}

function subtractTwo(num) {
    return num - 2;
}

//allocate function to memory 
function calculate() {
    const sumTotal = 4 + 5;

    return subtractTwo(sumTotal);
}

calculate();

/*

    Memory Heap

        memory heap is a  big chunk of available memory (a free store) that is used by the JS engine to store any type data in any order

        it allows to use variables to point to different sotrage ares in the heap memory

*/



/*
    Call Stack

        the call stack is a region in memory that operates in a LIFO mode (last in first out)

        e.g. when I run calculate() the function is added onto the call stack by the engine and executed
            once it finishes execution, it is popped off the stack


        test the code below in chrome:

        function subtractTwo(num) {
            return num - 2;
        }

        //allocate function to memory
        function calculate() {
            const sumTotal = 4 + 5;

            return subtractTwo(sumTotal);
        }

        calculate();


        open chrome
        go to dev tools->sources->snippets
            added new snippet


        added a debugger statement before calculate() call:

        debugger;
        calculate();


        when running the code, we can see that the execution context in the callstack is anonymous (that's what callstack displays in the right tab)

            the debugger stopped before calculate(), now the callstack is anonymous
                move to the next function call (down arrow) twice and we'll have the calculate() context on top
                of the stack, above the anonymous execution context

            move to the next function call (down arrow) again twice and we'll enter the subtractTwo context, and subtractTwo
                will be put on top of the call stack

            move to the next function call again (to calculate() ) and see that when subtractTwo returns, calculate() gets put
                on top of the call stack (and subtractTwo is popped off the call stack - note it disappeard it s not under calculate() on the stack anymore)


        the call stack stores functions and variables as the code executes
            at each entry the state of the stack (also called the stack frame - the 3 stacks *) allows us to know where we at
            in the code and it runs in a LIFO order

        we keep add functions to the stack, and it keeps running and popping them off the stack

        we use the memory heap to point to data that we store (objects/variables)

            all languages have call stacks and memory heaps

        the engines implement the call stack and memory heaps differently

            pritive types are stored on the stack

            reference types are stored in the memory heap

        Whatever is on the top of the callstack is where the JS engine is executing at the given moment


*/