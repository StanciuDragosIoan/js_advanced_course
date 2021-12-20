// function currying

function multiply(a, b) {
    console.log(a * b);
    return a * b;
}

let multiplyByTwo =  multiply.bind(this, 2);

let multiplyByTen =  multiply.bind(this, 10);
console.log(multiplyByTwo(2));