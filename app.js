let myArray = ["Apple","Orange","Mango","Papaya","StrawBerry"];
// const output = document.getElementById('myArray');

function showArray() {
    alert("Current Array: " + myArray);
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

document.getElementById('unshift').addEventListener('click', () => {
    myArray.unshift("Carrot");
    showArray();
});

document.getElementById('delete').addEventListener('click', () => {
        delete myArray [4];
        showArray();
});

document.getElementById('concat').addEventListener('click', () => {
    const newArray = ["2,3,4,5"];
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
    myArray.splice(4);
    showArray();
});
