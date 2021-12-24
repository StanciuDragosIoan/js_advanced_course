/*
    in JS funcitons are first-class citizens

    this means:

    // 1
    they can be assigned to vars/properties

    let stuff = function () {

    }

    // 2 
    they can be passed as arguments into a function

    function a(fn){
        fn();
    }

    a(function() { console.log('test123')});


    // 3 

    we can return functions as values from other functions

    function b() {
        return c() {
            console.log(5);
        }
    }

    b()();
*/