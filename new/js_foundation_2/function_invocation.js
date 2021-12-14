// function expression (does not get hoisted)
const test2 = () => console.log("Test123");

// function declaration (gets hoisted)
function test() {
  console.log("test");
}

//function invocation

//function execution
test(); //called at runtime (when we execute it, we declare what the code does)
test2(); // defined at parse  time (when compiler looks at the code, starts hoisting and allocates memory)

//arguments keyword
function marry(p1, p2) {
  console.log(arguments);

  console.log(Array.from(arguments));
  console.log(`${p1} is married to ${p2}`);
}

function marry2(...args) {
  console.log(args);
  console.log(`${args[1]} is married to ${args[0]}`);
  //   const arguments = Array.from(args)
  //   console.log(arguments);
  //   console.log(`${Array.from(...args)[1]} is married to ${Array.from(...args)[1]}`);
}

marry2("Tim", "Tinna");
