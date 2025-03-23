// Rat in a Maze: 
#include <iostream>
#include <vector>
using namespace std;

bool isSafe(int x, int y, int n, vector<vector<int>>& maze) {
    return (x >= 0 && x < n && y >= 0 && y < n && maze[x][y] == 1);
}

void solveMazeUtil(vector<vector<int>>& maze, int x, int y, int n, vector<string>& result, string path) {
    if (x == n - 1 && y == n - 1) {
        result.push_back(path);
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

vector<string> solveMaze(vector<vector<int>>& maze) {
    vector<string> result;
    int n = maze.size();
    if (maze[0][0] == 1) {
        solveMazeUtil(maze, 0, 0, n, result, "");
    }
    return result;
}

int main() {
    vector<vector<int>> maze = {
        {1, 0, 0, 0},
        {1, 1, 0, 1},
        {0, 1, 0, 0},
        {1, 1, 1, 1}
    };

    vector<string> paths = solveMaze(maze);
    cout << "Possible paths for the rat:" << endl;
    for (const string& path : paths) {
        cout << path << endl;
    }
    return 0;
}
// Word Search: 

bool dfs(vector<vector<char>>& board, int i, int j, string& word, int index) {
    if (index == word.length()) return true;
    if (i < 0 || i >= board.size() || j < 0 || j >= board[0].size() || board[i][j] != word[index]) {
        return false;
    }

    char temp = board[i][j];
    board[i][j] = '#'; // Mark as visited

    bool found = dfs(board, i + 1, j, word, index + 1) ||
                 dfs(board, i - 1, j, word, index + 1) ||
                 dfs(board, i, j + 1, word, index + 1) ||
                 dfs(board, i, j - 1, word, index + 1);

    board[i][j] = temp; // Backtrack
    return found;
}

bool exist(vector<vector<char>>& board, string word) {
    for (int i = 0; i < board.size(); i++) {
        for (int j = 0; j < board[0].size(); j++) {
            if (dfs(board, i, j, word, 0)) {
                return true;
            }
        }
    }
    return false;
}

int main() {
    vector<vector<char>> board = {
        {'A', 'B', 'C', 'E'},
        {'S', 'F', 'C', 'S'},
        {'A', 'D', 'E', 'E'}
    };
    string word = "ABCCED";

    if (exist(board, word)) {
        cout << "Word found!" << endl;
    } else {
        cout << "Word not found!" << endl;
    }

    return 0;
}
// N-Queens: 


bool isSafe(int row, int col, vector<string>& board, int n) {
    // Check column
    for (int i = 0; i < row; i++) {
        if (board[i][col] == 'Q') return false;
    }

    // Check upper-left diagonal
    for (int i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] == 'Q') return false;
    }

    // Check upper-right diagonal
    for (int i = row, j = col; i >= 0 && j < n; i--, j++) {
        if (board[i][j] == 'Q') return false;
    }

    return true;
}

void solveNQueensUtil(int row, int n, vector<string>& board, vector<vector<string>>& result) {
    if (row == n) {
        result.push_back(board);
        return;
    }

    for (int col = 0; col < n; col++) {
        if (isSafe(row, col, board, n)) {
            board[row][col] = 'Q'; // Place the queen
            solveNQueensUtil(row + 1, n, board, result);
            board[row][col] = '.'; // Backtrack
        }
    }
}

vector<vector<string>> solveNQueens(int n) {
    vector<vector<string>> result;
    vector<string> board(n, string(n, '.'));
    solveNQueensUtil(0, n, board, result);
    return result;
}

int main() {
    int n = 4;
    vector<vector<string>> solutions = solveNQueens(n);

    cout << "Solutions for " << n << "-Queens problem:" << endl;
    for (const vector<string>& solution : solutions) {
        for (const string& row : solution) {
            cout << row << endl;
        }
        cout << endl;
    }

    return 0;
}