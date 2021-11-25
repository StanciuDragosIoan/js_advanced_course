//memory leaks (pieces of memory that the application has used but has not yet been freed)

let array = [ ];
for(let i = 5; i > 1; i++){
    array.push(i-1);
}


// global variables cause memory leaks
var a = 1;

//event listeners cause memory leaks (as we add them but we don't remove them)
var element = document.getElementById("#btn");
element.addEventListener("click", onCLick); 


//setInterval
setInterval(() => {
    //referencing objects that will never be collected by the garbage collector as they run in a cb
});