//  Ex 1.

// grab the p I'm styling with getElementById
const redP = document.getElementById("redP");
// change its color to red
redP.style.color = "red";

// Ex 2.

// Create a new paragraph
const newP = document.createElement("p");
// Set the text
newP.textContent = "Whatever";
// Append it to myDiv
document.getElementById("myDiv").appendChild(newP);