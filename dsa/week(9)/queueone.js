class QueueUsingArray {
    #data;
    #nextIndex;
    #size;
    #capacity;
    #firstIndex;
    constructor(s) {
        this.#data = new Array(s).fill(0);
        this.#nextIndex = 0;
        this.#size = 0;
        this.#capacity = s;
        this.#firstIndex = -1; 
    }
    getSize() {
        return this.#size;
    }
    isEmpty() {
        return this.#size === 0;
    }
    enqueue(element) {
        if (this.#size === this.#capacity) {
            console.log('Queue is full');
            return;
        }
        this.#data[this.#nextIndex] = element;
        this.#nextIndex = (this.#nextIndex + 1) % this.#capacity;

        if (this.#firstIndex === -1) {
            this.#firstIndex = 0;
        }
        this.#size++;
    }

    front() {
        if (this.isEmpty()) {
            console.log('Queue is empty!');
            return null;
        }
        return this.#data[this.#firstIndex];
    }
    dequeue() {
        if (this.isEmpty()) {
            console.log('Queue is empty!');
            return null;
        }
        let ans = this.#data[this.#firstIndex];
        this.#firstIndex = (this.#firstIndex + 1) % this.#capacity;
        this.#size--;

        if (this.#size === 0) {
            this.#firstIndex = -1;
            this.#nextIndex = 0;
        }
        return ans;
    }
}


const q = new QueueUsingArray(2);
q.dequeue(); 
console.log(q.isEmpty()); 
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
// console.log(q.Capacity); 
