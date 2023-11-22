

let num;

do {
    num = prompt("Gimme a number from one to ten.");
} while (!(num <= 10 && num >=1));
console.log("Num:", num);


console.log("Out of scope?", num);

for (let i = 1; i <= 100; i++) {
    console.log("Hello, World!");
} 

// make an array of characters
let shelf = ['a', 'b', 'c', 'd', 'e'];
// print out each element in the array
console.log(shelf[0]);
console.log(shelf[1]);
console.log(shelf[2]);
console.log(shelf[3]);
console.log(shelf[4]);
console.log(shelf[5]);

// prints each element in a loop
// start -> 0 -> first index
// stop -> 5 -> length - 1
for (let i = 0; i <= 5; i++) {
    console.log(shelf[i]);
}
// better to use the length of the array as it will always be accurate
for (let i = 0; i < shelf.length; i++) {
    console.log(shelf[i]);
}

for (let i = shelf.length - 1; i >= 0; i--) {
    console.log(shelf[i]);
}

let nums = [1,2,3,4,5,6,7,8,89,9,10];

let sum = 0;

for (let i = 0; i < nums.length; i++) {
   debugger;
    let nextNum = nums[i];

    sum += nextNum;
}

console.log("SUM:", sum);


