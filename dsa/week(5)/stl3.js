class PriorityQueue {
    constructor(comparator = (a, b) => b - a) {
        this.heap = [];
        this.comparator = comparator;
    }

    push(val) {
        this.heap.push(val);
        this.heap.sort(this.comparator);
    }

    pop() {
        return this.heap.shift();
    }

    top() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    print() {
        console.log(this.heap);
    }
}

// Max-heap
let pqr = new PriorityQueue();
for (let i = 1; i <= 5; i++) {
    pqr.push(i);
}
pqr.print();
console.log(pqr.size(), pqr.top());
pqr.pop();
pqr.print();

// Min-heap
let pq = new PriorityQueue((a, b) => a - b);
for (let i = 1; i <= 5; i++) {
    pq.push(i);
}
pq.print();

// List operations
let li = [];
li.push(10);  // Push back
li.push(20);  // Push back
li.unshift(30);  // Push front
li.unshift(40);  // Push front
li.unshift(50);  // Push front
li.reverse();
console.log("List after reverse:", li);

li.sort((a, b) => a - b);
console.log("List after sorting:", li);

console.log(li.length);  // Size
console.log(li[0]);  // Front
li.shift();  // Pop front
console.log(li[li.length - 1]);  // Back
li.pop();  // Pop back
console.log("Final list:", li);



// Sorting intervals by a custom comparator
const intervals = [
    { st: 6, et: 4 },
    { st: 3, et: 4 },
    { st: 4, et: 6 },
    { st: 8, et: 13 }
];

// Sort intervals by start time (ascending order)
intervals.sort((i1, i2) => i1.st - i2.st);

intervals.forEach(interval => {
    console.log(`${interval.st} : ${interval.et}`);
});

// Sorting and searching in an array
let arr = [1, 3, 2, 5, 7, 6];

// Sort the array in ascending order
arr.sort((a, b) => a - b);
console.log(arr.join(" "));

// Binary search for a specific value
const binarySearch = (arr, target) => {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return true;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
};
console.log(binarySearch(arr, 2));

// Lower bound (first element >= target)
const lowerBound = (arr, target) => {
    let left = 0, right = arr.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) left = mid + 1;
        else right = mid;
    }
    return left;
};
console.log(lowerBound(arr, 3));

// Upper bound (first element > target)
const upperBound = (arr, target) => {
    let left = 0, right = arr.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] <= target) left = mid + 1;
        else right = mid;
    }
    return left;
};
console.log(upperBound(arr, 3));
