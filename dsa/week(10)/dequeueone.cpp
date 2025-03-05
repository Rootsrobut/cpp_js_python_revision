#include <iostream>
using namespace std;

template <typename T>
class Deque {
private:
    T* arr;
    int front;
    int rear;
    int size;
    int capacity;
public:
    Deque(int cap) {
        capacity = cap;
        arr = new T[capacity];
        front = -1;
        rear = -1;
        size = 0;
    }
    bool isEmpty() {
        return size == 0;
    }
    bool isFull() {
        return size == capacity;
    }
    int getSize() {
        return size;
    }
    void pushFront(T value) {
        if (isFull()) {
            cout << "Deque is full!\n";
            return;
        }
        if (isEmpty()) {
            front = rear = 0;
        } else {
            front = (front - 1 + capacity) % capacity;
        }
        arr[front] = value;
        size++;
    }

    void pushBack(T value) {
        if (isFull()) {
            cout << "Deque is full!\n";
            return;
        }
        if (isEmpty()) {
            front = rear = 0;
        } else {
            rear = (rear + 1) % capacity;
        }
        arr[rear] = value;
        size++;
    }

    // Delete from front
    void popFront() {
        if (isEmpty()) {
            cout << "Deque is empty!\n";
            return;
        }
        front = (front + 1) % capacity;
        size--;
        if (size == 0) {
            front = rear = -1; 
        }
    }
    void popBack() {
        if (isEmpty()) {
            cout << "Deque is empty!\n";
            return;
        }
        rear = (rear - 1 + capacity) % capacity;
        size--;
        if (size == 0) {
            front = rear = -1; 
        }
    }
    T getFront() {
        if (isEmpty()) {
            cout << "Deque is empty!\n";
            return -1; 
        }
        return arr[front];
    }
    T getBack() {
        if (isEmpty()) {
            cout << "Deque is empty!\n";
            return -1;
        }
        return arr[rear];
    }
    ~Deque() {
        delete[] arr;
    }
};
int main() {
    Deque<int> dq(5);
    dq.pushFront(10);
    dq.pushBack(20);
    dq.pushFront(5);
    dq.pushBack(30);

    cout << "Front: " << dq.getFront() << endl;
    cout << "Back: " << dq.getBack() << endl;
    cout << "Size: " << dq.getSize() << endl;

    dq.popFront();
    cout << "After popFront, Front: " << dq.getFront() << endl;

    dq.popBack();
    cout << "After popBack, Back: " << dq.getBack() << endl;

    cout << "Is Empty? " << (dq.isEmpty() ? "Yes" : "No") << endl;

    return 0;
}
