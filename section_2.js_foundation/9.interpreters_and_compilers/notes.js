/*
    Interpreters and compilers

    In programming there are 2 ways to translate code into
    machine-understandable language (machine code): the interpreter and the compiler

    with the interpreter = we translate and read the files (line by line on the fly)

    compiler does not translate on the fly (it works ahead of time, reads all the code
    and translates it into a language that can be understood by the CPU)

*/


//interpreter vs compiler
function someCalculation(x, y) {
    return x + y;
}

for (let i = 0; i < 1000; i++) {
    someCalculation(5, 4); //returns 9 
}


//interpreter will read the code above line by line and execute it

/*

    compiler runs through the code and understands it (takes the program in JS
    and rewrites it in a different language say language X)

    if we interpret the language X, it creates the same result as initial language

    the compiler tries to understand the code, takes it and re-writes it in a lower
    level language (machine code)


*/

/*
        in some respects all languages have to be interpreted and compiled
            in order to run, it has to be interpreted
            in order to be understood by the CPU, it has to be compiled into machine code

        we basically have :

            high lvl languages (like JS)
                interpreter will read the code and interpret it line by line in bytecode
                    *bytecode is somewhere between high lvl code and machine code
                the compiler will take the bytecode and re-write it in machine code
*/


