const readline=require('readline');


const q1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let n=0;
let m=0;
q1.question('Enter the number of row \n',(row)=>{
    q1.question('Enter the number of col',(col)=>{
        n=row;
        m=col;
        q1.close();
    });
});
const pi = 3.14;
function sum(a, b, c = 0) {
    // Here, c is the default argument
    return a + b + c;
}

function main() {
    // Dynamic 2D array creation
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = new Array(m);
    }

    // Freeing the array (JavaScript handles garbage collection automatically)
    arr = null;

    const a = 2, b = 3, c = 4;
    console.log(sum(a, b));       // Here, c will automatically be taken as 0
    console.log(sum(a, b, c));    // As the value of c is provided, the value of c will be 4

    const d = 5;  // Constant in JavaScript
}

main();
