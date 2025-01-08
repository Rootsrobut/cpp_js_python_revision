// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Enter your greet: ", (greet) => {
//   rl.question("Enter your full name: ", (fullname) => {
//     console.log(`${greet}  ${fullname}!`);
//     rl.close(); 
//   });
// });


// // Case 1: [1,2,3,4,5]
// function inputArrayFormat() {
//     let input = prompt().replace(/[\[\]]/g, ''); // Remove brackets
//     let arr = input.split(',').map(Number);
//     return arr;
// }

// // Case 2: 1 2 3 4 5
// function inputSpaceSeparated() {
//     let input = prompt();
//     let arr = input.split(' ').map(Number);
//     return arr;
// }

// // Case 3: 1,2,3,4,5
// function inputCommaSeparated() {
//     let input = prompt();
//     let arr = input.split(',').map(Number);
//     return arr;
// }

// // Case with size not given
// function inputArraySizeNotGiven() {
//     let arr = [];
//     while (true) {
//         let num = prompt();
//         if (num === "") {
//             break;
//         }
//         let numbers = num.split(' ').map(Number);
//         arr = arr.concat(numbers);
//     }
//     return arr;
// }

// function inputArraySizeNotGiven2() {
//     let input = prompt();
//     let arr = input.split(' ').map(Number);
//     return arr;
// }

// // Print the results
// console.log(inputArrayFormat());
// console.log(inputSpaceSeparated());
// console.log(inputCommaSeparated());
// console.log(inputArraySizeNotGiven2());

// Datatype

// let variableName = VALUE;   
// const constantName = VALUE; 
// var oldVariable = VALUE;    

// let age = 25;
// const pi = 3.14;
// var name = "John"; 

// console.log(typeof(age),typeof(pi),typeof(name));



 //Type Casting

//Implicit Conversion

// let result = "5" + 2;  // "52" (string concatenation)
// let num = "10" - 2;    // 8 (string to number)

// Explicit Conversion

// let x = 42;
// let str = String(x);
// let num1 = Number(str); 
// let bool = Boolean(1); 

// let a = 10;
// let b = 3;


// Arithmetic Operations

// console.log("Addition:", a + b);          // 13
// console.log("Subtraction:", a - b);       // 7
// console.log("Multiplication:", a * b);    // 30
// console.log("Division:", a / b);          // 3.3333...
// console.log("Modulus:", a % b);           // 1
// console.log("Exponentiation:", a ** b);   // 10^3 = 1000

// // Increment and Decrement
// let x = 5;
// console.log("Pre-Increment:", ++x);       // 6
// console.log("Post-Increment:", x++);      // 6 (then x becomes 7)
// console.log("Pre-Decrement:", --x);       // 6
// console.log("Post-Decrement:", x--);      // 6 (then x becomes 5)


// Relational Operators
// let a = 5;
// let b = 3;

// console.log("a == b:", a == b);       // false
// console.log("a != b:", a != b);       // true
// console.log("a > b:", a > b);         // true
// console.log("a < b:", a < b);         // false
// console.log("a >= b:", a >= b);       // true
// console.log("a <= b:", a <= b);       // false

// // Strict Equality
// let x = "5";
// console.log("a == x:", a == x);       // true (type coercion)
// console.log("a === x:", a === x);     // false (strict equality checks type)


//Logical Operators

// let a = true;
// let b = false;

// console.log("a && b:", a && b);   // false (AND: both must be true)
// console.log("a || b:", a || b);   // true (OR: at least one is true)
// console.log("!a:", !a);           // false (NOT: inverts the value)

// // Practical Example
// let age = 25;
// let isAdult = age >= 18 && age <= 60;
// console.log("Is Adult:", isAdult);  // true

// let hasLicense = false;
// console.log("Can Drive:", isAdult && hasLicense); // false

// Character Storage

// let c = 'a';
// console.log("ASCII of 'a':", c.charCodeAt(0));
// console.log("'a' + 1:", String.fromCharCode(c.charCodeAt(0) + 1));


