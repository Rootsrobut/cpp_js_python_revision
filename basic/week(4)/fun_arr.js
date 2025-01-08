// function functionName(parameter1, parameter2, ...) {
//     return value; 
// }

function add(a, b) {
    return a + b;
}
function createObject() {
    return { name: "John", age: 25 };
}
function getArray() {
    return [1, 2, 3];
}
function getFunction() {
    return function (x) {
        return x * x;
    };
}
function doNothing() {
    console.log("This does nothing!");
}

// Array 
// dynamic and not stored in contiguous memory locations. 
// Instead, they are objects with key-value pairs where keys are indices.
// Memory addresses are abstracted, so you cannot directly calculate memory locations.

let age = [10, 14, 16, 18, 19];

console.log("First element:", age[0]);
console.log("Second element:", age[1]);
console.log("Third element:", age[2]);


