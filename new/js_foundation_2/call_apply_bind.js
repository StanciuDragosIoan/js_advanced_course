/*
    call, apply, bind (methods used to manipulate the this keyword)
*/

//call
const a = () => console.log("test call");

a();
a.call();

//apply
a.apply();


const wizard = {
    name: "Merlin",
    health: 100,
    heal(num1, num2){
        return this.health += num1 + num2;
    }
}


const archer = {
    name: "Robinhood",
    health: 30,
}
wizard.heal();

//call and apply are used to 'borrow' methods

console.log(archer);
wizard.heal.call(archer, 50, 30);//takes arguments
wizard.heal.apply(archer, [150, 30]);//takes array
console.log(archer);

// bind allows us to bind the context (it captures a certain execution context and returns it as a function to be ran) 
const healArcher = wizard.heal.bind(archer, 150, 30);
healArcher();
console.log(archer);