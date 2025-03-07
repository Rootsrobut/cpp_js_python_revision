class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
class Deque {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    pushFront(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.front = this.rear = newNode;
        } else {
            newNode.next = this.front;
            this.front.prev = newNode;
            this.front = newNode;
        }
        this.size++;
    }
    pushBack(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            newNode.prev = this.rear;
            this.rear = newNode;
        }
        this.size++;
    }
    popFront() {
        if (this.isEmpty()) {
            console.log("Deque is empty!");
            return;
        }
        const temp = this.front;
        this.front = this.front.next;
        if (this.front) {
            this.front.prev = null;
        } else {
            this.rear = null;
        }
        this.size--;
    }
    popBack() {
        if (this.isEmpty()) {
            console.log("Deque is empty!");
            return;
        }
        const temp = this.rear;
        this.rear = this.rear.prev;
        if (this.rear) {
            this.rear.next = null;
        } else {
            this.front = null;
        }
        this.size--;
    }
    getFront() {
        if (this.isEmpty()) {
            console.log("Deque is empty!");
            return -1;
        }
        return this.front.data;
    }
    getBack() {
        if (this.isEmpty()) {
            console.log("Deque is empty!");
            return -1;
        }
        return this.rear.data;
    }
}

function main() {
    const dq = new Deque();
    dq.pushFront(10);
    dq.pushBack(20);
    dq.pushFront(5);
    dq.pushBack(30);
    console.log("Front:", dq.getFront());
    console.log("Back:", dq.getBack());
    console.log("Size:", dq.getSize());
    dq.popFront();
    console.log("After popFront, Front:", dq.getFront());
    dq.popBack();
    console.log("After popBack, Back:", dq.getBack());
    console.log("Is Empty?", dq.isEmpty() ? "Yes" : "No");
}
main();