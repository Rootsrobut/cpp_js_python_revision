const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let arr = [];
let traget = 0;

r1.question('Enter array elements separated by commas: ', (inputArr) => {
    arr = inputArr.split(',').map((x) => Number(x)); 
    r1.question('Enter the target element: ', (inputTarget) => {
        traget = Number(inputTarget); 
        const index = binarySearch(arr, traget);
        if (index !== -1) {
            console.log(`${traget} is present at index ${index}.`);
        } else {
            console.log(`${traget} is not in the array.`);
        }
        r1.close(); 
    });
});
function binarySearch(arr, traget) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === traget) {
            return mid;
        } else if (arr[mid] < traget) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
