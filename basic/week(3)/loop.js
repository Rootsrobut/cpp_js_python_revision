for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;  
    }
    if (i === 4) {
        break; 
    }
    console.log(i);
}

let numbers1 = [1, 2, 3, 4, 5];
for (let num of numbers) {
    console.log(num);  
}

let person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
    console.log(key + ": " + person[key]);  
}

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
    console.log(num);  
});


let a = 5, b = 3; // 5 = 0101, 3 = 0011 (binary)

console.log("a & b =", a & b);  // AND: 1
console.log("a | b =", a | b);  // OR:  7
console.log("a ^ b =", a ^ b);  // XOR: 6
console.log("~a =", ~a);        // NOT: -6 (Inverts bits and adds 1 for signed integers)
console.log("a << 1 =", a << 1); // Left shift: 10
console.log("a >> 1 =", a >> 1); // Right shift: 2
