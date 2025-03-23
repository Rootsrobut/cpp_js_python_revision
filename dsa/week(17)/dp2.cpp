#include <iostream>
#include <climits>
#include<vector>
using namespace std;

// Min cost path
int minCostPath(int **input, int m, int n, int i, int j)
{
    // Base case
    if (i == m - 1 && j == n - 1)
    {
        return input[i][j];
    }
    if (i >= m || j >= n)
    {
        return INT_MAX;
    }
    // Recursive calls
    int x = minCostPath(input, m, n, i, j + 1);
    int y = minCostPath(input, m, n, i + 1, j + 1);
    int z = minCostPath(input, m, n, i + 1, j);
    // Small Calculation
    int ans = min(x, min(y, z)) + input[i][j];
    return ans;
}
int minCostPath(int **input, int m, int n)
{
    return minCostPath(input, m, n, 0, 0);
}

int minCOst_DP(int **input, int m, int n)
{
    int **ans = new int *[m];
    for (int i = 0; i < m; i++)
    {
        ans[i] = new int[n];
    }
    ans[m - 1][n - 1] = input[m - 1][n - 1];
    // Last row
    for (int j = n - 2; j >= 0; j--)
    {
        ans[m - 1][j] = input[m - 1][j] + ans[m - 1][j + 1];
    }
    // Last col
    for (int i = m - 2; i >= 0; i--)
    {
        ans[i][n - 1] = input[i][n - 1] + ans[i + 1][n - 1];
    }
    for (int i = m - 2; i >= 0; i--)
    {
        for (int j = n - 2; j >= 0; j--)
        {
            ans[i][j] = input[i][j] + min(ans[i][j + 1], min(ans[i + 1][j + 1], ans[i + 1]
                                                                                   [j]));
        }
    }
    return ans[0][0];
}

// ​Memoization approach​.
int minCostPath_Better(int **input, int m, int n, int i, int j, int **ans)
{
    if (i == m - 1 && j == n - 1)
    {
        return input[i][j];
    }
    if (i >= m || j >= n)
    {
        return INT_MAX;
    }
    if (ans[i][j] != -1)
    {
        return ans[i][j];
    }
    int x = minCostPath_Better(input, m, n, i + 1, j, ans);
    if (x < INT_MAX)
    {
        ans[i + 1][j] = x;
    }
    int y = minCostPath_Better(input, m, n, i + 1, j + 1, ans);
    if (y < INT_MAX)
    {
        ans[i + 1][j + 1] = y;
    }
    int z = minCostPath_Better(input, m, n, i, j + 1, ans);
    if (z < INT_MAX)
    {
        ans[i][j + 1] = z;
    }
    ans[i][j] = min(x, min(y, z)) + input[i][j];
    return ans[i][j];
}
int minCostPath_Better(int **input, int m, int n)
{
    int **ans = new int *[m];
    for (int i = 0; i < m; i++)
    {
        ans[i] = new int[n];
        for (int j = 0; j < n; j++)
        {
            ans[i][j] = -1;
        }
    }
    return minCostPath_Better(input, m, n, 0, 0, ans);
}
// LCS (Longest Common Subsequence)
// Bottom-Up DP Approach
int lcs_DP(string s, string t) {
    int m = s.size();
    int n = t.size();
    // Dynamic allocation
    vector<vector<int>> output(m + 1, vector<int>(n + 1, 0));

    // Fill DP table
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (s[i - 1] == t[j - 1]) {
                output[i][j] = 1 + output[i - 1][j - 1];
            } else {
                output[i][j] = max(output[i - 1][j], output[i][j - 1]);
            }
        }
    }
    return output[m][n]; 
}

// Helper function for Memoization
int lcs_mem_helper(string s, string t, vector<vector<int>>& output, int m, int n) {
    if (m == 0 || n == 0) return 0; 

    if (output[m][n] != -1) return output[m][n]; 
    if (s[m - 1] == t[n - 1]) {
        output[m][n] = 1 + lcs_mem_helper(s, t, output, m - 1, n - 1);
    } else {
        int a = lcs_mem_helper(s, t, output, m - 1, n);
        int b = lcs_mem_helper(s, t, output, m, n - 1);
        output[m][n] = max(a, b);
    }
    return output[m][n];
}

// Top-Down Memoization Approach
int lcs_mem(string s, string t) {
    int m = s.size();
    int n = t.size();
    vector<vector<int>> output(m + 1, vector<int>(n + 1, -1));
    return lcs_mem_helper(s, t, output, m, n);
}

// Recursive Approach (Naive)
int lcs(string s, string t) {
    if (s.empty() || t.empty()) return 0; // Base case

    if (s[0] == t[0]) {
        return 1 + lcs(s.substr(1), t.substr(1));
    } else {
        int a = lcs(s.substr(1), t);
        int b = lcs(s, t.substr(1));
        return max(a, b);
    }
}

// Recursive Approach (Naïve)
int knapsack_recursive(int *weight, int *values, int n, int maxWeight) {
    if (n == 0 || maxWeight == 0) return 0; // Base case

    if (weight[n - 1] > maxWeight) {
        return knapsack_recursive(weight, values, n - 1, maxWeight);
    }

    // Take or don't take the item
    int include = values[n - 1] + knapsack_recursive(weight, values, n - 1, maxWeight - weight[n - 1]);
    int exclude = knapsack_recursive(weight, values, n - 1, maxWeight);

    return max(include, exclude);
}

// Memoization (Top-Down DP)
int knapsack_memo_helper(int *weight, int *values, int n, int maxWeight, vector<vector<int>> &dp) {
    if (n == 0 || maxWeight == 0) return 0; // Base case

    if (dp[n][maxWeight] != -1) return dp[n][maxWeight]; // If already computed

    if (weight[n - 1] > maxWeight) {
        return dp[n][maxWeight] = knapsack_memo_helper(weight, values, n - 1, maxWeight, dp);
    }

    int include = values[n - 1] + knapsack_memo_helper(weight, values, n - 1, maxWeight - weight[n - 1], dp);
    int exclude = knapsack_memo_helper(weight, values, n - 1, maxWeight, dp);

    return dp[n][maxWeight] = max(include, exclude);
}

// Wrapper function for Memoization
int knapsack_memo(int *weight, int *values, int n, int maxWeight) {
    vector<vector<int>> dp(n + 1, vector<int>(maxWeight + 1, -1));
    return knapsack_memo_helper(weight, values, n, maxWeight, dp);
}

// Bottom-Up DP Approach
int knapsack_dp(int *weight, int *values, int n, int maxWeight) {
    vector<vector<int>> dp(n + 1, vector<int>(maxWeight + 1, 0));

    for (int i = 1; i <= n; i++) {
        for (int w = 0; w <= maxWeight; w++) {
            if (weight[i - 1] > w) {
                dp[i][w] = dp[i - 1][w];
            } else {
                int include = values[i - 1] + dp[i - 1][w - weight[i - 1]];
                int exclude = dp[i - 1][w];
                dp[i][w] = max(include, exclude);
            }
        }
    }
    return dp[n][maxWeight];
}





// Recursive Approach
int editDistance_recursive(string s, string t) {
    if (s.empty()) return t.size();
    if (t.empty()) return s.size();

    if (s[0] == t[0]) {
        return editDistance_recursive(s.substr(1), t.substr(1));
    } else {
        // Insert, Delete, Replace
        int insertOp = editDistance_recursive(s, t.substr(1)) + 1;
        int deleteOp = editDistance_recursive(s.substr(1), t) + 1;
        int replaceOp = editDistance_recursive(s.substr(1), t.substr(1)) + 1;
        
        return min(insertOp, min(deleteOp, replaceOp));
    }
}

// Memoization (Top-Down DP)
int editDistance_memo_helper(string s, string t, vector<vector<int>> &dp) {
    int m = s.size(), n = t.size();

    if (m == 0) return n;
    if (n == 0) return m;

    if (dp[m][n] != -1) return dp[m][n];

    if (s[0] == t[0]) {
        return dp[m][n] = editDistance_memo_helper(s.substr(1), t.substr(1), dp);
    } else {
        int insertOp = editDistance_memo_helper(s, t.substr(1), dp) + 1;
        int deleteOp = editDistance_memo_helper(s.substr(1), t, dp) + 1;
        int replaceOp = editDistance_memo_helper(s.substr(1), t.substr(1), dp) + 1;
        
        return dp[m][n] = min(insertOp, min(deleteOp, replaceOp));
    }
}

// Wrapper function for Memoization
int editDistance_memo(string s, string t) {
    int m = s.size(), n = t.size();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, -1));
    return editDistance_memo_helper(s, t, dp);
}

// Bottom-Up DP Approach
int editDistance_DP(string s, string t) {
    int m = s.size(), n = t.size();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));

    // Fill first row and column
    for (int i = 0; i <= m; i++) dp[i][0] = i;
    for (int j = 0; j <= n; j++) dp[0][j] = j;

    // Fill DP table
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (s[i - 1] == t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                int insertOp = dp[i][j - 1] + 1;
                int deleteOp = dp[i - 1][j] + 1;
                int replaceOp = dp[i - 1][j - 1] + 1;
                dp[i][j] = min(insertOp, min(deleteOp, replaceOp));
            }
        }
    }
    return dp[m][n];
}






















int main()
{
    int m, n;
    cin >> m >> n;
    int **input = new int *[m];
    for (int i = 0; i < m; i++)
    {
        input[i] = new int[n];
        for (int j = 0; j < n; j++)
        {
            cin >> input[i][j];
        }
    }
    cout << minCostPath(input, m, n) << endl;
    string s, t;
    cin >> s >> t;
    cout << "LCS (DP): " << lcs_DP(s, t) << endl;
    cout << "LCS (Memoization): " << lcs_mem(s, t) << endl;
    cout << "LCS (Recursive): " << lcs(s, t) << endl;


    int n, maxWeight;
    cout << "Enter number of items: ";
    cin >> n;
    
    int weight[n], values[n];
    
    cout << "Enter weights: ";
    for (int i = 0; i < n; i++) cin >> weight[i];

    cout << "Enter values: ";
    for (int i = 0; i < n; i++) cin >> values[i];

    cout << "Enter max capacity of knapsack: ";
    cin >> maxWeight;

    cout << "\nKnapsack (Recursive): " << knapsack_recursive(weight, values, n, maxWeight) << endl;
    cout << "Knapsack (Memoization): " << knapsack_memo(weight, values, n, maxWeight) << endl;
    cout << "Knapsack (Bottom-Up DP): " << knapsack_dp(weight, values, n, maxWeight) << endl;


    string s, t;
    cout << "Enter first string: ";
    cin >> s;
    cout << "Enter second string: ";
    cin >> t;

    cout << "\nEdit Distance (Recursive): " << editDistance_recursive(s, t) << endl;
    cout << "Edit Distance (Memoization): " << editDistance_memo(s, t) << endl;
    cout << "Edit Distance (Bottom-Up DP): " << editDistance_DP(s, t) << endl;

    return 0;
}

