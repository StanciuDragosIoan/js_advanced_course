function findName() {
  var b = "b";
  return printName();
}

function printName() {
  var c = "c";
  return "test";
}

function sayMyName() {
  var a = "a";
  return findName();
}

sayMyName();

/*
    in JS our lexical scope (available data + variables where 
        the function was defined) determines our available variables.

    The lexical scope is where the function is called;
*/
