/*

    Functions

    In JS functions are objects

    when we invoke a function we get 2 params by default (this keyword and arguments keyword)

    \arguments is an array-like object that behaves weird when looped/iterated
*/

function one () {
    console.log(1);
}

one();


const obj = {
    two: () => console.log(2),
}

obj.two();


function three() {
    console.log(3);
}

three.call();

const four = new Function('num','console.log(num);');
four();

//functions are objects
function test() {
    console.log('test');
}

//we can add properties onto them 

test.name = "testFunction";

//they are like some callable objects (they have properties onto them like call/apply/bind)
//they also have properties

//we can pass them around like objects / parameters