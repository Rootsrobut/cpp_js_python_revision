#include <iostream>
using namespace std;
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
		next = NULL;
	}
	~Node()
	{
		delete next;
	}
};
template <typename T>
class Stack
{
	Node<T> *head;
	int size;
public:
	Stack()
	{
	}
	int getSize()
	{
	}
	bool isEmpty()
	{
	}
	void push(T element)
	{
	}
	T pop()
	{
	}
	T top()
	{
	}
};
// number of elements prsent in stack
int main()
{
	ios_base::sync_with_stdio(false);
	cin.tie(0);
	cout.tie(0);
	return 0;
}