
// Rat in a Maze:
function isSafe(x, y, n, maze) {
    return (x >= 0 && x < n && y >= 0 && y < n && maze[x][y] === 1);
}

function solveMazeUtil(maze, x, y, n, result, path) {
    if (x === n - 1 && y === n - 1) {
        result.push(path);
        return;
    }

    // Mark the current cell as visited
    maze[x][y] = 0;

    // Move right
    if (isSafe(x, y + 1, n, maze)) {
        solveMazeUtil(maze, x, y + 1, n, result, path + 'R');
    }

    // Move down
    if (isSafe(x + 1, y, n, maze)) {
        solveMazeUtil(maze, x + 1, y, n, result, path + 'D');
    }

    // Backtrack: Unmark the current cell
    maze[x][y] = 1;
}

function solveMaze(maze) {
    let result = [];
    let n = maze.length;
    if (maze[0][0] === 1) {
        solveMazeUtil(maze, 0, 0, n, result, "");
    }
    return result;
}

let maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 0, 0],
    [1, 1, 1, 1]
];

let paths = solveMaze(maze);
console.log("Possible paths for the rat:");
paths.forEach(path => console.log(path));

// Word Search:

function dfs(board, i, j, word, index) {
    if (index === word.length) return true;
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== word[index]) {
        return false;
    }

    let temp = board[i][j];
    board[i][j] = '#'; // Mark as visited

    let found = dfs(board, i + 1, j, word, index + 1) ||
                dfs(board, i - 1, j, word, index + 1) ||
                dfs(board, i, j + 1, word, index + 1) ||
                dfs(board, i, j - 1, word, index + 1);

    board[i][j] = temp; // Backtrack
    return found;
}

function exist(board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(board, i, j, word, 0)) {
                return true;
            }
        }
    }
    return false;
}

let board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];
let word = "ABCCED";

if (exist(board, word)) {
    console.log("Word found!");
} else {
    console.log("Word not found!");
}

// N-Queens:

function isSafe(row, col, board, n) {
    // Check column
    for (let i = 0; i < row; i++) {
        if (board[i][col] === 'Q') return false;
    }

    // Check upper-left diagonal
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') return false;
    }

    // Check upper-right diagonal
    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === 'Q') return false;
    }

    return true;
}

function solveNQueensUtil(row, n, board, result) {
    if (row === n) {
        result.push(board.map(row => row.join('')));
        return;
    }

    for (let col = 0; col < n; col++) {
        if (isSafe(row, col, board, n)) {
            board[row][col] = 'Q'; // Place the queen
            solveNQueensUtil(row + 1, n, board, result);
            board[row][col] = '.'; // Backtrack
        }
    }
}

function solveNQueens(n) {
    let result = [];
    let board = Array.from({ length: n }, () => Array(n).fill('.'));
    solveNQueensUtil(0, n, board, result);
    return result;
}

let n = 4;
let solutions = solveNQueens(n);

console.log("Solutions for " + n + "-Queens problem:");
solutions.forEach(solution => {
    solution.forEach(row => console.log(row));
    console.log();
});
