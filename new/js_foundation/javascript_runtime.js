/*

    JS is single-threaded.

    The JS engine helps us here, the 

    The async request is done in the background while the sync code runs
    in the browser. (The JS engine helps us)

    All browsers have web APIs provided by the JS engine (they all have 
    a )

    the JS runtime implements an event loop that receuves a callback queue from
    the web API/nodeJS API

    the event loop keeps the callbacks in the callback queue till the stack is empty
    and then puts them onto the stack (it checks for the stack to be empty 
        continuously )
*/

console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");
