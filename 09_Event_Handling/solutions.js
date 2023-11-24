

function ex1Add1() {
    document.getElementById("counter1").value++;
}

const counter = document.getElementById("counter");
function minus5() {
    counter.value -= 5;
}

function minus1() {
    counter.value--;
}
function reset() {
    counter.value = 0;
}
function add1() {
    counter.value++;
}
function add5() {
    // trick exploiting the fact two negatives make a positive
    // document.getElementById("counter").value -= -5;
    // document.getElementById("counter").value =
    //     +document.getElementById("counter").value + 5;

    counter.value = +counter.value + 5;
    // can also use the parseInt function but it does the same thing
    // counter.value = parseInt(counter.value) + 5;

}

function changeCount(change) {
    // if R is passed through set the counter to 0
    if (change === 'R')
        counter.value = 0;
    // otherwise add the number to the count
    else
        counter.value = +counter.value + change;
}