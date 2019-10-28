/*
    Node JS

        engine vs runtime

            a JS file =  music file

            JS engine = composer/musician (can read the music/understand it)

            a JS Runtime = the whole package (musician + instruments to play the music)

        Node JS is a JS runtime built on Chrome's V8 Engine

            Until node we only could run JS in the browser (we had the web API/the event
            loop/callabck queue, etc... but no runtime)

        Ryan Dhal created node js

            unlike the browser, node can do a bit more than simply run tasks in the background (in a
            tab in the browser):

                it can access the filesystem, for instance;

            instead of window, node has a global API (instead of the window API)

                global has setTimeout/setInterval, but also other things/modules

            node is an I/O JS runtime built on top of V8 engine, and it is non blocking/single threaded

            allows the single-threaded model and tasks are passed on to worker threads that do them, then send them
            back as callbacks through the callback queue and event loop to the stack

                PHP for instance creates a new thread to every1 request
                    if the threadpool would be maxed out (memory overused), the request would have to wait for a thread to
                    be available

                Node js changes this paradigm by working asynchronously and passing tasks to the worker threads and then back to
                the stack through the callback queue and the event loop
                    it allows JS to be run on the server

*/
