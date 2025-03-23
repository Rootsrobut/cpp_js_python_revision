// Function to calculate Fibonacci number using recursion
function fibo(n) {
    if (n <= 1) {
        return n;
    }
    let a = fibo(n - 1);
    let b = fibo(n - 2);
    return a + b;
}

// Helper function for memoized Fibonacci calculation
function fiboHelper(n, ans) {
    if (n <= 1) {
        return n;
    }
    // Check if output already exists
    if (ans[n] !== -1) {
        return ans[n];
    }
    // Calculate output
    let a = fiboHelper(n - 1, ans);
    let b = fiboHelper(n - 2, ans);
    // Save the output for future use
    ans[n] = a + b;
    // Return the final output
    return ans[n];
}

// Function to calculate Fibonacci number using memoization
function fibo2(n) {
    let ans = new Array(n + 1).fill(-1);
    return fiboHelper(n, ans);
}

// Function to calculate Fibonacci number using dynamic programming
function fibo3(n) {
    let ans = new Array(n + 1);
    ans[0] = 0;
    ans[1] = 1;
    for (let i = 2; i <= n; i++) {
        ans[i] = ans[i - 1] + ans[i - 2];
    }
    return ans[n];
}

// Function to calculate minimum steps to reduce n to 1
function minSteps(n) {
    // Base case
    if (n <= 1) {
        return 0;
    }
    // Recursive call
    let x = minSteps(n - 1);
    let y = Number.MAX_SAFE_INTEGER, z = Number.MAX_SAFE_INTEGER;
    if (n % 2 === 0) {
        y = minSteps(n / 2);
    }
    if (n % 3 === 0) {
        z = minSteps(n / 3);
    }
    // Calculate final output
    let ans = Math.min(x, Math.min(y, z)) + 1;
    return ans;
}

// Helper function for memoized minimum steps calculation
function minStepsHelper(n, ans) {
    // Base case
    if (n <= 1) {
        return 0;
    }
    // Check if output already exists
    if (ans[n] !== -1) {
        return ans[n];
    }
    // Calculate output
    let x = minStepsHelper(n - 1, ans);
    let y = Number.MAX_SAFE_INTEGER, z = Number.MAX_SAFE_INTEGER;
    if (n % 2 === 0) {
        y = minStepsHelper(n / 2, ans);
    }
    if (n % 3 === 0) {
        z = minStepsHelper(n / 3, ans);
    }
    let output = Math.min(x, Math.min(y, z)) + 1;
    // Save output for future use
    ans[n] = output;
    return output;
}

// Function to calculate minimum steps using memoization
function misSteps2(n) {
    let ans = new Array(n + 1).fill(-1);
    return minStepsHelper(n, ans);
}

// Function to calculate the number of balanced binary trees
function balancedBTs(h) {
    if (h <= 1) {
        return 1;
    }
    let mod = Math.pow(10, 9) + 7;
    let x = balancedBTs(h - 1);
    let y = balancedBTs(h - 2);
    let temp1 = (x * x) % mod;
    let temp2 = (2 * x * y) % mod;
    let ans = (temp1 + temp2) % mod;
    return ans;
}

// Main function to test the above functions
function main() {
    let n = parseInt(prompt("Enter a number for Fibonacci and minSteps calculation:"));
    console.log(fibo2(n));
    console.log(minSteps(n));
    let h = parseInt(prompt("Enter the height for balanced BTs calculation:"));
    console.log(balancedBTs(h));
}

// Call the main function
main();
