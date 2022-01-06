//arrays and functions are objects in JS

// JS uses prototypal inheritance

//inheritance = object getting access to props/methods of another object

//array inherits from object (same as function)

const array = [];
console.log(array.__proto__); //prototype of array
console.log(array.__proto__.__proto__); //the base object that everything in JS gets created from
//array have toString() method
