#include <iostream>
#include <vector>
#include <queue>  // For std::priority_queue
using namespace std;

class PriorityQueue {
    vector<int> pq;

public:
    PriorityQueue() {}

    bool isEmpty() {
        return pq.size() == 0;
    }

    // Return the size of priorityQueue - no of elements present
    int getSize() {
        return pq.size();
    }

    int getMin() {
        if (isEmpty()) {
            return 0;  // Assuming 0 is returned when the queue is empty
        }
        return pq[0];
    }

    void insert(int element) {
        pq.push_back(element);
        int childIndex = pq.size() - 1;

        while (childIndex > 0) {
            int parentIndex = (childIndex - 1) / 2;

            if (pq[childIndex] < pq[parentIndex]) {
                swap(pq[childIndex], pq[parentIndex]);
            } else {
                break;
            }

            childIndex = parentIndex;
        }
    }

    int removeMin() {
        if (isEmpty()) {
            return 0;  
        }

        int minElement = pq[0];
        pq[0] = pq[pq.size() - 1];
        pq.pop_back();

        // Heapify down
        int parentIndex = 0;
        while (true) {
            int leftChildIndex = 2 * parentIndex + 1;
            int rightChildIndex = 2 * parentIndex + 2;
            int minIndex = parentIndex;

            if (leftChildIndex < pq.size() && pq[leftChildIndex] < pq[minIndex]) {
                minIndex = leftChildIndex;
            }

            if (rightChildIndex < pq.size() && pq[rightChildIndex] < pq[minIndex]) {
                minIndex = rightChildIndex;
            }

            if (minIndex == parentIndex) {
                break;
            }

            swap(pq[parentIndex], pq[minIndex]);
            parentIndex = minIndex;
        }

        return minElement;
    }
};

void inplaceHeapSort(int pq[], int n) {
    // Build the heap in input array
    for (int i = 1; i < n; i++) {
        int childIndex = i;
        while (childIndex > 0) {
            int parentIndex = (childIndex - 1) / 2;
            if (pq[childIndex] < pq[parentIndex]) {
                swap(pq[childIndex], pq[parentIndex]);
            } else {
                break;
            }
            childIndex = parentIndex;
        }
    }

    // Remove elements
    int size = n;
    while (size > 1) {
        swap(pq[0], pq[size - 1]);
        size--;

        int parentIndex = 0;
        while (true) {
            int leftChildIndex = 2 * parentIndex + 1;
            int rightChildIndex = 2 * parentIndex + 2;
            int minIndex = parentIndex;

            if (leftChildIndex < size && pq[leftChildIndex] < pq[minIndex]) {
                minIndex = leftChildIndex;
            }

            if (rightChildIndex < size && pq[rightChildIndex] < pq[minIndex]) {
                minIndex = rightChildIndex;
            }

            if (minIndex == parentIndex) {
                break;
            }

            swap(pq[parentIndex], pq[minIndex]);
            parentIndex = minIndex;
        }
    }
}

int main() {
    // Testing PriorityQueue class
    PriorityQueue pq;
    pq.insert(100);
    pq.insert(21);
    pq.insert(7);
    pq.insert(165);
    pq.insert(78);
    pq.insert(4);

    cout << "PriorityQueue size: " << pq.getSize() << endl;
    cout << "Is PriorityQueue empty? " << (pq.isEmpty() ? "Yes" : "No") << endl;
    cout << "Min element: " << pq.getMin() << endl;

    cout << "Elements in PriorityQueue: ";
    while (!pq.isEmpty()) {
        cout << pq.removeMin() << " ";
    }
    cout << endl;

    // Testing inplaceHeapSort function
    int input[] = {5, 1, 2, 0, 8};
    int n = sizeof(input) / sizeof(input[0]);
    inplaceHeapSort(input, n);

    cout << "Sorted array using inplaceHeapSort: ";
    for (int i = 0; i < n; i++) {
        cout << input[i] << " ";
    }
    cout << endl;

    return 0;
}