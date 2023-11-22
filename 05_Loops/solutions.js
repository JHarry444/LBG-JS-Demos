

// Exercise 1.

for (let i = 1; i <= 10; i++) {
    console.log("hello");
}

// Exercise 2.

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

console.log("Ex 3.");

let shelf = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(shelf[0]);
console.log(shelf[1]);
console.log(shelf[2]);
console.log(shelf[3]);
console.log(shelf[4]);
console.log(shelf[5]);

for (let label = 0; label <= 5; label++) {
    console.log("Label:", label);
    console.log("Contents:", shelf[label]);
}



let nums = [123, 4353, 313, 46, 234, 2534, 34, 3454, 35, 4, 54, 54, 5, 43, 4, 5, 345, 345, 43, 53, 5, 345, 34, 34, 5];

for (let iterator = 0; iterator < nums.length; iterator++) {
    if (nums[iterator] % 3 === 0 && nums[iterator] % 5 === 0) {
        console.log("FizzBuzz");
    } else if (nums[iterator] % 3 === 0) {
        console.log("Fizz");
    } else if (nums[iterator] % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(nums[iterator]);
    }

}

console.log("Ex. 4");
for (let index = nums.length - 1; index >= 0; index--) {
    if (nums[index] % 3 === 0 && nums[index] % 5 === 0) {
        console.log("FizzBuzz");
    } else if (nums[index] % 3 === 0) {
        console.log("Fizz");
    } else if (nums[index] % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(nums[index]);
    }

}

const array = ['a', 'b', 'c', 'd', 'e', 'f'];


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

console.log("For-of-loop");
for (let char of array) {
    console.log("Char:", char);
}

// product (times them all together)
const multiplesOf2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

let product = 1;

for (let index = 0; index < multiplesOf2.length; index++) {
    const number = multiplesOf2[index];
    console.log("Num:", number);
    product = product * number;
    console.log("Product:", product);
}

// for (let number of multiplesOf2) {
//     console.log("Number:", number);
//     product = product * number;
// }
console.log("Product:", product);


// Wed Ex. 1
let sum = 0;
for (let num = 1; num <= 10; num++) {
    sum = sum + num;
    console.log("Num:", num);
    console.log("Sum:", sum);
}

console.log("Total:", sum);

// Wed Ex 2.

const nums2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
sum = 0;

for (let index = 0; index < nums2.length; index++) {
    const num = nums2[index];
    sum += num;
    console.log("Num:", num);
    console.log("Sum:", sum);
}

console.log("Total:", sum);

// Wed Ex 3.

sum = 0;

for (const number of nums2) {
    sum = sum + number;
    console.log("Number:", number);
    console.log("Sum:", sum);
}

console.log("Total:", sum);
