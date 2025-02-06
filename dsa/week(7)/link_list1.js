class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    static printList(head) {
        let temp = head;
        while (temp !== null) {
            process.stdout.write(temp.data + " -> ");
            temp = temp.next;
        }
        console.log("null");
    }

    static async takeInput() {
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        let head = null;
        let tail = null;

        const askData = () => {
            return new Promise((resolve) => {
                const recursiveAsk = () => {
                    rl.question('Enter data (enter -1 to stop): ', (data) => {
                        data = parseInt(data);
                        if (data === -1) {
                            rl.close();
                            resolve(head);
                            return;
                        }
                        if (head === null) {
                            head = new Node(data);
                            tail = head;
                        } else {
                            tail.next = new Node(data);
                            tail = tail.next;
                        }
                        recursiveAsk();
                    });
                };
                recursiveAsk();
            });
        };

        return await askData();
    }
}

function insertNode(head, i, data) {
    if (i === 0) {
        const newNode = new Node(data);
        newNode.next = head;
        return newNode;
    }
    let temp = head;
    let counter = 1;
    while (temp !== null && counter <= i-1) {
        temp = temp.next;
        counter++;
    }
    if (temp !== null) {
        const newNode = new Node(data);
        newNode.next = temp.next;
        temp.next = newNode;
    }
    return head;
} 
function deleteHead(head, key) {
    if (head !== null && head.data === key) {
        return head.next; 
    }
    return head;
}

function deleteAnyNode(head, key) {
    if (head === null) return head;

    let curr = head;
    let prev = null;

    while (curr !== null && curr.data !== key) {
        prev = curr;
        curr = curr.next;
    }

    if (curr === null) {
        console.log(`Node with value ${key} not found in the list.`);
        return head;
    }

    if (prev !== null) {
        prev.next = curr.next;
    } else {
        head = curr.next;
    }

    return head;
}


(async () => {
    let head = await Node.takeInput();
    Node.printList(head);

    head = insertNode(head, 2, 1);
    Node.printList(head);

    head = deleteHead(head, 1);
    Node.printList(head);

    head = deleteAnyNode(head, 3);
    Node.printList(head);
})();
