/*
eval()

arguments

for in

with

delete



// inline caching

function findUser(user) {
    return `found ${user.firstName} ${user.lastName}`;
}

const userData = {
    firstName: 'Johnson',
    lastName: 'Junior'
}

findUser(userData);


 // hidden classes

 function Animal(x, y) {
     this.x = x;
     this.y = 1;
 }

 const obj1 = new Animal(1,2);
 const obj2 = new Animal(3,4);

 obj1.a = 30;
 obj1.b = 100;

 obj2.b = 30;
 obj2.a = 100;   //switching order of properties here slows down the compiler (it will
                // re-process the class as it will perceive it as a different class)

the delete keyword also contributes to this (as it removes properties from the class)

web assembly = executable format that is a standard between browsers (it might remove interpreters/compilers in the future)
*/