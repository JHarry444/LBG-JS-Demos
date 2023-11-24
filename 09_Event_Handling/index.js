function hello(text) {
    alert(text);
}

function toggle() {
    if (document.body.className === 'light')
        document.body.className = "dark";
    else
        document.body.className = "light";
}

function addText() {
    const myP = document.getElementById("myP");
    myP.textContent = "EVENT HANDLING!!1!!";
}