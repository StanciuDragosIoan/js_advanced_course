/*

*/

//case 1 JS is weird

// 'use strict';
function weird(){
    height = 50; 
    /*
        var height is defined by default in the global scope (unless declared with var/let/const inside the function) 
        ->uncomment the 'weird strict' directive height variable will not be declared by default in the global scope
    */
    return height;
}

// console.log(weird());



//case 2 JS is weird

var heyhey = function doodle(){
    //do something
    return 'heyhey';
}

// console.log(heyhey()); //logs function

console.log(doodle()); //logs undefined