console.log(1);
console.log(2);
console.log(3);
if (false) {
    console.log(4);
}
console.log(5);
console.log(6);


let num;

// check this condition
if (typeof num !== 'number') {
    // runs if num is NOT a number
    if (num === undefined) {
        console.log("MissingNo#");
    }
    console.log("Gimme a number, you muppet!");
    // if the first was FALSE - checks this condition
} else if (num % 2 === 0) {
    // runs if even
    console.log("Even");
    // runs if previous ifs are ALL false
} else {
    console.log("Odd");
}

num = 8;

if (num > 10 && num % 2 == 0) {
    console.log("Num is greater than 10 AND even");
} else if (num > 10 || num % 2 == 0) {
    console.log("Num is greater than ten OR even");
} else {
    console.log("Num is NEITHER even or greater than ten");
}