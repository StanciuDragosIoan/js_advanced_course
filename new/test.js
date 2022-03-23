function Main() {
  this.NestedA = function () {
    console.log("Hello from A");
  };

  return (this.NestedB = function () {
    console.log("Hello from B");
  });
}

Main2()(); //Hello from B

function Main() {
   NestedA(){
    console.log("Hello from A");
  };

  NestedB(){
    console.log("Hello from B");
  };
}

Main2.NestedB(); //Hello from B
