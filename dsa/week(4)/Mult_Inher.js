class Student {
    constructor() {
        this.name = "";
    }

    print() {
        console.log("Student");
    }
}

class Teacher {
    constructor() {
        this.name = "";
        this.age = "";
    }

    print() {
        console.log("Teacher");
    }
}

class TA extends Teacher {
    constructor() {
        super(); 
        this.studentName = "";
    }
    print() {
        console.log("TA");
    }
}


const a = new TA();
new Student().print();


a.print();

// Accessing Teacher's properties and method
a.name = "abcd";
a.print(); // Print TA's overridden function
new Teacher().print(); // Explicitly accessing Teacher's print function
