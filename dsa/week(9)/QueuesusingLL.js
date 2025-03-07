class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    getSize() {
        return this.size;
    }
    isEmpty() {
        return this.size === 0;
    }
    enqueue(element) {
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
    front() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.head.data;
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        const temp = this.head;
        const data = temp.data;
        this.head = this.head.next;
        temp.next = null;
        this.size--;
        if (this.size === 0) {
            this.tail = null;
        }
        return data;
    }
}

const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log("Front: " + q.front());
console.log("Dequeued: " + q.dequeue());
console.log("Dequeued: " + q.dequeue());
console.log("Front: " + q.front());
console.log("Size: " + q.getSize());