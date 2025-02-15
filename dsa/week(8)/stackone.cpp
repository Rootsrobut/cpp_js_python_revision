#include <iostream>
#include <climits>
using namespace std;
// Implementing stack using array
// class StackUsingArray
// {
// 	// Privately declared
// 	int *data;	   // Dynamic array created serving as stack
// 	int nextIndex; // To keep the track of current top index
// 	int capacity;  // To keep the track of total size of stack
// public:
// 	StackUsingArray(int totalSize)
// 	{ // Constructor to initialise the values
// 		data = new int[totalSize];
// 		nextIndex = 0;
// 		capacity = totalSize;
// 	}
// 	int size();
// 	bool isEmpty();
// 	void push(int element);
// 	int pop();
// 	int top();
// };

// int StackUsingArray::size()
// {
// 	return nextIndex;
// }
// bool StackUsingArray::isEmpty()
// {
// 	return nextIndex == 0;
// }
// void StackUsingArray::push(int element)
// {
// 	if (nextIndex == capacity)
// 	{
// 		cout << "Stack full " << endl;
// 		return;
// 	}
// 	data[nextIndex] = element;
// 	nextIndex++; // Size incremented
// }
// int StackUsingArray::pop()
// {
// 	// Before deletion we checked if it was initially not empty to prevent underflow
// 	if (isEmpty())
// 	{
// 		cout << "Stack is empty " << endl;
// 		return INT_MIN;
// 	}
// 	nextIndex--; // Conditioned satisfied so deleted
// 	return data[nextIndex];
// }
// int StackUsingArray::top()
// {
// 	if (isEmpty())
// 	{ // checked for empty stack to prevent overflow
// 		cout << "Stack is empty " << endl;
// 		return INT_MIN;
// 	}
// 	return data[nextIndex - 1];
// }

// There is one limitation to the above approach, which is the size of the stack is fixed.
// In order to overcome this limitation, whenever the size of the stack reaches its limit
// we will simply double its size.

template <typename T> // Templates initialised
class StackUsingArray
{
	T *data;
	int nextIndex;
	int capacity;

public:
	StackUsingArray()
	{
		data = new T[4]; // initially declared with a small size of 4
		nextIndex = 0;
		capacity = 4;
	}
	int size()
	{
		return nextIndex;
	}
	bool isEmpty()
	{
		return nextIndex == 0;
	}
	void push(T element)
	{
		if (nextIndex == capacity)
		{
			T *newData = new T[2 * capacity];
			for (int i = 0; i < capacity; i++)
			{
				newData[i] = data[i];
			}
			capacity *= 2;
			delete[] data;
			data = newData;
		}
		data[nextIndex] = element;
		nextIndex++;
	}
	T pop()
	{
		if (isEmpty())
		{
			cout << "Stack is empty " << endl;
			return 0;
		}
		nextIndex--;
		return data[nextIndex];
	}
	// For extracting top element
	T top()
	{
		if (isEmpty())
		{
			cout << "Stack is empty " << endl;
			return 0;
		}
		return data[nextIndex - 1];
	}
};

int main()
{
	ios_base::sync_with_stdio(false);
	cin.tie(0);
	cout.tie(0);
	return 0;
}