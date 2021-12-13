function bigBrother() {
  function littleBrother() {
    return "it is me!";
  }
  return littleBrother();
  function littleBrother() {
    return "no me!";
  }
}

// Before running this code, what do you think the output is?
console.log(bigBrother()); //logs "no me" the engine hoists
//both functions and then runes the code
