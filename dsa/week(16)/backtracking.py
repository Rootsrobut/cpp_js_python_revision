from typing import List

# Rat in a Maze
def is_safe(x: int, y: int, n: int, maze: List[List[int]]) -> bool:
    """
    Check if the current cell is safe to visit.
    
    Args:
    x (int): The current x-coordinate.
    y (int): The current y-coordinate.
    n (int): The size of the maze.
    maze (List[List[int]]): The maze.
    
    Returns:
    bool: True if the cell is safe, False otherwise.
    """
    return 0 <= x < n and 0 <= y < n and maze[x][y] == 1


def solve_maze_util(maze: List[List[int]], x: int, y: int, n: int, result: List[str], path: str) -> None:
    """
    Recursively solve the maze.
    
    Args:
    maze (List[List[int]]): The maze.
    x (int): The current x-coordinate.
    y (int): The current y-coordinate.
    n (int): The size of the maze.
    result (List[str]): The list of possible paths.
    path (str): The current path.
    """
    if x == n - 1 and y == n - 1:
        result.append(path)
        return

    # Mark the current cell as visited
    maze[x][y] = 0

    # Move right
    if is_safe(x, y + 1, n, maze):
        solve_maze_util(maze, x, y + 1, n, result, path + 'R')

    # Move down
    if is_safe(x + 1, y, n, maze):
        solve_maze_util(maze, x + 1, y, n, result, path + 'D')

    # Backtrack: Unmark the current cell
    maze[x][y] = 1


def solve_maze(maze: List[List[int]]) -> List[str]:
    """
    Solve the maze and return all possible paths.
    
    Args:
    maze (List[List[int]]): The maze.
    
    Returns:
    List[str]: The list of possible paths.
    """
    result = []
    n = len(maze)
    if maze[0][0] == 1:
        solve_maze_util(maze, 0, 0, n, result, "")
    return result


# Example usage
maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 0, 0],
    [1, 1, 1, 1]
]

paths = solve_maze(maze)
print("Possible paths for the rat:")
for path in paths:
    print(path)


# Word Search
def dfs(board: List[List[str]], i: int, j: int, word: str, index: int) -> bool:
    """
    Recursively search for the word in the board.
    
    Args:
    board (List[List[str]]): The board.
    i (int): The current x-coordinate.
    j (int): The current y-coordinate.
    word (str): The word to search for.
    index (int): The current index in the word.
    
    Returns:
    bool: True if the word is found, False otherwise.
    """
    if index == len(word):
        return True
    if i < 0 or i >= len(board) or j < 0 or j >= len(board[0]) or board[i][j] != word[index]:
        return False

    temp = board[i][j]
    board[i][j] = '#'  # Mark as visited

    found = dfs(board, i + 1, j, word, index + 1) or \
            dfs(board, i - 1, j, word, index + 1) or \
            dfs(board, i, j + 1, word, index + 1) or \
            dfs(board, i, j - 1, word, index + 1)

    board[i][j] = temp  # Backtrack
    return found


def exist(board: List[List[str]], word: str) -> bool:
    """
    Check if the word exists in the board.
    
    Args:
    board (List[List[str]]): The board.
    word (str): The word to search for.
    
    Returns:
    bool: True if the word exists, False otherwise.
    """
    for i in range(len(board)):
        for j in range(len(board[0])):
            if dfs(board, i, j, word, 0):
                return True
    return False


# Example usage
board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
]
word = "ABCCED"

if exist(board, word):
    print("Word found!")
else:
    print("Word not found!")


# N-Queens
def is_safe_n_queens(row: int, col: int, board: List[List[str]], n: int) -> bool:
    """
    Check if the current position is safe to place a queen.
    
    Args:
    row (int): The current row.
    col (int): The current column.
    board (List[List[str]]): The board.
    n (int): The size of the board.
    
    Returns:
    bool: True if the position is safe, False otherwise.
    """
    # Check column
    for i in range(row):
        if board[i][col] == 'Q':
            return False

    # Check upper-left diagonal
    i, j = row, col
    while i >= 0 and j >= 0:
        if board[i][j] == 'Q':
            return False
        i -= 1
        j -= 1

    # Check upper-right diagonal
    i, j = row, col
    while i >= 0 and j < n:
        if board[i][j] == 'Q':
            return False
        i -= 1
        j += 1

    return True


def solve_n_queens_util(row: int, n: int, board: List[List[str]], result: List[List[List[str]]]) -> None:
    """
    Recursively solve the N-Queens problem.
    
    Args:
    row (int): The current row.
    n (int): The size of the board.
    board (List[List[str]]): The board.
    result (List[List[List[str]]]): The list of solutions.
    """
    if row == n:
        result.append([row[:] for row in board])
        return

    for col in range(n):
        if is_safe_n_queens(row, col, board, n):
            board[row][col] = 'Q'  # Place the queen
            solve_n_queens_util(row + 1, n, board, result)
            board[row][col] = '.'  # Backtrack


def solve_n_queens(n: int) -> List[List[List[str]]]:
    """
    Solve the N-Queens problem and return all possible solutions.
    
    Args:
    n (int): The size of the board.
    
    Returns:
    List[List[List[str]]]: The list of solutions.
    """
    result = []
    board = [['.' for _ in range(n)] for _ in range(n)]
    solve_n_queens_util(0, n, board, result)
    return result


# Example usage
n = 4
solutions = solve_n_queens(n)

print("Solutions for {}-Queens problem:".format(n))
for i, solution in enumerate(solutions):
    print("Solution {}:".format(i + 1))
    for row in solution:
        print(''.join(row))
    print()
