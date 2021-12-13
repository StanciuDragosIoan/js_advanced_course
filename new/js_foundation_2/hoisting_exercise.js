/*

console.log(one);

var one = 1;
var one = 2; //engine ignores 2nd

*/
a(); //logs bye
function a() {
  console.log("hi");
}

function a() {
  console.log("bye");
}
