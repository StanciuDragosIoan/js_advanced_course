/*  

    callStack = keeps track of what code is being executed


    memoryHeap = stores data and variables in meory for our code to use

    const number = 16; //alocate memory for number variable and make it point to the value 16
    const string = 'some string'; 

    const human = {
        name: "John",
        age: 20
    }; //allocate memory for an object


    //callStack

    const subtract = (num) => {
        return num -2;
    }

    const calculate = () => {
        const sum = 4 + 5;
        return extractTwo(sum);
    }

   
    subtract(); //executes first and is popped off the stack
    calculate(); // executes last and is popped off the stack

    //callStack operates in LIFO way (Last in first out)

*/