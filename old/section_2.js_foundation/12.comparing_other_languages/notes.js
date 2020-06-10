/*
    an executable file is a .exe file (in windows)
        we dbl click the file and the app starts running

    the .exe files are created by C++
        write some code and compile it to an .exe file ->   g++ program_name.cpp -o program_name //-o = output

    Java uses a JVM (Java Virtual Machine) where it compiles the code into bytecode in the JVM
        unlike a compiled language that has to be compiled for each type of
        computer, a Java Program only needs to be converted to bytecode once
        and that bytecode can be understood by the JVM (that's Y Java has the slogan 'write once run anywhere')

        however bytecode is not native machine code (most computers won't understand it)
            with bytecode we need software (such as the JVM or a JS engine) so we can execute it directly
            we can't run it without an engine or the JVM (for Java)

    JavaScript was initially an interpreted language (initially we had only the SpiderMonkey engine created by Brendan Eich)
        SpiderMonkey would interpret the language but things have evolved, now we use both interpreters and compilers to optimize
        the code

    JS is an interpreted language but it depends on the implementation (we can make an implementation of the JS engine that only
        compiles)

    This is also true when talking about language like python (python can be both run through a compiler and interpreted through something
        like the JVM)

    It all boils down to the implementation
*/