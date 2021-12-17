/*


*/

const a = function() {
    console.log('a', this); //global
    const b = function() {
        console.log('b', this); // global
        const c = {
            hi:function() {
            console.log('c', this);//c
        }}
        c.hi();
    }
    b();
}

// a(); 

const obj = {
    name: "test",
    sing() {
        console.log('a', this); // global
        var anotherFunction= function() {
            console.log('b', this); // global
        }
    }
}

/*
    in JS our lexical scope (available data + variables where the function was defined)
        determines our available variables Not where the function is called (dynamic scope)
*/