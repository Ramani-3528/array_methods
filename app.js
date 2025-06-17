// let myArray = ["Apple","Orange","Mango","Papaya","StrawBerry"];
const input = document.getElementById('inputValue');

function showArray() {
    alert("Current Array: [" + myArray.join() + "]");
}

document.getElementById('string').addEventListener('click', () => {
    alert("toString(): " + myArray.toString());
});

document.getElementById('pop').addEventListener('click', () => {
    myArray.pop();
    showArray();
});

document.getElementById('push').addEventListener('click', () => {
    myArray.push("Potato");
    showArray();
});

document.getElementById('shift').addEventListener('click', () => {
    myArray.shift();
    showArray();
});

document.getElementById('unShift').addEventListener('click', () => {
    myArray=unShift();
    showArray();
});

document.getElementById('delete').addEventListener('click', () => {
        delete myArray [4];
        showArray();
});

document.getElementById('concat').addEventListener('click', () => {
    const newArray = ["14","9","6.2"];
    myArray = myArray.concat(newArray);
    showArray();
});

document.getElementById('filter').addEventListener('click', () => {
    myArray = myArray.filter(item => !isNaN(item));
    showArray();
});

document.getElementById('sort').addEventListener('click', () => {
    myArray.sort();
    showArray();
});

document.getElementById('reverse').addEventListener('click', () => {
    myArray.reverse();
    showArray();
});

document.getElementById('slice').addEventListener('click', () => {
    const sliced = myArray.slice(1, 3);
    alert(sliced);
});

document.getElementById('splice').addEventListener('click', () => {
    myArray.splice(1, 5, "Potato");
    showArray();
});
