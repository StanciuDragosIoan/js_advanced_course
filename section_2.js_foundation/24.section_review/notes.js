/*
    In this section:
        we understood how the language works fundamentally;

            we learned about the JS engine (how we send a file to it, it runs through jit
            compiler,etc.. to send us optimized code that we can run on our machines)

            we learned about callstack and memory heap (how they are used to run and execute code)

            we focused on the callstack (we use the stack to keep track of where we are in our program)

            we learned about the idea of a single-threaded model (1 call stack/1 memory heap)
                has limitations but beauty and simpicity (we can use the JS runtime to have threads in the background in the browser through the web API or outside the browser through node.js)


    code block:

    setTimeout( () => { console.log('1 is the loneliest number')}, 0)
    Promise.resolve('hi').then( () => console.log('2'));
    console.log('3', 'is a crowd');


    //note execution order:

    3
    2  //promise
    1  /s/etTimeout
*/