/*
    Function Invocation

        function declaration:

            function test(){
                //test something
            }

        function expression (gets hoisted)

        var test = function(){
            //test something
        }

    Function expression gets hoisted, function declaration does not;

    //function invocation/call/execution (js engine will run it and creates an execution context)

    



*/

function testArgs(arg1, arg2){
    console.log(arguments);
    return `${arg1} and ${arg2}`;
}

testArgs('test', 'test2');

//a function returns an arguments object (that's how we access arguments in a function)

//global does not have an 'arguments' object;
 