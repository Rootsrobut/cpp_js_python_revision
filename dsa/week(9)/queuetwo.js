class QueueUsingArray {
    constructor(cap) {
        this.data = new Array(cap);
        this.nextIndex = 0;
        this.firstIndex = -1;
        this.size = 0;
        this.capacity = cap;
    }
    getSize() {
        return this.size;
    }
    isEmpty() {
        return this.size === 0;
    }
    enqueue(element) {
        if (this.size === this.capacity) {
            let newdata = new Array(2 * this.capacity);
            let j = 0;
            for (let i = this.firstIndex; i < this.capacity; i++) {
                newdata[j++] = this.data[i];
            }
            for (let i = 0; i < this.firstIndex; i++) {
                newdata[j++] = this.data[i];
            }
            this.data = newdata;
            this.firstIndex = 0;
            this.nextIndex = this.size;
            this.capacity *= 2;
        }
        this.data[this.nextIndex] = element;
        this.nextIndex = (this.nextIndex + 1) % this.capacity;
        if (this.firstIndex === -1) {
            this.firstIndex = 0;
        }
        this.size++;
    }
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return undefined;
        }
        let removedElement = this.data[this.firstIndex];
        this.firstIndex = (this.firstIndex + 1) % this.capacity;
        this.size--;
        if (this.size === 0) {
            this.firstIndex = -1;
            this.nextIndex = 0;
        }
        return removedElement;
    }

    front() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return undefined;
        }
        return this.data[this.firstIndex];
    }
}

let q = new QueueUsingArray(3);
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
console.log("Front: " + q.front());
console.log("Dequeued: " + q.dequeue());
console.log("Size: " + q.getSize());
console.log("Is Empty? " + (q.isEmpty() ? "Yes" : "No"));
