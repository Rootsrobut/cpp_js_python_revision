#include <iostream>
using namespace std;
template <typename T>
class Node
{
public:
    T data;
    Node<T> *next;

    Node(T data)
    {
        this->data = data;
        this->next = nullptr;
    }
};
template <typename T>
class Queues_using_LL
{
    Node<T> *head;
    Node<T> *tail;
    int size;
public:
    Queues_using_LL() 
    {
        head = nullptr;
        tail = nullptr;
        size = 0;
    }
    int getSize()
    {
        return size;
    }
    bool isEmpty()
    {
        return size == 0;
    }
    void enqueue(T element)
    {
        Node<T> *newNode = new Node<T>(element);
        if (isEmpty())
        {
            head = newNode;
            tail = newNode;
        }
        else
        {
            tail->next = newNode;
            tail = newNode;
        }
        size++;
    }
    T front()
    {
        if (isEmpty())
        {
            throw runtime_error("Queue is empty");
        }
        return head->data;
    }
    T dequeue()
    {
        if (isEmpty())
        {
            throw runtime_error("Queue is empty");
        }
        Node<T> *temp = head;
        T data = temp->data;
        head = head->next;
        delete temp;
        size--;
        if (size == 0)
        {
            tail = nullptr; 
        }
        return data;
    }
};

int main()
{
    Queues_using_LL<int> q;
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);

    cout << "Front: " << q.front() << endl;
    cout << "Dequeued: " << q.dequeue() << endl; 
    cout << "Dequeued: " << q.dequeue() << endl; 
    cout << "Front: " << q.front() << endl;
    cout << "Size: " << q.getSize() << endl; 

    return 0;
}
