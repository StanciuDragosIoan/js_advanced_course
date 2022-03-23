/*

manual object creation

const elf = {
  name: "Orwell",
  weapon: "bow",
  attack() {
    console.log("attack with " + elf.weapon);
  },
};

const elf2 = {
  name: "Sally",
  weapon: "bow",
  attack() {
    console.log("attack with " + elf.weapon);
  },
};

elf2.attack();

*/

// factory functions
function createElf(name, weapon) {
  return {
    name,
    weapon,
    attack() {
      console.log(`attack with ${weapon}`);
    },
  };
}

const Peter = createElf("Peter", "stones");
const Sam = createElf("Sam", "fire");
Sam.attack();
