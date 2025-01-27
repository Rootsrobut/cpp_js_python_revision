class Base {
    constructor(baseValue) {
        this._baseValue = _baseValue; 
    }
    display() {
        console.log(`Base class value: ${this._baseValue}`);
    }
    show() {
        throw new Error("Method 'show()' must be implemented in the subclass.");
    }
    static accessBaseValue(obj) {
        console.log(`Accessing Base class protected value: ${obj._baseValue}`);
    }
}
class Derived extends Base {
    #derivedValue
    constructor(baseValue, derivedValue) {
        super(baseValue);
        this.#derivedValue = derivedValue; 
    }

    // Override display method
    display() {
        console.log(`Derived class values: BaseValue = ${this._baseValue}, DerivedValue = ${this.#derivedValue}`);
    }
    // Implement pure virtual function
    show() {
        console.log("Derived class specific implementation of show().");
    }

    // Friend-like function to access Derived class private member
    static accessDerivedValue(obj) {
        console.log(`Accessing Derived class private value: ${obj.#derivedValue}`);
    }
}


const obj = new Derived(10, 20);

const basePtr = obj;
basePtr.display(); 

// Pure virtual function demonstration
obj.show(); // Derived class must implement show()

// Friend-like function demonstration
Base.accessBaseValue(obj); // Access Base's protected member
Derived.accessDerivedValue(obj); // Access Derived's private member
