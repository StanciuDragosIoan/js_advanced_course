//1

// function letAdamLogIn() {
//     let arr = [];

//     for(let i = 0; i < 1000000; i ++) {
//         arr.push(i);
//     }

//     return "Adam logged in!";
// }

// function letEvaLogIn() {
//     let arr = [];

//     for(let i = 0; i < 10000; i ++) {
//         arr.push(i);
//     }

//     return "Eva logged in!";
// }


//2

const giveAccessTo = (user) => `${user} logged in!`
function letUserLogIn(user) {
    let arr = [];
        for(let i = 0; i < 1000000; i ++) {
        arr.push(i);
    }

    return giveAccessTo(user);
}



function letAdminLogIn(admin) {
    let arr = [];
        for(let i = 0; i < 5000000; i ++) {
        arr.push(i);
    }

    return giveAccessTo(admin);
}

// 3 

function authenticate(verify){
    let arr = [];
        for(let i = 0; i < verify; i ++) {
        arr.push(i);
    }
    return true;
}


//higher order fn
function letPerson(person, fn) {
    if(person.lvl === 'admin'){
        fn(50000);
    } else if (person.lvl === 'user'){
        fn(500)
    }
    return giveAccessTo(person.name);
}

function sing(person) {
    console.log(`${person.name} can sing`);
}

let person = {
    lvl: 'admin',
    name: 'Sally'
}

console.log(letPerson(person, sing))


const multiplyBy = (num1) => {
    return function(num2) {
       return  num1 * num2;
    }
}

const arrowMultiplyBy = (num1) => (num2) => num1 *num2;

multiplyByTwo = multiplyBy(2);

console.log(arrowMultiplyBy(10)(10));
 