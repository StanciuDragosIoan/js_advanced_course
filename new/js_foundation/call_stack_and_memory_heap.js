/*
 the memory heap is where variables are being allocated to memory (store in memory which we can use)

 the call stack is the place where we keep track of where we are in the code so that we run it in order

 operates first in/last out 



*/

const number = 16; //allocate memory for the number var and make it point to the value 16
const string = 'string'; //allocate memory for string and make it point to the value of 'string'
const human = {
    first: "John",
    last: "Doe"
}

//functions read from the memory heap (simple vars are stored on the stack, and objects/references are stored in the memory heap)
function subtractTwo(num){
    return num - 2;
}

function calculate(){
    const sumTotal = 4 + 5;
    return subtractTwo(sumTotal)
}

calculate(); //