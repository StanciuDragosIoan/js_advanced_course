/*
    JS runtime

        -js is a single threaded language (has only 1 stack)
        -if any other program wants to execute something, it has to wait until the previous program finishes
        -if  I want to execute a long task, it will be slow...


        JS runtime helps here (the web borwser works in the background while the synchronous JS code is running)
            it's using the web browser API to communicate and let the JS engine now when it finishes tasks that were running in the background

        The web API comes with the browser
            The APIs are applications that can send http requests/listen to dom events/delay execution/caching or databse storage

            indexedDB = API for storage;

        the browsers help JS run faster/better through the browser API

        the browser APIs run asynchronously (they can work in the background while our single thread keeps doing things)

        the stack functions execute
            once some task required by 1 of the browser API is encountered (e.g. setTimeout), it is passed to the browser API and executed in the background
                once that is done, it is returned as a callback
                    the callback will be pushed onto the execution stack only when the stack is empty (the event loops checks that)


        the event loop checks continously if the callstack is empty and if the whole JS file has been run 
            and if it is, it pusehs the next callback function in the callback queue onto it;
*/

console.log('1');

setTimeout(() => {
    console.log('2');
}, 1000);

console.log('3');

