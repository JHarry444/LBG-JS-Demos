

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
let chars = ['a', 'b', 'c', 'd', 'e'];
// print out each element in the array
console.log(chars[0]);
console.log(chars[1]);
console.log(chars[2]);
console.log(chars[3]);
console.log(chars[4]);
console.log(chars[5]);

// prints each element in a loop
// start -> 0 -> first index
// stop -> 5 -> length - 1
for (let i = 0; i <= 5; i++) {
    console.log(chars[i]);
}
// better to use the length of the array as it will always be accurate
for (let i = 0; i < chars.length; i++) {
    console.log(chars[i]);
}

for (let i = chars.length - 1; i >= 0; i--) {
    console.log(chars[i]);
}