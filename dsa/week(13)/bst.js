class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}
// Define the BST class
class BST {
    constructor() {
        this.root = null;
    }
    insert(root, val) {
        if (root === null) {
            return new Node(val);
        }
        if (val < root.data) {
            root.left = this.insert(root.left, val);
        } else {
            root.right = this.insert(root.right, val);
        }
        return root;
    }
    search(root, val) {
        if (root === null) {
            return false;
        }
        if (root.data === val) return true;
        if (val < root.data) return this.search(root.left, val);
        else return this.search(root.right, val);
    }
    inorder(root) {
        if (root === null) return;
        this.inorder(root.left);
        process.stdout.write(root.data + " ");
        this.inorder(root.right);
    }
    deleteNode(root, key) {
        if (root === null) return root;
        if (key < root.data) {
            root.left = this.deleteNode(root.left, key);
        } else if (key > root.data) {
            root.right = this.deleteNode(root.right, key);
        } else {
            if (root.left === null) {
                let temp = root.right;
                root = null;
                return temp;
            } else if (root.right === null) {
                let temp = root.left;
                root = null;
                return temp;
            }

            let temp = this.minValueNode(root.right);
            root.data = temp.data;
            root.right = this.deleteNode(root.right, temp.data);
        }
        return root;
    }
    minValueNode(node) {
        let current = node;
        while (current && current.left !== null)
            current = current.left;
        return current;
    }
    getRootToNodePath(root, data) {
        if (root === null) {
            return null;
        }
        if (root.data === data) {
            return [root.data];
        }
        let leftOutput = this.getRootToNodePath(root.left, data);
        if (leftOutput !== null) {
            leftOutput.push(root.data);
            return leftOutput.reverse();
        }
        let rightOutput = this.getRootToNodePath(root.right, data);
        if (rightOutput !== null) {
            rightOutput.push(root.data);
            return rightOutput.reverse();
        } else {
            return null;
        }
    }
}

// Function to check if the tree is a valid BST
function isBSTUtil(root, mini, maxi) {
    if (root === null) return true;
    if (root.data <= mini || root.data >= maxi) return false;
    return isBSTUtil(root.left, mini, root.data) &&
           isBSTUtil(root.right, root.data, maxi);
}

function isBST(root) {
    return isBSTUtil(root, -Infinity, Infinity);
}

// Function to convert a sorted array to BST
function sortedArrayToBST(arr, start, end) {
    if (start > end) return null;
    
    let mid = Math.floor((start + end) / 2);
    let root = new Node(arr[mid]);
    
    root.left = sortedArrayToBST(arr, start, mid - 1);
    root.right = sortedArrayToBST(arr, mid + 1, end);
    
    return root;
}

// Main function
function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let n, start;
    let i = 0;
    let inputs = [];
    rl.on('line', (input) => {
        inputs.push(input);
        i++;
        if (i === 2) {
            n = parseInt(inputs[0].split(' ')[0]);
            start = parseInt(inputs[0].split(' ')[1]);
            let tree = new BST();
            tree.root = tree.insert(tree.root, start);
            let values = inputs[1].split(' ').map(Number);
            for (let j = 0; j < n - 1; j++) {
                tree.root = tree.insert(tree.root, values[j]);
            }
            console.log(tree.search(tree.root, 5));
            tree.inorder(tree.root);
            console.log();
            let path = tree.getRootToNodePath(tree.root, 5);
            if (path !== null) {
                console.log(path.join(' '));
            } else {
                console.log("Node not found");
            }
            tree.root = tree.deleteNode(tree.root, 5);
            tree.inorder(tree.root);
            console.log();
            rl.close();
        }
    });
}

main();