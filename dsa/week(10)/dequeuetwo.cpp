#include <bits/stdc++.h>
using namespace std;

// Node class for doubly linked list
template <typename T>
class Node {
public:
    T data;
    Node<T>* prev;
    Node<T>* next;
    Node(T data) {
        this->data = data;
        prev = nullptr;
        next = nullptr;
    }
};
template <typename T>
class Deque {
private:
    Node<T>* front;
    Node<T>* rear;
    int size;
public:
    Deque() {
        front = nullptr;
        rear = nullptr;
        size = 0;
    }
    bool isEmpty() {
        return size == 0;
    }
    int getSize() {
        return size;
    }
    void pushFront(T data) {
        Node<T>* newNode = new Node<T>(data);
        if (isEmpty()) {
            front = rear = newNode;
        } else {
            newNode->next = front;
            front->prev = newNode;
            front = newNode;
        }
        size++;
    }
    void pushBack(T data) {
        Node<T>* newNode = new Node<T>(data);
        if (isEmpty()) {
            front = rear = newNode;
        } else {
            rear->next = newNode;
            newNode->prev = rear;
            rear = newNode;
        }
        size++;
    }
    void popFront() {
        if (isEmpty()) {
            cout << "Deque is empty!\n";
            return;
        }
        Node<T>* temp = front;
        front = front->next;
        if (front) {
            front->prev = nullptr;
        } else {
            rear = nullptr; 
        }
        delete temp;
        size--;
    }

    // Delete from rear
    void popBack() {
        if (isEmpty()) {
            cout << "Deque is empty!\n";
            return;
        }
        Node<T>* temp = rear;
        rear = rear->prev;
        if (rear) {
            rear->next = nullptr;
        } else {
            front = nullptr; 
        }
        delete temp;
        size--;
    }
    T getFront() {
        if (isEmpty()) {
            cout << "Deque is empty!\n";
            return -1; 
        }
        return front->data;
    }
    T getBack() {
        if (isEmpty()) {
            cout << "Deque is empty!\n";
            return -1; 
        }
        return rear->data;
    }
    ~Deque() {
        while (!isEmpty()) {
            popFront();
        }
    }
};

// Main function to test deque
int32_t main() {
    Deque<int> dq;

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
