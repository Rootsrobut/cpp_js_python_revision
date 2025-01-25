class Vehicle {
    #maxSpeed; 
    constructor() {
        this.#maxSpeed=undefined;
        this._numTyres = undefined;
        this.color = "";
    }
    
}
class Car extends Vehicle {
    constructor() {
        super();
        this.numGears = undefined; 
    }
    print() {
        console.log("NumTyres: " + this._numTyres); 
        console.log("Color: " + this.color); 
        console.log("Num gears: " + this.numGears);
        //console.log("Max Speed: " + this.#maxSpeed); // Can't access private property
    }
}
const v = new Vehicle();
v.color = "Blue";
// v.#maxSpeed = 100; // Can't access private property
// v._numTyres = 4; // Protected property not accessible

const c = new Car();
c.color = "Black";
// c._numTyres = 4; // Setting "protected" property // Protected property not accessible
c.numGears = 5;
c.print();
