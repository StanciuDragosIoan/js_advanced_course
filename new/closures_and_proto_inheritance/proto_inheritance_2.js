let dragon = {
  name: "Tanya",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire!..`;
    }
  },
};

// console.log(dragon.sing());

let lizard = {
  name: "Kiki",
  fight() {
    return 1;
  },
};

//borrow method from dragon
// const singLizzard = dragon.sing.bind(lizard);
// console.log(singLizzard());

//get proto from dragon
lizard.__proto__ = dragon;
console.log(lizard.sing());
for (let prop in lizard) {
  console.log(prop); //logs all props

  if (lizard.hasOwnProperty(prop)) {
    console.log(prop); //logs only lizard props (fight and name)
  }
}

// console.log(dragon.isPrototypeOf(lizard)); // true (lizard inhertis from  dragon)
// console.log(lizard.isPrototypeOf(dragon)); // false (lizard is not the prototype of dragon)

const obj = {
  name: "Sally",
};

function a() {}

//cal, apply, bind come from __proto__
console.log(a.hasOwnProperty("call"));

const multiplyBy5 = (num) => num * 5;

// __proto__ links up to another __proto__ (the prototype of the base object) which links up to null (it is a null pointer)
