/*
    memory leaks = bits of memory that have been used by the program, are not needed
    anymore and have not been 'freed' and returned to the pool of free memory
*/


//block of code that produces a memory leak as it runs an infinite loop
let array = [];
for (let i = 5; i > 1; i++) {
    array.push(i - 1);
}


//typical memory leak examples:




// 1 --> global variables
var a = 1;
var b = 2;
var c = 3;
//var a = added as a variable on the global scope



//2 --> event listeners 
var element = document.getElementById('button');
element.addEventListener('click', onClick);




//3 --> setInterval

setInterval(() => {
    //referencing objects
})

//the objects in set interval are never cleared by the garbage collector