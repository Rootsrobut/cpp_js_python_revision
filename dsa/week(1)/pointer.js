let i = 10;
let p = { value: i }; // Simulate a pointer-like behavior using an object
console.log(p);

// In JavaScript, you can't directly do pointer arithmetic.
// However, for demonstration, we use a simple offset simulation:
p.offset = 2; // Simulate p = p + 2
console.log(`Pointer offset: ${p.offset}`);

p.offset -= 2; // Simulate p = p - 2
console.log(`Pointer reset offset: ${p.offset}`);

let d = 102.3;
let dp = { value: d }; // Simulate pointer behavior for a double
console.log(dp);

// Simulate dp++
dp.increment = 1;
console.log(`Pointer increment: ${dp.increment}`);
