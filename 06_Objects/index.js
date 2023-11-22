// Objects are bundles of data

// Created with {}

// key: value pairs

// can store any data (even other objects or arrays)

const me = {
    name: "Jordan",
    age: 29,
    job: "Senior Software Trainer",
    hobbies: ["Games", "Books", "Java"],
    pets: [],
    dob: "1900-01-01"
}

const cammy = {
    name: "Cameron G",
    age: 30,
    job: "Senior Software Trainer",
    hobbies: ["Games", "Books", "Web Dev"],
    pets: [
        {
            name: "Basil",
            species: "Dog"
        }
    ],
}

const elliot = {
    name: "Elliot",
    age: 27,
    job: "Tech Learning Specialist",
    hobbies: ["Games", "Books", "Music"],
    pets: [],
}

// can put objects in arrays just not like primitives
const trainers = [me, cammy, elliot];


// can access an objects variables with this syntax object.key

console.log("My name:", me.name);

// loop through the array
// trainers[i] finds the trainer OBJECT at that index
// can access the 'attributes' of that object using the object.key syntax
/// i.e. trainers[i].name finds the NAME of the trainer OBJECT at that index
for (let i = 0; i < trainers.length; i++) {
    console.log("I:", i, "Trainer:", trainers[i]);
    console.log("Name:", trainers[i].name);
}

// Can use the shortcut to avoid having to deal with the index at all
for (const trainer of trainers) {
    console.log("Name:", trainer.name);
}

// Can update a value using the object.key syntax
console.log(me);
me.age = 30;
console.log(me);