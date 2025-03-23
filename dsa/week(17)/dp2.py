
import sys

# Min cost path
def min_cost_path(input_matrix, m, n, i, j):
    """
    Recursive function to find the minimum cost path.
    
    Args:
    input_matrix (list): 2D list representing the input matrix.
    m (int): Number of rows in the input matrix.
    n (int): Number of columns in the input matrix.
    i (int): Current row index.
    j (int): Current column index.
    
    Returns:
    int: Minimum cost to reach the destination.
    """
    # Base case
    if i == m - 1 and j == n - 1:
        return input_matrix[i][j]
    if i >= m or j >= n:
        return sys.maxsize
    
    # Recursive calls
    x = min_cost_path(input_matrix, m, n, i, j + 1)
    y = min_cost_path(input_matrix, m, n, i + 1, j + 1)
    z = min_cost_path(input_matrix, m, n, i + 1, j)
    
    # Small calculation
    ans = min(x, min(y, z)) + input_matrix[i][j]
    return ans

def min_cost_path_wrapper(input_matrix, m, n):
    """
    Wrapper function to call the recursive function.
    
    Args:
    input_matrix (list): 2D list representing the input matrix.
    m (int): Number of rows in the input matrix.
    n (int): Number of columns in the input matrix.
    
    Returns:
    int: Minimum cost to reach the destination.
    """
    return min_cost_path(input_matrix, m, n, 0, 0)

# Dynamic Programming approach
def min_cost_path_dp(input_matrix, m, n):
    """
    Dynamic programming function to find the minimum cost path.
    
    Args:
    input_matrix (list): 2D list representing the input matrix.
    m (int): Number of rows in the input matrix.
    n (int): Number of columns in the input matrix.
    
    Returns:
    int: Minimum cost to reach the destination.
    """
    # Create a 2D list to store the results
    ans = [[0 for _ in range(n)] for _ in range(m)]
    
    # Initialize the last cell
    ans[m - 1][n - 1] = input_matrix[m - 1][n - 1]
    
    # Fill the last row
    for j in range(n - 2, -1, -1):
        ans[m - 1][j] = input_matrix[m - 1][j] + ans[m - 1][j + 1]
    
    # Fill the last column
    for i in range(m - 2, -1, -1):
        ans[i][n - 1] = input_matrix[i][n - 1] + ans[i + 1][n - 1]
    
    # Fill the rest of the table
    for i in range(m - 2, -1, -1):
        for j in range(n - 2, -1, -1):
            ans[i][j] = input_matrix[i][j] + min(ans[i][j + 1], min(ans[i + 1][j + 1], ans[i + 1][j]))
    
    return ans[0][0]

# Memoization approach
def min_cost_path_better(input_matrix, m, n, i, j, ans):
    """
    Recursive function with memoization to find the minimum cost path.
    
    Args:
    input_matrix (list): 2D list representing the input matrix.
    m (int): Number of rows in the input matrix.
    n (int): Number of columns in the input matrix.
    i (int): Current row index.
    j (int): Current column index.
    ans (list): 2D list to store the results.
    
    Returns:
    int: Minimum cost to reach the destination.
    """
    # Base case
    if i == m - 1 and j == n - 1:
        return input_matrix[i][j]
    if i >= m or j >= n:
        return sys.maxsize
    
    # If already computed
    if ans[i][j] != -1:
        return ans[i][j]
    
    # Recursive calls
    x = min_cost_path_better(input_matrix, m, n, i + 1, j, ans)
    if x < sys.maxsize:
        ans[i + 1][j] = x
    y = min_cost_path_better(input_matrix, m, n, i + 1, j + 1, ans)
    if y < sys.maxsize:
        ans[i + 1][j + 1] = y
    z = min_cost_path_better(input_matrix, m, n, i, j + 1, ans)
    if z < sys.maxsize:
        ans[i][j + 1] = z
    
    # Store the result
    ans[i][j] = min(x, min(y, z)) + input_matrix[i][j]
    return ans[i][j]

def min_cost_path_better_wrapper(input_matrix, m, n):
    """
    Wrapper function to call the recursive function with memoization.
    
    Args:
    input_matrix (list): 2D list representing the input matrix.
    m (int): Number of rows in the input matrix.
    n (int): Number of columns in the input matrix.
    
    Returns:
    int: Minimum cost to reach the destination.
    """
    # Create a 2D list to store the results
    ans = [[-1 for _ in range(n)] for _ in range(m)]
    return min_cost_path_better(input_matrix, m, n, 0, 0, ans)

# Longest Common Subsequence (LCS)
# Bottom-Up Dynamic Programming approach
def lcs_dp(s, t):
    """
    Dynamic programming function to find the length of the longest common subsequence.
    
    Args:
    s (str): First string.
    t (str): Second string.
    
    Returns:
    int: Length of the longest common subsequence.
    """
    m = len(s)
    n = len(t)
    
    # Create a 2D list to store the results
    output = [[0 for _ in range(n + 1)] for _ in range(m + 1)]
    
    # Fill the table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s[i - 1] == t[j - 1]:
                output[i][j] = 1 + output[i - 1][j - 1]
            else:
                output[i][j] = max(output[i - 1][j], output[i][j - 1])
    
    return output[m][n]

# Memoization approach
def lcs_mem_helper(s, t, output, m, n):
    """
    Recursive function with memoization to find the length of the longest common subsequence.
    
    Args:
    s (str): First string.
    t (str): Second string.
    output (list): 2D list to store the results.
    m (int): Current index in the first string.
    n (int): Current index in the second string.
    
    Returns:
    int: Length of the longest common subsequence.
    """
    # Base case
    if m == 0 or n == 0:
        return 0
    
    # If already computed
    if output[m][n] != -1:
        return output[m][n]
    
    # If the current characters match
    if s[m - 1] == t[n - 1]:
        output[m][n] = 1 + lcs_mem_helper(s, t, output, m - 1, n - 1)
    else:
        # If the current characters do not match
        a = lcs_mem_helper(s, t, output, m - 1, n)
        b = lcs_mem_helper(s, t, output, m, n - 1)
        output[m][n] = max(a, b)
    
    return output[m][n]

def lcs_mem(s, t):
    """
    Wrapper function to call the recursive function with memoization.
    
    Args:
    s (str): First string.
    t (str): Second string.
    
    Returns:
    int: Length of the longest common subsequence.
    """
    m = len(s)
    n = len(t)
    
    # Create a 2D list to store the results
    output = [[-1 for _ in range(n + 1)] for _ in range(m + 1)]
    return lcs_mem_helper(s, t, output, m, n)

# Recursive approach (Naive)
def lcs(s, t):
    """
    Recursive function to find the length of the longest common subsequence.
    
    Args:
    s (str): First string.
    t (str): Second string.
    
    Returns:
    int: Length of the longest common subsequence.
    """
    # Base case
    if not s or not t:
        return 0
    
    # If the current characters match
    if s[0] == t[0]:
        return 1 + lcs(s[1:], t[1:])
    else:
        # If the current characters do not match
        a = lcs(s[1:], t)
        b = lcs(s, t[1:])
        return max(a, b)

# Knapsack problem
# Recursive approach (Naive)
def knapsack_recursive(weight, values, n, max_weight):
    """
    Recursive function to find the maximum value that can be put in the knapsack.
    
    Args:
    weight (list): List of weights of the items.
    values (list): List of values of the items.
    n (int): Number of items.
    max_weight (int): Maximum weight the knapsack can hold.
    
    Returns:
    int: Maximum value that can be put in the knapsack.
    """
    # Base case
    if n == 0 or max_weight == 0:
        return 0
    
    # If the weight of the current item is more than the maximum weight
    if weight[n - 1] > max_weight:
        return knapsack_recursive(weight, values, n - 1, max_weight)
    
    # Take or don't take the item
    include = values[n - 1] + knapsack_recursive(weight, values, n - 1, max_weight - weight[n - 1])
    exclude = knapsack_recursive(weight, values, n - 1, max_weight)
    
    return max(include, exclude)

# Memoization approach
def knapsack_memo_helper(weight, values, n, max_weight, dp):
    """
    Recursive function with memoization to find the maximum value that can be put in the knapsack.
    
    Args:
    weight (list): List of weights of the items.
    values (list): List of values of the items.
    n (int): Number of items.
    max_weight (int): Maximum weight the knapsack can hold.
    dp (list): 2D list to store the results.
    
    Returns:
    int: Maximum value that can be put in the knapsack.
    """
    # Base case
    if n == 0 or max_weight == 0:
        return 0
    
    # If already computed
    if dp[n][max_weight] != -1:
        return dp[n][max_weight]
    
    # If the weight of the current item is more than the maximum weight
    if weight[n - 1] > max_weight:
        return dp[n][max_weight] == knapsack_memo_helper(weight, values, n - 1, max_weight, dp)
    
    # Take or don't take the item
    include = values[n - 1] + knapsack_memo_helper(weight, values, n - 1, max_weight - weight[n - 1], dp)
    exclude = knapsack_memo_helper(weight, values, n - 1, max_weight, dp)
    
    # Store the result
    dp[n][max_weight] = max(include, exclude)
    return dp[n][max_weight]

# Example usage
if __name__ == "__main__":
    # Min cost path
    input_matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    m = len(input_matrix)
    n = len(input_matrix[0])
    print("Min cost path (recursive):", min_cost_path_wrapper(input_matrix, m, n))
    print("Min cost path (DP):", min_cost_path_dp(input_matrix, m, n))
    print("Min cost path (memoization):", min_cost_path_better_wrapper(input_matrix, m, n))

    # Longest Common Subsequence (LCS)
    s = "ABCBDAB"
    t = "BDCABA"
    print("LCS (DP):", lcs_dp(s, t))
    print("LCS (memoization):", lcs_mem(s, t))
    print("LCS (recursive):", lcs(s, t))

    # Knapsack problem
    weight = [1, 2, 4, 2, 5]
    values = [5, 3, 5, 3, 2]
    n = len(weight)
    max_weight = 10
    print("Knapsack (recursive):", knapsack_recursive(weight, values, n, max_weight))
    dp = [[-1 for _ in range(max_weight + 1)] for _ in range(n + 1)]
    print("Knapsack (memoization):", knapsack_memo_helper(weight, values, n, max_weight, dp))
