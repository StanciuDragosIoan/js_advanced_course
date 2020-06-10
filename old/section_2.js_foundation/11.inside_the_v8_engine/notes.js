/*

    interpreters vs compilers

        interpreters are quick to get up and running (with the interpreter we 
        do not need to convert the code into another language as we do with 
        the compiler) there's no compilation step

        because of this an interpreter is better for a language like JS

        initially JS was designed for the browser (it had to be executed fast
        so interpreters were a natural choice for it)

        con for interpreter (when we run the same code more than once - e.g. 
        in a loop - it can get really slow)

        the compiler helps here (it takes more time to be set up as it has to go through
            all the code, understand it and 'spit' it out in a different language, but the
            compiler will be smart enough -e.g. if it sees same code looped over, it can just
            simplify it, and instead of calling the same function multiple times, it can just 
            replace the funciton call with the returned value - in this case instead of doing
            someCalculation(5,4) 1000 times, it does it once and then replaces the other 999
            calls with 9)
            
            because the compiler does not need to re-run the same step multiple times, it is much faster
            these 'improvements' made by the compiler are called optimizations

        compiler  = slower to set up but code runs faster

        intepreter = easier to set up but code runs slower (especially if we have loops/repeated code)


        in order to get the 'both of best worls' we can combine them (the compiler and the interpreter)
        into a JIT compiler (Just in Time compiler) 
                this is what browsers started doing in the 2000s and this is how engines started to be




        code is parsed, turned into AST (abstract syntax tree) and this code goes to an interpreter
                the code is sent to the interpreter (in the V8 engine the interpreter 'ignition')

                the interpreter takes the AST and spits out bytecode  (bytecode = code that can be interpreted
                by the JS engine)

                next the code gets to the profiler (or the monitor): it watches our code as it runs and makes notes
                on how we can optimize the code (how many times it has been run, what types have been used, how we can optimize this)
                using this profiler as the code runs through the interpreter (which tells the browser what to do), if the same lines of code
                are run a few times we pass some of this code to the JIT compiler because as the code is running, the interpreter will say to the
                profiler 'here's some code for you to optimize', it passes it to the compiler'  (and the compiler will optimize the code)

                the compiler takes the code (as the app is running) and compiles it or modifies it (e.g it replaces the sections where it can be
                improved of the bytecode with optimized machine code) so the optimized machine code is used instead of the slower bytecode

            
        so the speed of our code as it runs through the engine will improve as the profiler and the compiler will constantly monitor and improve 
        the code



        interpreter allows us to run the code right away while the profiler and compiler allow us to make optimizations and that's a JIT compiler

        the compiler for V8 is called 'turbofan'

        previous versions of V8 used 2 JIT compilers 

        by understanding how the engine works, we can run more optimized code by helping the profiler and the compiler through the way we write the code


*/

function someCalculation(x, y) {
  return x + y;
}

for (let i = 0; i < 1000; i++) {
  someCalculation(5, 4); //returns 9
}
