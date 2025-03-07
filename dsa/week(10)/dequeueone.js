class Deque {
    constructor(capacity) {
        this.arr = new Array(capacity);
        this.front = -1;
        this.rear = -1;
        this.size = 0;
        this.capacity = capacity;
    }
    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size === this.capacity;
    }

    getSize() {
        return this.size;
    }
    pushFront(value) {
        if (this.isFull()) {
            console.log("Deque is full!");
            return;
        }
        if (this.isEmpty()) {
            this.front = this.rear = 0;
        } else {
            this.front = (this.front - 1 + this.capacity) % this.capacity;
        }
        this.arr[this.front] = value;
        this.size++;
    }
    pushBack(value) {
        if (this.isFull()) {
            console.log("Deque is full!");
            return;
        }
        if (this.isEmpty()) {
            this.front = this.rear = 0;
        } else {
            this.rear = (this.rear + 1) % this.capacity;
        }
        this.arr[this.rear] = value;
        this.size++;
    }

    popFront() {
        if (this.isEmpty()) {
            console.log("Deque is empty!");
            return;
        }
        this.front = (this.front + 1) % this.capacity;
        this.size--;
        if (this.size === 0) {
            this.front = this.rear = -1;
        }
    }

    popBack() {
        if (this.isEmpty()) {
            console.log("Deque is empty!");
            return;
        }
        this.rear = (this.rear - 1 + this.capacity) % this.capacity;
        this.size--;
        if (this.size === 0) {
            this.front = this.rear = -1;
        }
    }

    getFront() {
        if (this.isEmpty()) {
            console.log("Deque is empty!");
            return -1;
        }
        return this.arr[this.front];
    }

    getBack() {
        if (this.isEmpty()) {
            console.log("Deque is empty!");
            return -1;
        }
        return this.arr[this.rear];
    }
}

// Example usage
const dq = new Deque(5);
dq.pushFront(10);
dq.pushBack(20);
dq.pushFront(5);
dq.pushBack(30);

console.log("Front: " + dq.getFront());
console.log("Back: " + dq.getBack());
console.log("Size: " + dq.getSize());

dq.popFront();
console.log("After popFront, Front: " + dq.getFront());

dq.popBack();
console.log("After popBack, Back: " + dq.getBack());

console.log("Is Empty? " + (dq.isEmpty() ? "Yes" : "No"));
