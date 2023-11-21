// create an array with three names
const arr = ['Jordan', "Cameron", "Elliot"];
// logs out the whole array
console.log(arr);
// logs out the first element
console.log(arr[0]);
// changes the first element
arr[0] = "Jordan Harrison"

arr[3] = "Mike"

console.log(arr[arr.length - 1]);

arr[arr.length] = "Treesa";
// adds anna onto the end
arr.push("Anna");
// removes first element
arr.shift();

console.log(arr);
// adds to start
arr.unshift("Jordan H");
// Remove one element starting at position 1
arr.splice(1, 1);
// Adds cameron in at position 1
arr.splice(1, 0, "Cameron");

