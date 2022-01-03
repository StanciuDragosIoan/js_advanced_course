//closures

//closures = combination of function + the lexical environment
//from which it was declared

//closures = allow functions to access variables from an enclosing scope/enviroment
//even after it leaves the scope in which it was declared

function a() {
  let grandpa = "grandpa";
  return function b() {
    let father = "father";
    return function c() {
      let son = "son";
      return `${grandpa}, ${father}, ${son}`;
    };
  };
}

console.log(a());

console.log(a()());

console.log(a()()());

const boo = (string) => {
  return (name) => {
    return (name2) => {
      console.log(`hi ${string}, ${name}, ${name2}`);
    };
  };
};

boo("test3")("test")("test2");

const booString = boo("hi");

//wait 5 years
const booString2 = booString;
