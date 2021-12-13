/*

Hoisiting = the bahaviour of moving the behaviour of moving the 
            variables or function declarations to the top of their 
            respective environments during compilation (variables
            are partially hoisted, while function declarations are 
            completely hoisted)





*/

console.log("1_____----");

//var is partially hoisted (the engine allocates memo for it and assigns undefined)
// note this works only with var and NOT with let/const
console.log(teddy); //logs undefined

//function is completely hoisted (engine allocates memory + assigns actual value)
console.log(sing()); // hoisting (I can use function here..)
var teddy = "bear";
function sing() {
  console.log("singing..");
}
