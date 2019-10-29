/*
    This recursive function creates a stack overflow. How can you fix
    this code by still keeping the recursive call around, but only adding
    something that you have learned in this section to not cause this stack overflow.
*/
/*
//my sollution

//fill array with 60000 elements
const list = new Array(6000).join('1.1').split('.');

//new Array(6000); -> builds an array with 6000 empty items (their value is undefined)
//new Array(6000).join('1.1')  -> builds an array of 11 concatenated with . (11.11.11....)
console.log(list);
function removeItemsFromList() {
    var item = list.pop();
    for (let i = 0; i <= list.length; i++) {
        if (item) {
            removeItemsFromList();
        }
    }
};

removeItemsFromList();
*/

// instructor sollution
// const list = new Array(3).join('1.1').split('.');

// function removeItemsFromList() {
//     var item = list.pop();

//     if (item) {
//         setTimeout(removeItemsFromList, 0);
//     }
// };

// removeItemsFromList();

//explanations instructor sollution

/*
    Here setTimeout is used only to make sure that removeItemsFromList() function will
    be called recursively when the call stack is empty.

    The given function is recursively called after execution of the last line [which is - list ]
    or when the Global execution context (which is anonymous ) is popped out from the call stack.

    That's why we are getting a 'list' array where only one item is popped out.

    But actually it will remove all items one by one after the execution of last line (  which is - list;  ) when the Global execution context (which is anonymous ) is popped out from the call stack..
*/




//note below exampel (setTimeout will make the function be called recursively to no end..)

// function test() {
//     setTimeout(test, 1000);
// }

// test();


//note without setTimeout it simply overflows the stack

// function test2() {
//     test2();
// }
// test2();