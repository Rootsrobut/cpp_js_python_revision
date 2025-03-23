// Min cost path
function minCostPath(input, m, n, i = 0, j = 0) {
    // Base case
    if (i === m - 1 && j === n - 1) {
        return input[i][j];
    }
    if (i >= m || j >= n) {
        return Number.MAX_SAFE_INTEGER;
    }
    // Recursive calls
    const x = minCostPath(input, m, n, i, j + 1);
    const y = minCostPath(input, m, n, i + 1, j + 1);
    const z = minCostPath(input, m, n, i + 1, j);
    // Small Calculation
    const ans = Math.min(x, Math.min(y, z)) + input[i][j];
    return ans;
}

function minCostPathDP(input, m, n) {
    const ans = Array.from({ length: m }, () => Array(n).fill(0));
    ans[m - 1][n - 1] = input[m - 1][n - 1];
    // Last row
    for (let j = n - 2; j >= 0; j--) {
        ans[m - 1][j] = input[m - 1][j] + ans[m - 1][j + 1];
    }
    // Last col
    for (let i = m - 2; i >= 0; i--) {
        ans[i][n - 1] = input[i][n - 1] + ans[i + 1][n - 1];
    }
    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {
            ans[i][j] = input[i][j] + Math.min(ans[i][j + 1], Math.min(ans[i + 1][j + 1], ans[i + 1][j]));
        }
    }
    return ans[0][0];
}

// Memoization approach
function minCostPathBetter(input, m, n, i = 0, j = 0, ans = Array.from({ length: m }, () => Array(n).fill(-1))) {
    if (i === m - 1 && j === n - 1) {
        return input[i][j];
    }
    if (i >= m || j >= n) {
        return Number.MAX_SAFE_INTEGER;
    }
    if (ans[i][j] !== -1) {
        return ans[i][j];
    }
    const x = minCostPathBetter(input, m, n, i + 1, j, ans);
    if (x < Number.MAX_SAFE_INTEGER) {
        ans[i + 1][j] = x;
    }
    const y = minCostPathBetter(input, m, n, i + 1, j + 1, ans);
    if (y < Number.MAX_SAFE_INTEGER) {
        ans[i + 1][j + 1] = y;
    }
    const z = minCostPathBetter(input, m, n, i, j + 1, ans);
    if (z < Number.MAX_SAFE_INTEGER) {
        ans[i][j + 1] = z;
    }
    ans[i][j] = Math.min(x, Math.min(y, z)) + input[i][j];
    return ans[i][j];
}

// LCS (Longest Common Subsequence)
// Bottom-Up DP Approach
function lcsDP(s, t) {
    const m = s.length;
    const n = t.length;
    const output = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] === t[j - 1]) {
                output[i][j] = 1 + output[i - 1][j - 1];
            } else {
                output[i][j] = Math.max(output[i - 1][j], output[i][j - 1]);
            }
        }
    }
    return output[m][n];
}

// Helper function for Memoization
function lcsMemHelper(s, t, output, m, n) {
    if (m === 0 || n === 0) return 0;

    if (output[m][n] !== -1) return output[m][n];
    if (s[m - 1] === t[n - 1]) {
        output[m][n] = 1 + lcsMemHelper(s, t, output, m - 1, n - 1);
    } else {
        const a = lcsMemHelper(s, t, output, m - 1, n);
        const b = lcsMemHelper(s, t, output, m, n - 1);
        output[m][n] = Math.max(a, b);
    }
    return output[m][n];
}

// Top-Down Memoization Approach
function lcsMem(s, t) {
    const m = s.length;
    const n = t.length;
    const output = Array.from({ length: m + 1 }, () => Array(n + 1).fill(-1));
    return lcsMemHelper(s, t, output, m, n);
}

// Recursive Approach (Naive)
function lcs(s, t) {
    if (s.length === 0 || t.length === 0) return 0; // Base case

    if (s[0] === t[0]) {
        return 1 + lcs(s.slice(1), t.slice(1));
    } else {
        const a = lcs(s.slice(1), t);
        const b = lcs(s, t.slice(1));
        return Math.max(a, b);
    }
}

// Recursive Approach (Naive)
function knapsackRecursive(weight, values, n, maxWeight) {
    if (n === 0 || maxWeight === 0) return 0; // Base case

    if (weight[n - 1] > maxWeight) {
        return knapsackRecursive(weight, values, n - 1, maxWeight);
    }

    // Take or don't take the item
    const include = values[n - 1] + knapsackRecursive(weight, values, n - 1, maxWeight - weight[n - 1]);
    const exclude = knapsackRecursive(weight, values, n - 1, maxWeight);

    return Math.max(include, exclude);
}

// Memoization (Top-Down DP)
function knapsackMemoHelper(weight, values, n, maxWeight, dp) {
    if (n === 0 || maxWeight === 0) return 0; // Base case

    if (dp[n][maxWeight] !== -1) return dp[n][maxWeight]; // If already computed

    if (weight[n - 1] > maxWeight) {
        return dp[n][maxWeight] = knapsackMemoHelper(weight, values, n - 1, maxWeight, dp);
    }

    const include = values[n - 1] + knapsackMemoHelper(weight, values, n - 1, maxWeight - weight[n - 1], dp);
    const exclude = knapsackMemoHelper(weight, values, n - 1, maxWeight, dp);

    return dp[n][maxWeight] = Math.max(include, exclude);
}

function knapsackMemo(weight, values, n, maxWeight) {
    const dp = Array.from({ length: n + 1 }, () => Array(maxWeight + 1).fill(-1));
    return knapsackMemoHelper(weight, values, n, maxWeight, dp);
}
