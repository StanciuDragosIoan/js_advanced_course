//IIFE

const test = (function(){
    var test = '2';
    console.log(test);
    return {test};
})(); //can immediately run function expression

const $ = 2;
console.log($);
/*
//cannot immediately run function declaration
function(){
    console.log('123');
}(); //throws err

*/