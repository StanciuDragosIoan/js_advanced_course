function printName() {
  console.log("someName");
}

function findName() {
  return printName(); //returns to findName
}

function sayMyName() {
  return findName(); //returns to global execution context
}

sayMyName();

/*
    each function has its own execution  context  and all the 'contexts' execute in a global execution context

    printName(); //findMyName returns printName call/creates execution context and adds it to stack
    findMyName(); //sayMyName returns findMyName call/creates execution context and adds to stack
    sayMyName(); //create sayMyName execution context and add it to the stack


    //the JS engine creates by default a global execution context

    //global execution context provides us the global object and the this keyword

    //this and global object are the same 
*/
