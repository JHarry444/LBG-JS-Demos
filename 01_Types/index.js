let age = 29;

//log
console.log(age);
// this just USES the value of age
console.log(age + 1);

console.log(age);
// need to use '=' to CHANGE the value of age
age = 30;

console.log(age);

let myName = 'Jordan';

console.log(myName);

myName = "Joseph";

console.log(myName);

let muppet = false;

console.log(muppet);

muppet = true;

console.log(muppet);

let demo;
// undefined as it NEVER HAD A VALUE
console.log(demo);

demo = null;

console.log(demo);
// use typeof to interrogate what type a variable is
console.log(typeof muppet);
// BAD - DO NOT DO
let myexamplevariableisaverylongword;
// GOOD - camelCase (capitalise the first letter of every new word)
let myExampleVariableIsAVeryLongWord;

const myConst = 27;
// cannot reassign a constant
myConst = 28;