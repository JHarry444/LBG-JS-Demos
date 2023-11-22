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
    } else if ( num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}

function sum(num, num2) {
    console.log("SUM:", num + num2);
}

sum(12, 24);

// write functions to; subtract, multiply and divide 2 numbers


let nums = [12,545,43,35,35,42];

function arrayMax(array) {
    let max = 0;
    for (let num of array) {
        max = Math.max(max, num);
    }
    console.log(max);
}