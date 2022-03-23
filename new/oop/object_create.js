// factory functions

//store
const elfFunctions = {
  attack() {
    console.log(`attack with ${this.weapon}`);
  },
};
// function createElf(name, weapon) {
//   return {
//     name,
//     weapon,
//     // attack() {
//     //   console.log(`attack with ${weapon}`);
//     // },
//   };
// }

//Object.create
function createElf(name, weapon) {
  const newElf = Object.create(elfFunctions);
  console.log(newElf.__proto__);
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}

const Peter = createElf("Peter", "stones");
Peter.attack = elfFunctions.attack;
const Sam = createElf("Sam", "fire");
Sam.attack = elfFunctions.attack;
Sam.attack();
Peter.attack();
