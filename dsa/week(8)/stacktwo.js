class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
// Stack class definition
class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    getSize() {
        return this.size;
    }
    isEmpty() {
        return this.head === null;
    }
    push(element) {
        const newNode = new Node(element);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty. Cannot pop.");
            return null; // Return null for empty stack
        }
        const data = this.tail.data;
        if (this.head === this.tail) { // Only one element in the stack
            this.head = null;
            this.tail = null;
        } else {
            let temp = this.head;
            while (temp.next !== this.tail) {
                temp = temp.next;
            }
            this.tail = temp;
            this.tail.next = null;
        }
        this.size--;
        return data;
    }
    top() {
        if (this.isEmpty()) {
            console.log("Stack is empty. No top element.");
            return null; // Return null for empty stack
        }
        return this.tail.data;
    }
}
// Main function to test the Stack class
function main() {
    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);

    console.log("Top element:", stack.top());
    console.log("Stack size:", stack.getSize());

    console.log("Popped element:", stack.pop());
    console.log("Popped element:", stack.pop());

    console.log("Top element:", stack.top());
    console.log("Stack size:", stack.getSize());
}


main();