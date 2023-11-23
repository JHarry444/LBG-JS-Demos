
// creates a new p tag and saves it to the 'newParagraph' variable
const newParagraph = document.createElement("p");
// sets the text inside the new paragraph
newParagraph.textContent = "Hold your horses mikey"
// adds the new paragraph to the body
document.body.appendChild(newParagraph);

// creates a new heading and saves it to the 'newHeading' variable
const newHeading = document.createElement("h1");

// adds the new heading to end of the body
document.body.appendChild(newHeading);

// sets the text inside the new heading
newHeading.textContent = "First heading";
// changes the style attribute of the heading to color it red
newHeading.style.color = "red";
// applies the 'dark' class to the body (styled in the style tag in the html)
document.body.className = 'dark';
// applies the 'light' class to the body (styled in the style tag in the html
document.body.className = 'light';
// don't NEED to save the new element to a variable to add it to the page
document.body.appendChild(document.createElement("input"));


const myBloop = document.getElementById("myBloop");

myBloop.style.fontWeight = "Bold";

const output = document.getElementById("output");


const newP = document.createElement("p");
newP.textContent = "Revenge of the bloops";

output.appendChild(newP);

// could skip the variable:
// document.getElementById("output").appendChild(newP);