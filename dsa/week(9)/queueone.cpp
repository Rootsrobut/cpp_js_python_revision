#include<iostream>
using namespace std;
template <typename T>
class QueueUsingArray
{
    T *data;
    int nextIndex;
    int firstIndex;
    int size;
    int capacity;
public:
    QueueUsingArray(int s)
    {
        data = new T[s];
        nextIndex = 0;
        firstIndex = -1;
        size = 0;
        capacity = s;
    }
    int  getSize(){
         return size;
    }
    bool  isEmpty() {
        return size==0;

    }
    void enqueue(T element){
        if(size == capacity){
            cout<<'queue  is full!'<<endl;
            return;
        }
        data[nextIndex]=element;
        nextIndex=(nextIndex+1)%capacity;
        if(firstIndex==-1){
            firstIndex=0;
        }
        size++;
    }
    T front(){
        if(isEmpty()) {                        
            cout << "Queue is empty ! " << endl; 
            return 0; 
        }
        return data[firstIndex];
    }
    T dequeue(){
        if(isEmpty()) {                        
            cout << "Queue is empty ! " << endl; 
            return 0; 
        }
        T ans=data[firstIndex];
        data[firstIndex]=0
        firstIndex=(firstIndex+1)%capacity;
        size--;
        if(size==0){
            firstIndex=-1;
            nextIndex=0;
        }
        return ans;
    }
};

int main(){
    QueueUsingArray<int> q1(5);
    q1.enqueue(1);
    cout<<q1.dequeue()<<endl;
    q1.getSize();
    cout<<q1.front()<<endl;
    cout<<q1.isEmpty()<<endl;
    return 0;
}