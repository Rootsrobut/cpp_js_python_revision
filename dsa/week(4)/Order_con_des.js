class Vehicle {
    #maxSpeed
    constructor(z) {
        console.log("Vehicle's Parametrized constructor");
        this.#maxSpeed = z; 
        this._numTyres = undefined;
        this.color = undefined;
    }
    destructor() {
        console.log("Vehicle's Destructor");
    }
}
class Car extends Vehicle {
    constructor(x, y) {
        super(x); 
        console.log("Car's constructor");
        this.numGears = y;
    }
    destructor() {
        console.log("Car's Destructor");
        super.destructor();
    }
    print() {
        console.log("NumTyres:", this.numTyres);
        console.log("Color:", this.color);
        console.log("Num gears:", this.numGears);
    }
}

class HondaCity extends Car {
    constructor(x, y) {
        super(x, y); 
        console.log("Honda city constructor");
    }
    destructor() {
        console.log("Honda city destructor");
        super.destructor();
    }
}


const h = new HondaCity(4, 5);
// To simulate destructors explicitly, call destructor methods
h.destructor();
