let human = {
  mortal: true,
};

//inherit from human
const socrates = Object.create(human);
console.log(socrates);
socrates.age = 45;
console.log(socrates.mortal);
