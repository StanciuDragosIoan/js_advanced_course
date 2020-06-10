/*  

    all the functions underneath are written in the global space - NOT inside another function (they have a global lexical environment)

    in JS lexical scope (available data + variables where the function was defined determines our available variables, NOT where the
    function is called - dynamic scope)

    lexical scope is also called static scope

    the scopechain starts where the variable is defined and goes up the scope chain until it reaches the global scope





*/

//snippet 1:

/*
var x = 'x'; //all functions can read the global scope

function findName(){
    var b = 'b';
    return printName();
}

function printName(){
    var c = 'c';

    return 'Andrei';
    
}

function sayMyName(){
    var a = 'a';
    return findName();
}

sayMyName();
*/


//snippet 2:

function sayMyName(){
    var a = 'a';
    return function findName(){
        var b = 'b';
        return function printName(){
            var c = 'c';
            console.log(a);
            return  'test';
        }
    }
}
// console.log(sayMyName());  -> findName()
// console.log(sayMyName()()); ->printName();
  console.log(sayMyName()()()); //  -> 'test';
