function intros() {
    console.log("Hello! My name is Cameron!");

    console.log("Hello! My name is Jordan!");

    console.log("Hello! My name is Elliot!");
}

console.log("Don't go off topic");

// alert('Hello!');

function intro(name) {
    document.write("Hello! My name is " + name);
}

intro("Jordan");


function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}

function sum(num, num2) {
    return num + num2; // the OUTPUT of this function is num + num2
}

// automatically has a 'return' cos there's no {}
// only works with functions that are a single line
const product = (a, b) => a * b;

// this one has {} so YOU have to add the 'return'
const divide = (a, b) => {
    return a / b;
}

const subtract = function (a, b) {
    return a - b;
}

console.log(typeof subtract); // function variable

console.log(subtract(12, 6));
// can skip the parenthesis around the parameters if there's only one
const print = toPrint => console.log(toPrint);

print("YO");

const mySum = sum(12, 24);

console.log("SUM:", mySum);

const myProduct = product(12, 24);

console.log("Product:", myProduct);

// write functions to; subtract, multiply and divide 2 numbers


let nums = [12, 545, 43, 35, 35, 42];

function arrayMax(array) {
    let max = 0;
    for (let num of array) {
        max = Math.max(max, num);
    }
    console.log(max);
}