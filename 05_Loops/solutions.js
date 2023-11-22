

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


// Wed. Extension:
console.log("Abandon all hope ye who enter here.");


// let amount = 200;
// let cost = 46.32;

// let fifties = 0;
// let twenties = 0;
// let tenners = 0;
// let fivers = 0;
// let twoPounds = 0;
// let onePounds = 0;
// let fiftyP = 0;
// let twentyP = 0;
// let tenP = 0;
// let fiveP = 0;
// let twoP = 0;
// let oneP = 0;


// while (amount - cost >= 50) {
//     amount -= 50;
//     fifties++;
// }

// while (amount - cost >= 20) {
//     amount -= 20;
//     twenties++;
// }

// while (amount - cost >= 10) {
//     amount -= 10;
//     tenners++;
// }

// while (amount - cost >= 5) {
//     amount -= 5;
//     fivers++;
// }

// while (amount - cost >= 2) {
//     amount -= 2;
//     twoPounds++;
// }

// while (amount - cost >= 1) {
//     amount -= 1;
//     onePounds++;
// }

// while (amount - cost >= 0.5) {
//     amount -= 0.5;
//     fiftyP++;
// }

// while (amount - cost >= 0.2) {
//     amount -= 0.2;
//     twentyP++;
// }


// while (amount - cost >= 0.1) {
//     amount -= 0.1;
//     tenP++;
// }

// while (amount - cost >= 0.05) {
//     amount -= 0.05;
//     fiveP++;
// }
// while (amount - cost >= 0.02) {
//     amount -= 0.02;
//     twoP++;
// }
// while (amount - cost >= 0.01) {
//     amount -= 0.01;
//     oneP++;
// }


// console.log("Fifties:", fifties);
// console.log("Twenties:", twenties);
// console.log("Tenners:", tenners);
// console.log("Fivers:", fivers);
// console.log("Two Pounds:", twoPounds);
// console.log("One Pounds:", onePounds);
// console.log("Fifty p's:", fiftyP);
// console.log("Twenty p's:", twentyP);
// console.log("Ten p's:", tenP);
// console.log("Five p's:", fiveP);
// console.log("Two p's:", twoP);
// console.log("One p's:", oneP);

const currencies = {
    hundreds: {
        value: 10_000,
        amount:0,
        max: 1
        
    },
    fifties: {
        value: 5_000,
        amount: 0
    },
    twenties: {
        value: 2_000,
        amount: 0
    },
    tenners: {
        value: 1_000,
        amount: 0
    },
    fivers: {
        value: 500,
        amount: 0
    },
    twoPounds: {
        value: 200,
        amount: 0
    },
    onePounds: {
        value: 100,
        amount: 0
    },
    fiftyP: {
        value: 50,
        amount: 0
    },
    twentyP: {
        value: 20,
        amount: 0
    },
    tenP: {
        value: 10,
        amount: 0
    },
    fiveP: {
        value: 5,
        amount: 0
    },
    twoP: {
        value: 2,
        amount: 0
    },
    oneP: {
        value: 1,
        amount: 0
    },
}
amount = 20_000;
cost = 4673;

function getCurrencies() {
    return JSON.parse(JSON.stringify(currencies));
}

function calcChange(cost, amount, _currencies) {
    if (!_currencies) _currencies = getCurrencies();

    for (let currency in _currencies) {
        debugger;
        const currentCurrency = _currencies[currency]
        while (amount - cost > currentCurrency.value) {
            // if i've given the maximum amount of that currency
            // skip to the next currency
            if (currentCurrency.amount === currentCurrency.max) break;
            amount -= currentCurrency.value;
            currentCurrency.amount++;
    
        }
    
        console.log(currency, currentCurrency.amount);
    }
}

