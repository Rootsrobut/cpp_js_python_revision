def fibo(n):
    """
    Calculate the nth Fibonacci number using recursion.
    """
    if n <= 1:
        return n
    a = fibo(n - 1)
    b = fibo(n - 2)
    return a + b


def fibo_helper(n, ans):
    """
    Calculate the nth Fibonacci number using recursion with memoization.
    """
    if n <= 1:
        return n
    # Check if output already exists
    if ans[n] != -1:
        return ans[n]
    # Calculate output
    a = fibo_helper(n - 1, ans)
    b = fibo_helper(n - 2, ans)
    # Save the output for future use
    ans[n] = a + b
    # Return the final output
    return ans[n]


def fibo_2(n):
    """
    Calculate the nth Fibonacci number using recursion with memoization.
    """
    ans = [-1] * (n + 1)
    return fibo_helper(n, ans)


def fibo_3(n):
    """
    Calculate the nth Fibonacci number using dynamic programming.
    """
    ans = [0] * (n + 1)
    ans[1] = 1
    for i in range(2, n + 1):
        ans[i] = ans[i - 1] + ans[i - 2]
    return ans[n]


def min_steps(n):
    """
    Calculate the minimum number of steps to reach 1.
    """
    # Base case
    if n <= 1:
        return 0
    # Recursive call
    x = min_steps(n - 1)
    y = float('inf')
    z = float('inf')
    if n % 2 == 0:
        y = min_steps(n // 2)
    if n % 3 == 0:
        z = min_steps(n // 3)
    # Calculate final output
    ans = min(x, min(y, z)) + 1
    return ans


def min_steps_helper(n, ans):
    """
    Calculate the minimum number of steps to reach 1 using recursion with memoization.
    """
    # Base case
    if n <= 1:
        return 0
    # Check if output already exists
    if ans[n] != -1:
        return ans[n]
    # Calculate output
    x = min_steps_helper(n - 1, ans)
    y = float('inf')
    z = float('inf')
    if n % 2 == 0:
        y = min_steps_helper(n // 2, ans)
    if n % 3 == 0:
        z = min_steps_helper(n // 3, ans)
    output = min(x, min(y, z)) + 1
    # Save output for future use
    ans[n] = output
    return output


def min_steps_2(n):
    """
    Calculate the minimum number of steps to reach 1 using recursion with memoization.
    """
    ans = [-1] * (n + 1)
    return min_steps_helper(n, ans)


def balanced_bts(h):
    """
    Calculate the number of balanced binary trees of height h.
    """
    if h <= 1:
        return 1
    mod = 10**9 + 7
    x = balanced_bts(h - 1)
    y = balanced_bts(h - 2)
    temp1 = (x * x) % mod
    temp2 = (2 * x * y) % mod
    ans = (temp1 + temp2) % mod
    return ans


if __name__ == "__main__":
    n = int(input())
    print(fibo_2(n))
    print(min_steps(n))
    h = int(input())
    print(balanced_bts(h))
