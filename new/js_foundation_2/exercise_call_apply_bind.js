const array = [1,2,3];
 
function getMaxNumber(arr){
    console.log(Math.max(...arr));
    console.log(Math.max.apply(null, arr));
    console.log(Math.max.call(null, ...arr));
    console.log([...arr]);
    console.log(arr);
  //code here  
}
 
getMaxNumber(array) // should return 3