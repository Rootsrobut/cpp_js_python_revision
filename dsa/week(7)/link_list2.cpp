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
class Pair{
    public:
    Node *head;
    Node *tail;
};
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




Node* Reverse_the_linked_list_Recursive_approach(Node *head){
    if(head==nullptr ||  head->next==nullptr){
        return head;
    }
    Node *smallans=Reverse_the_linked_list_Recursive_approach(head->next);
    Node *temp=smallans;
    while (temp->next!=nullptr)
    {
        temp=temp->next;
    }
    temp->next=head;
    head->next=nullptr;
    return smallans;
    
}


Pair Reverse_the_linked_list_pair(Node *head){
    if(head==nullptr || head->next==nullptr){
           Pair ans;
           ans.head=head;
           ans.tail=head;
           return ans;
    }
    Pair smallanswer=Reverse_the_linked_list_pair(head->next);
    smallanswer.tail->next=head;
    head->next=nullptr;
    Pair ans;
    ans.head=smallanswer.head;
    ans.tail=head;
    return ans;
}

Node* Reverse_the_linked_list_Recursive_best_approach(Node *head){
    if(head==nullptr ||  head->next==nullptr){
        return head;
    }
    Node *smallans=Reverse_the_linked_list_Recursive_best_approach(head->next);
    // Node *tail=head->next;
    // tail->next=head;
    // head->next=nullptr;
    head->next->next=head;
    head->next=nullptr;
    return smallans;
    
}

Node* Reverse_the_linked_list_Iterative_approach(Node* head) {
    if (head == nullptr || head->next == nullptr) {
        return head;
    }
    Node* Prev = nullptr;
    Node* Curr = head;
    Node* Next = nullptr;
    while (Curr != nullptr) {
        Next = Curr->next; 
        Curr->next = Prev; 
        Prev = Curr;      
        Curr = Next;      
    }
    return Prev; 
}

int main()
{
    Node *head = Node::takeInput();
    Node::print(head);
    delete head;
    return 0;
}