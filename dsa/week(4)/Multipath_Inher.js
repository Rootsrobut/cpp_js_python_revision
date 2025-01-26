class Vehicle {
    #maxSpeed; 
    constructor(z) {
        console.log(`Vehicle's Parametrized constructor ${z}`);
        this.#maxSpeed = z;
    }
    print() {
        console.log("Vehicle");
    }
}
class Car extends Vehicle {
    constructor() {
        super(3); 
        this.numGears = 0;
        console.log("Car's default constructor");
    }
    print() {
        console.log(`car`);
    }
}

class Truck extends Vehicle {
    constructor() {
        super(4); 
        console.log("Truck's constructor");
    }
}

class Bus extends Car {
    constructor() {
        super(); // Calls Car's constructor

        Vehicle.call(this, 5); // Explicitly calls Vehicle's constructor
		
        console.log("Bus's constructor");
    }
}

// Create a Bus instance
const b = new Bus();
b.print();
