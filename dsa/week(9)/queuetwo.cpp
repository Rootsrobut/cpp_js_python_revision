#include <iostream>
using namespace std;

template <typename T>
class QueueUsingArray
{
private:
    T *data;
    int nextIndex;
    int firstIndex;
    int size;
    int capacity;
public:
    QueueUsingArray(int cap)
    {
        data = new T[cap];
        nextIndex = 0;
        firstIndex = -1;
        size = 0;
        capacity = cap;
    }
    ~QueueUsingArray()
    {
        delete[] data;
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
        if (size == capacity)
        {
            T *newdata = new T[2 * capacity];
            int j = 0;
            for (int i = firstIndex; i < capacity; i++)
            {
                newdata[j++] = data[i];
            }
            for (int i = 0; i < firstIndex; i++)
            {
                newdata[j++] = data[i];
            }
            delete[] data;
            data = newdata;
            firstIndex = 0;
            nextIndex = size;
            capacity *= 2;
        }
        data[nextIndex] = element;
        nextIndex = (nextIndex + 1) % capacity;
        if (firstIndex == -1)
        {
            firstIndex = 0;
        }
        size++;
    }
    T dequeue()
    {
        if (isEmpty())
        {
            cout << "Queue is empty!\n";
            return T();
        }
        T removedElement = data[firstIndex];
        firstIndex = (firstIndex + 1) % capacity;
        size--;
        if (size == 0)
        {
            firstIndex = -1;
            nextIndex = 0;
        }
        return removedElement;
    }
    T front()
    {
        if (isEmpty())
        {
            cout << "Queue is empty!\n";
            return T();
        }
        return data[firstIndex];
    }
};

int main()
{
    QueueUsingArray<int> q(3);
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    q.enqueue(40);
    cout << "Front: " << q.front() << endl;
    cout << "Dequeued: " << q.dequeue() << endl;
    cout << "Size: " << q.getSize() << endl;
    cout << "Is Empty? " << (q.isEmpty() ? "Yes" : "No") << endl;

    return 0;
}
