class PriorityQueue {
    constructor() {
        this.pq = [];
    }
    isEmpty() {
        return this.pq.length === 0;
    }
    getSize() {
        return this.pq.length;
    }
    getMin() {
        if (this.isEmpty()) {
            return 0;  // Assuming 0 is returned when the queue is empty
        }
        return this.pq[0];
    }
    insert(element) {
        // Add the element to the end of the array.
        this.pq.push(element);
        let childIndex = this.pq.length - 1;

        // Heapify up to maintain the heap property.
        while (childIndex > 0) {
            let parentIndex = Math.floor((childIndex - 1) / 2);

            if (this.pq[childIndex] < this.pq[parentIndex]) {
                // Swap the child and parent elements.
                [this.pq[childIndex], this.pq[parentIndex]] = [this.pq[parentIndex], this.pq[childIndex]];
            } else {
                break;
            }

            childIndex = parentIndex;
        }
    }

    removeMin() {
        if (this.isEmpty()) {
            return 0;  
        }

        // Store the minimum element.
        let minElement = this.pq[0];

        // Replace the minimum element with the last element in the array.
        this.pq[0] = this.pq[this.pq.length - 1];
        this.pq.pop();

        // Heapify down to maintain the heap property.
        let parentIndex = 0;
        while (true) {
            let leftChildIndex = 2 * parentIndex + 1;
            let rightChildIndex = 2 * parentIndex + 2;
            let minIndex = parentIndex;

            if (leftChildIndex < this.pq.length && this.pq[leftChildIndex] < this.pq[minIndex]) {
                minIndex = leftChildIndex;
            }

            if (rightChildIndex < this.pq.length && this.pq[rightChildIndex] < this.pq[minIndex]) {
                minIndex = rightChildIndex;
            }

            if (minIndex === parentIndex) {
                break;
            }

            // Swap the parent and child elements.
            [this.pq[parentIndex], this.pq[minIndex]] = [this.pq[minIndex], this.pq[parentIndex]];
            parentIndex = minIndex;
        }

        return minElement;
    }
}

function inplaceHeapSort(pq, n) {
    // Build the heap in the input array.
    for (let i = 1; i < n; i++) {
        let childIndex = i;
        while (childIndex > 0) {
            let parentIndex = Math.floor((childIndex - 1) / 2);
            if (pq[childIndex] < pq[parentIndex]) {
                // Swap the child and parent elements.
                [pq[childIndex], pq[parentIndex]] = [pq[parentIndex], pq[childIndex]];
            } else {
                break;
            }
            childIndex = parentIndex;
        }
    }

    // Remove elements from the heap and place them at the end of the array.
    let size = n;
    while (size > 1) {
        // Swap the minimum element with the last element in the heap.
        [pq[0], pq[size - 1]] = [pq[size - 1], pq[0]];
        size--;

        let parentIndex = 0;
        while (true) {
            let leftChildIndex = 2 * parentIndex + 1;
            let rightChildIndex = 2 * parentIndex + 2;
            let minIndex = parentIndex;

            if (leftChildIndex < size && pq[leftChildIndex] < pq[minIndex]) {
                minIndex = leftChildIndex;
            }

            if (rightChildIndex < size && pq[rightChildIndex] < pq[minIndex]) {
                minIndex = rightChildIndex;
            }

            if (minIndex === parentIndex) {
                break;
            }

            // Swap the parent and child elements.
            [pq[parentIndex], pq[minIndex]] = [pq[minIndex], pq[parentIndex]];
            parentIndex = minIndex;
        }
    }
}

// Test the PriorityQueue class and inplaceHeapSort function.
function main() {
    // Create a PriorityQueue instance.
    let pq = new PriorityQueue();
    pq.insert(100);
    pq.insert(21);
    pq.insert(7);
    pq.insert(165);
    pq.insert(78);
    pq.insert(4);

    console.log("PriorityQueue size:", pq.getSize());
    console.log("Is PriorityQueue empty?", pq.isEmpty() ? "Yes" : "No");
    console.log("Min element:", pq.getMin());

    console.log("Elements in PriorityQueue: ");
    while (!pq.isEmpty()) {
        process.stdout.write(pq.removeMin() + " ");
    }
    console.log();

    // Test the inplaceHeapSort function.
    let input = [5, 1, 2, 0, 8];
    let n = input.length;
    inplaceHeapSort(input, n);

    console.log("Sorted array using inplaceHeapSort: ");
    for (let i = 0; i < n; i++) {
        process.stdout.write(input[i] + " ");
    }
    console.log();
}

main();