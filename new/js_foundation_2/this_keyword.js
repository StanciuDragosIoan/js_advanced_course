/*
This keyword

this is the object that the function is the property of (the parent object)

obj.function(this);
*/
 
function test(){
    console.log(this); //global object
}

function test2(){
    'use strict'
    console.log(this); //undefined
}
test2()
// 1 this gives methods access to their parent object

const obj = {
    name: "test",
    sing() {
        return `${this.name} can sing`;
    },

    sing2() {
        return `${this.sing()}  !`;
    }
}


// we can execute the same code for multiple objects
function importantPerson() {
    console.log(this.name);
}

const name = "Sonny";

const obj1 = {
    name: "Cassy",
    importantPerson: importantPerson
}

const obj2 = {
    name: "Jacob",
    importantPerson: importantPerson
}

obj1.importantPerson()

