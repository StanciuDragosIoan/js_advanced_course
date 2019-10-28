/*
    problem with single threaded/synchronous code = it will be difficult to perform
    long running tasks

    E.G the alert() function

    until I click on the alert button to close it, the browser is frozen, I can't do anything anymore

    in order to improve JS performance, we need to introduce the asynchronous JS code (so we can do multiple
    things at a time)

        the Event Loop and the callback queue

*/