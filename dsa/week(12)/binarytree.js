class BinaryTreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function printTree(root) {
  if (root === null) {
    return;
  }
  process.stdout.write(root.data + ":");
  if (root.left !== null) {
    process.stdout.write("L" + root.left.data);
  }
  if (root.right !== null) {
    process.stdout.write("R" + root.right.data);
  }
  console.log();
  printTree(root.left);
  printTree(root.right);
}

function takeInput() {
  let rootData = readline();
  if (rootData === "-1") {
    return null;
  }
  let root = new BinaryTreeNode(parseInt(rootData));
  root.left = takeInput();
  root.right = takeInput();
  return root;
}

// Function to calculate the number of nodes in the binary tree
function numNodes(root) {
  if (root === null) {
    return 0;
  }
  return 1 + numNodes(root.left) + numNodes(root.right);
}

// Function to take input for the binary tree level-wise
function takeInputLevelWise() {
  let rootData = readline();
  if (rootData === "-1") {
    return null;
  }
  let root = new BinaryTreeNode(parseInt(rootData));
  let queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    let front = queue.shift();
    let leftChildData = readline();
    if (leftChildData !== "-1") {
      let child = new BinaryTreeNode(parseInt(leftChildData));
      front.left = child;
      queue.push(child);
    }
    let rightChildData = readline();
    if (rightChildData !== "-1") {
      let child = new BinaryTreeNode(parseInt(rightChildData));
      front.right = child;
      queue.push(child);
    }
  }
  return root;
}

// Function to perform inorder traversal of the binary tree
function inorder(root) {
  if (root === null) {
    return;
  }
  inorder(root.left);
  process.stdout.write(root.data + " ");
  inorder(root.right);
}

// Function to perform preorder traversal of the binary tree
function preorder(root) {
  if (root === null) {
    return;
  }
  process.stdout.write(root.data + " ");
  preorder(root.left);
  preorder(root.right);
}

// Function to perform postorder traversal of the binary tree
function postorder(root) {
  if (root === null) {
    return;
  }
  postorder(root.left);
  postorder(root.right);
  process.stdout.write(root.data + " ");
}

// Function to build the binary tree from inorder and preorder arrays
function buildTreeHelper(inorder, preorder, inStart, inEnd, preStart, preEnd) {
  if (inStart > inEnd) {
    return null;
  }
  let rootIndex = -1;
  let rootData = preorder[preStart];
  for (let i = inStart; i <= inEnd; i++) {
    if (inorder[i] === rootData) {
      rootIndex = i;
      break;
    }
  }
  let leftInStart = inStart;
  let leftInEnd = rootIndex - 1;
  let leftPreStart = preStart + 1;
  let leftPreEnd = leftInEnd - leftInStart + leftPreStart;

  let rightPreStart = leftPreEnd + 1;
  let rightPreEnd = preEnd;
  let rightInStart = rootIndex + 1;
  let rightInEnd = inEnd;

  let root = new BinaryTreeNode(rootData);
  root.left = buildTreeHelper(
    inorder,
    preorder,
    leftInStart,
    leftInEnd,
    leftPreStart,
    leftPreEnd
  );
  root.right = buildTreeHelper(
    inorder,
    preorder,
    rightInStart,
    rightInEnd,
    rightPreStart,
    rightPreEnd
  );
  return root;
}

// Function to build the binary tree from inorder and preorder arrays
function buildTree(inorder, preorder, size) {
  return buildTreeHelper(inorder, preorder, 0, size - 1, 0, size - 1);
}

// Function to calculate the height of the binary tree
function height(root) {
  if (root === null) {
    return 0;
  }
  return 1 + Math.max(height(root.left), height(root.right));
}

// Function to calculate the diameter of the binary tree
function diameterOfABinaryTree(root) {
  if (root === null) {
    return 0;
  }
  let option1 = height(root.left) + height(root.right) + 1;
  let option2 = diameterOfABinaryTree(root.left);
  let option3 = diameterOfABinaryTree(root.right);
  return Math.max(option1, Math.max(option2, option3));
}

// Function to calculate the height and diameter of the binary tree
function heightDiameter(root) {
  if (root === null) {
    return { height: 0, diameter: 0 };
  }
  let leftAns = heightDiameter(root.left);
  let rightAns = heightDiameter(root.right);
  let height = 1 + Math.max(leftAns.height, rightAns.height);
  let diameter = Math.max(
    height,
    Math.max(leftAns.diameter, rightAns.diameter),
    leftAns.height + rightAns.height + 1
  );
  return { height, diameter };
}

// Example usage
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let root = takeInputLevelWise();
  printTree(root);
  console.log("Inorder traversal:");
  inorder(root);
  console.log("\nPreorder traversal:");
  preorder(root);
  console.log("\nPostorder traversal:");
  postorder(root);
  console.log("\nHeight of the tree:", height(root));
  console.log("Diameter of the tree:", diameterOfABinaryTree(root));
  let { height: treeHeight, diameter: treeDiameter } = heightDiameter(root);
  console.log("Height and diameter of the tree:", treeHeight, treeDiameter);
});
