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
        next = nullptr;
    }
    ~Node()
    {
        delete next;
    }
};
template <typename T>
class Stack{
    Node<T> *head;
    Node<T> *tail;
    int size; // number of elements present in stack
public:
    Stack() {
        head = nullptr;
        tail = nullptr;
        size = 0;
    }
    int getSize(){
        return size;
    }
    bool isEmpty() // Check if the stack is empty
    {
        return head == nullptr;
    }
    void push(T element) // Insert the newNode at the end of the list and update the tail node
    {
        Node<T> *newnode = new Node<T>(element);
        if (isEmpty())
        {
            head = newnode;
            tail = newnode;
        }
        else
        {
            tail->next = newnode;
            tail = newnode;
        }
        size++;
    }
    T pop()
    {
        if (isEmpty())
        {
            cout << "Stack is empty. Cannot pop." << endl;
            return T(); // Return a default value for T
        }
        T data = tail->data;
        if (head == tail) // Only one element in the stack
        {
            delete tail;
            head = nullptr;
            tail = nullptr;
        }
        else
        {
            Node<T> *temp = head;
            while (temp->next != tail)
            {
                temp = temp->next;
            }
            delete tail;
            tail = temp;
            tail->next = nullptr;
        }
        size--;
        return data;
    }
    T top()
    {
        if (isEmpty())
        {
            cout << "Stack is empty. No top element." << endl;
            return T(); // Return a default value for T
        }
        return tail->data;
    }
    ~Stack()
    {
        while (!isEmpty())
        {
            pop();
        }
    }
};

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);

    Stack<int> stack;
    stack.push(10);
    stack.push(20);
    stack.push(30);

    cout << "Top element: " << stack.top() << endl;
    cout << "Stack size: " << stack.getSize() << endl;

    cout << "Popped element: " << stack.pop() << endl;
    cout << "Popped element: " << stack.pop() << endl;

    cout << "Top element: " << stack.top() << endl;
    cout << "Stack size: " << stack.getSize() << endl;

    return 0;
}