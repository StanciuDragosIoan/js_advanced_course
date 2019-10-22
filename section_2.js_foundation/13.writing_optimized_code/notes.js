/*
    we want to write code in a way that helps the compiler make optimizations

    basics to pay attention to:

        functions that call the .eval() function can be problematic

        arguments (we may want to de-structure parameters for optimized code)

        for in loops (we can use object.keys and iterate over object keys)

        the with statement

        the delete keyword


*/



//inline caching:

function findUser(user) {
    return `found ${uer.firstname} ${user.lastName}`
}

const userData = {

    firstName: "Johnson",

    lastName: "Junior"
}

findUser(userData);

/*
    if we call this method multiple times, the inline caching will allow the compiler
    to optimize this by replacing the function call (which looks for the user data)
    with the template string value:`found ${uer.firstname} ${user.lastName}`


*/



//hidden classes:

function Animal(x, y) {

    this.x = x;
    this.y = y;
}

const obj1 = new Animal(1, 2);

const obj2 = new Animal(3, 4);

/*
    if I assign  new properties as per below (in inversed order for the 2 objects)
    this will confuse the compiler and make the code run slowerand this is called 'hidden classes'

    we want to try and instantiate the object properties in the same order so that 'hidden classes'
    which is what the compiler uses under the hood to know that the objects have the same properties but
    if we mix the order, it will not consider the objects as having the same 'hidden class' and that
    will slow things down

    we want to assign all properties of an object in the constructor (in this case a and b) or make sure
    that we add them in the same order
*/

obj1.a = 30;
obj1.b = 100;

obj2.b = 30;
obj2.a = 100;

/*
    the same can happen if I delete a property (now I mess up the 'hidden classes' 
    the objects don't have the same hidden class anymore)

*/

delete obj1.x;

/*
    these above are small quirks for optimizing code, the key point is that code should
    be similarly structured and predictable (for both ppl and machines)

    Optimization takeaways:

    Always instantiate your object properties in the same order so that hidden classes,
    and subsequently optimized code, can be shared.

    Adding properties to an object after instantiation will force a hidden class change
    and slow down any methods that were optimized for the previous hidden class. Instead,
    assign all of an object’s properties in its constructor.

    Code that executes the same method repeatedly will run faster than code that executes
    many different methods only once (due to inline caching).


    links:

    https://richardartoul.github.io/jekyll/update/2015/04/26/hidden-classes.html

    https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
*/