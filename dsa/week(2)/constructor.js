class Student {
    #age;
    constructor(rollNumber = null, age = null) {
        if (rollNumber !== null && age !== null) {
            console.log("this : ", this);
            console.log("Constructor 3 called !");
            this.#age = age;
            this.rollNumber = rollNumber;
        } else if (rollNumber !== null) {
            console.log("Constructor 2 called !");
            this.rollNumber = rollNumber;
        } else {
            console.log("Constructor called !");
        }
    }
    display() {
        console.log(this.#age, this.rollNumber);
    }
    getAge() {
        return this.#age;
    }
    setAge(a, password) {
        if (password !== 123) {
            return;
        }
        if (a < 0) {
            return;
        }
        this.#age = a;
    }
}
function main() {
    let s5 = new Student();
    s5.display();
    console.log("Parameterized constructors Demo");
    let s7 = new Student(101);
    s7.display();
    let s8 = new Student(20, 1002);
    s8.display();
}
main();

