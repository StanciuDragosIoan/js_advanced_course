//type coercion

console.log(1 == '1'); //true  (engine will convert string 1 to number)
console.log(1 == '1'); //false (no coercion)
// all languages have type coercion

if(1){ //1 is coerced to true so block runs
    console.log(1);
}

if(0){ //0 is coerced to false so block does not run
    console.log(1);
}

//negative 0

console.log(-0 === +0); //true
Object.is(-0, +0); //false   
console.log(NaN === NaN);//false