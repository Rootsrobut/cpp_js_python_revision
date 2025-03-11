class TreeNode {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
}

function takeInput() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    function askQuestion(query) {
        return new Promise(resolve => readline.question(query, ans => resolve(ans)));
    }
    async function recursiveInput(node) {
        const numChildren = await askQuestion(`Enter number of children of ${node.data}\n`);
        for (let i = 0; i < numChildren; i++) {
            const childData = await askQuestion('Enter data\n');
            const childNode = new TreeNode(parseInt(childData));
            node.children.push(childNode);
            await recursiveInput(childNode);
        }
    }
    return new Promise(async (resolve) => {
        const rootData = await askQuestion('Enter data\n');
        const root = new TreeNode(parseInt(rootData));
        await recursiveInput(root);
        readline.close();
        resolve(root);
    });
}

function printTree(root) {
    if (root == null) {
        return;
    }
    process.stdout.write(`${root.data}:`);
    for (let i = 0; i < root.children.length; i++) {
        process.stdout.write(`${root.children[i].data},`);
    }
    console.log();
    for (let i = 0; i < root.children.length; i++) {
        printTree(root.children[i]);
    }
}

function takeInputLevelWise() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    function askQuestion(query) {
        return new Promise(resolve => readline.question(query, ans => resolve(ans)));
    }
    return new Promise(async (resolve) => {
        const rootData = await askQuestion('Enter a rootdata\n');
        const root = new TreeNode(parseInt(rootData));
        const queue = [root];
        while (queue.length !== 0) {
            const front = queue.shift();
            const numChildren = await askQuestion(`Enter number of children for ${front.data}\n`);
            for (let i = 0; i < numChildren; i++) {
                const childData = await askQuestion(`Enter ${i}th child of ${front.data}\n`);
                const childNode = new TreeNode(parseInt(childData));
                front.children.push(childNode);
                queue.push(childNode);
            }
        }
        readline.close();
        resolve(root);
    });
}

function numNodes(root) {
    if (root == null) {
        return 0;
    }
    let ans = 1;
    for (let i = 0; i < root.children.length; i++) {
        ans += numNodes(root.children[i]);
    }
    return ans;
}

function heightOfTheTree(root) {
    if (root == null) {
        return 0;
    }
    let ans = 0;
    for (let i = 0; i < root.children.length; i++) {
        const smallAnswer = heightOfTheTree(root.children[i]);
        ans = Math.max(ans, smallAnswer);
    }
    return ans + 1;
}

function printAtLevelK(root, k) {
    if (root == null) {
        return;
    }
    if (k === 0) {
        process.stdout.write(`${root.data}`);
        return;
    }
    for (let i = 0; i < root.children.length; i++) {
        printAtLevelK(root.children[i], k - 1);
    }
}

function preorder(root) {
    if (root == null) {
        return;
    }
    console.log(root.data);
    for (let i = 0; i < root.children.length; i++) {
        preorder(root.children[i]);
    }
}

async function main() {
    // const root = await takeInput();
    const root = await takeInputLevelWise();
    printTree(root);
}

main();
