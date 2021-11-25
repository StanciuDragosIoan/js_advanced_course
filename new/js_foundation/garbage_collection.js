//garbage collection is automatic in JS but we can still produce memory leaks in our code 

const number = 5;
const string = 'string';
let human = {
    name: "test"
};

human = null; //re-allocate memory for human obj (human at line 5 will be deleted by garbage collector)