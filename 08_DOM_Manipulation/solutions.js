// create an h2
const myHeading = document.createElement("h2");
// set the text of the h2 to 'Solution'
myHeading.textContent = "Solutions";
//  append that to the body
document.body.appendChild(myHeading);
// style the heading using the style property
myHeading.style.transform = "skew(20deg, 5deg)";

for (let i = 1; i <= 10; i++) {
    const newP = document.createElement("p");
    newP.textContent = "Paragraph: " + i;

    if (i % 2 === 0) newP.style.color = "blue";
    else newP.style.color = "Red";

    // newP.style.color = i % 2 === 0 ? "blue" : "red";
    
    document.body.appendChild(newP);
}

function renderElement(tag, text) {
    const newElement = document.createElement(tag);
    newElement.textContent = text;
    document.body.appendChild(newElement);
}

renderElement("h3", "My super sonic sonar radar will help me");