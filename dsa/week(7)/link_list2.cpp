#include <iostream>
using namespace std;

class Node
{
public:
    int data;
    Node *next;
    Node(int data)
    {
        this->data = data;
        next = nullptr;
    }
    static void print(Node *head);
    static Node *takeInput();
    ~Node()
    {
        cout << "Deleting node with data: " << data << endl;
        if (next != nullptr)
        {
            delete next;
        }
    }
};
void Node::print(Node *head)
{
    Node *temp = head;
    if (head == nullptr)
    {
        return;
    }
    while (temp != nullptr)
    {
        cout << temp->data;
        temp = temp->next;
    }
    cout << endl;
}
Node *Node::takeInput()
{
    int data;
    cin >> data;
    Node *head = nullptr;
    Node *tail = head;
    while (data != -1)
    {
        if (head == nullptr)
        {
            head = new Node(data);
            tail = head;
        }
        else
        {
            tail->next = new Node(data);
            tail = tail->next;
        }
        cin >> data;
    }
    return head;
}

// Insert node recursively
Node *Insert_node_recursively(Node *head, int pos, int val)
{
    if (head == nullptr)
    {
        return nullptr;
    }
    if (pos == 0)
    {
        Node *newNode = new Node(val);
        newNode->next = head;
        return newNode;
    }
    head->next = Insert_node_recursively(head->next, pos - 1, val);
    return head;
}
// Delete node recursively
Node *Delete_node_recursively(Node *head, int pos)
{
    if (head == nullptr)
    {
        return nullptr;
    }
    if (pos == 0)
    {
        Node *temp = head;
        head = head->next;
        delete temp;
        return head;
    }

    head->next = Delete_node_recursively(head->next, pos - 1);
    return head;
}

int Midpoint_of_LL(Node *head)
{
    if (!head)
        return -1;
    Node *slow = head, *fast = head;
    while (fast && fast->next)
    { 
        slow = slow->next;
        fast = fast->next->next;
    }
    return slow->data;
}


Node* Reverse_the_linked_list(Node *head){

}




int main()
{
    Node *head = Node::takeInput();
    Node::print(head);
    delete head;
    return 0;
}