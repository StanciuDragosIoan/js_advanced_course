/*

*/

var a = 2;
var b = a; //primitives are passed by value (we copy the
// value and we create it somewhere else in memory)

b++;
console.log(b);

//pass by reference (we pass the reference to the same object)
let obj1 = {
    name: 'Yao', password: 123
};

let obj2 = obj1;

obj2.password = 'easypeasy';

// console.log(obj1, obj2);


var c = [1,2,3];

var d = c;
var deepCopyD = [].concat(c);

d.push('test');

console.log(c, d, deepCopyD);

let obj = {
    a: 'a',
    b: 'b',
    c: 'c',
    deep: {
        depth: "I am deep"
    }
};

let copyObj = Object.assign({}, obj); //shallow clones (only first lvl of nesting)

//deep clone
let deepClone = JSON.parse(JSON.stringify(obj))

let copyObj2 = {...obj};

obj.test = 2;
obj.deep.depth = "random"; //this will affect the 2 shallow clones
console.log(obj, copyObj, copyObj2);
console.log(deepClone); //was not affected 