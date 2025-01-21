// Stack using Array
let stack = [];
stack.push("a");
stack.push("b");
stack.push("c");
console.log(stack[stack.length - 1]); // Top of the stack
stack.pop();

if (stack.length > 0) {
  console.log("true");
} else {
  console.log("false");
}

while (stack.length > 0) {
  stack.pop();
}

// Queue using Array
let queue = [];
queue.push(1);
queue.push(2);
queue.push(3);
queue.shift(); // Pop the front element
console.log(queue[0]); // Front of the queue
console.log(queue[queue.length - 1]); // Back of the queue
console.log(queue.length); // Size of the queue

// Deque using Array
let deque = [];
deque.push(1); // Push to the back
deque.unshift(2); // Push to the front
deque.push(3); // Push to the back
deque.shift(); // Pop from the front
deque.pop(); // Pop from the back

console.log(deque[0]); // Front of the deque
console.log(deque[deque.length - 1]); // Back of the deque

// let s = "PARIKH";
// // Copy substring from index 2, 4 characters long
// let s1 = s.substring(2, 6); // substring from index 2 up to (2+4)
// // Compare s and s1
// if (s1 === s) {
//     console.log(`${s1} is equal to ${s}`);
// } else {
//     console.log(`${s1} is not equal to ${s}`);
// }
// // Substring from index 1, 4 characters long
// let s2 = s.substring(1, 1 + 4);
// console.log(s2); // Prints "ARIK"

// Create a Set
// let s = new Set();
// let arr = [1, 2, 3, 4, 5, 3, 2, 1, 3, 4];
// // Insert elements from the array into the Set
// for (let i = 0; i < arr.length; i++) {
//   s.add(arr[i]);
// }
// // Iterate through the Set and print elements
// for (let value of s) {
//   console.log(value);
// }
// // Check if the element 5 is in the Set
// if (s.has(5)) {
//   console.log("Element found");
// } else {
//   console.log("Element not found");
// }



// let arr = [1, 2, 3, 4, 5, 6, 5];
// let m = new Map();
// // Populate the map with frequency counts
// for (let i = 0; i < arr.length; i++) {
//     m.set(arr[i], (m.get(arr[i]) || 0) + 1);
// }
// // Iterate over the map and print key-value pairs
// for (let [key, value] of m) {
//     console.log(`${key} : ${value}`);
// }
// console.log();
// // Erase the key `1`
// m.delete(1);
// console.log("After erasing key 1:");
// for (let [key, value] of m) {
//     console.log(`${key} : ${value}`);
// }


// let arr = [1, 2, 3, 4, 5, 6, 5];
// let m = {};
// // Count occurrences
// for (let i = 0; i < arr.length; i++) {
//     m[arr[i]] = (m[arr[i]] || 0) + 1;
// }
// // Print the map
// for (let key in m) {
//     console.log(`${key} : ${m[key]}`);
// }
// console.log();
// // Erase the key 1
// delete m[1];
// // Print the updated map
// for (let key in m) {
//     console.log(`${key} : ${m[key]}`);
// }
