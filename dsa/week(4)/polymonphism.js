// 1. Compile-time polymorphism

// Function Overloading: JavaScript does not support function overloading directly,
// but we can achieve similar behavior using default parameters or arguments object.

function test(a, b) {
    if (a !== undefined && b !== undefined) {
        console.log(`Function with two arguments: a=${a}, b=${b}`);
    } else if (a !== undefined) {
        console.log(`Function with one argument: a=${a}`);
    } else {
        console.log("Function with no arguments");
    }
}

// Demonstrate function behavior
test();
test(5);
test(5, 10);

// 2. Run-time polymorphism
// Function Overriding
class Vehicle {
    constructor(color) {
        this.color = color;
    }

    print() {
        console.log("Vehicle");
    }
}

class Car extends Vehicle {
    constructor(color, numGears) {
        super(color); // Call the parent class constructor
        this.numGears = numGears;
    }

    print() {
        console.log("Car");
    }
}

// Demonstrate function overriding
let v = new Vehicle("Red");
let c = new Car("Blue", 5);

v.print(); // Output: Vehicle
c.print(); // Output: Car

let v1 = new Vehicle("Green");
v1.print(); // Output: Vehicle
