/*
    Function Scope vs Block Scope

    in JS stuff is usually function scoped

*/

if(5 > 4){
    //global scope (funciton scope)
    var secret = 'superSecret';

    const mySecret = 'mySecret';
} 

console.log(secret); //works
console.log(mySecret); //throws mySecret is not defined err