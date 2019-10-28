/*
    JS is a garbage-collected language (there's a garbage collector that
    frees up memory that is no longer in use - like after a function finishes running
    all the variables in it are deleted from memory-)

    This prevents memory leaks

    However the garbage collector is not perfect, there can still be errors in the way it works
    so memory chinks may still remain 'un cleaned'

    Languages like C allow for manual memory management which makes them super fast

    the algorithm that performs memory management in JS is called 'mark and sweep'
        it 'marks' the objects/variables that are not needed anymore in the running program
        and it delets them from memory


*/

const number = 610;
const string = 'some text';
let human = {
    firstName: 'John',
    lastName: 'Doe'
}

human = 5; //note the human object above is still in memory..

function subtractTwo(num) {
    return num - 2;
}

function calculate() {
    const sumTotal = 4 + 5;
    return subtractTwo(sumTotal);
}

calculate();