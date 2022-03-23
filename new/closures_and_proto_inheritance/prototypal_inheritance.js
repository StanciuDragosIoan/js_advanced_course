//arrays and functions are objects in JS

// JS uses prototypal inheritance

//inheritance = object getting access to props/methods of another object

//array inherits from object (same as function)

const array = [];
console.log(array.__proto__); //prototype of array
console.log(array.__proto__.__proto__); //the base object that everything in JS gets created from
//array have toString() method

let human = {
  mortal: true,
};

//inherit from human
let socrates = Object.create(human);
socrates.age = 45;
console.log(socrates.mortal); //logs true (I have the property in socrate's prototype)
console.log(socrates); //we can t see the mortal property in the socrates obj itself, it's only in the prototype
console.log(human.isPrototypeOf(socrates)); //true
