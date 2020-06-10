/*
    in a given function on top of the this keyword and the exeution context we also have a variable environment
*/

function two(){
    var isValid;
}

function one(){
    var isValid = false; //local environment
    two(); //new execution context
}

var isValid = true;
one();


//two() second execution context (local to two()) ->isValid = undefined;
//one() local environment -> isValid = false;
//global space -> isvalid = true; (line 14)


