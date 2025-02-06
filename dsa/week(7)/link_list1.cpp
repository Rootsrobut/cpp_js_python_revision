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
    ~Node(){
        cout << "Deleting node with data: " << data << endl;
        if (next != nullptr) {
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



Node* insertNode(Node *head,int i,int data){
// Case 1: Insert node at the beginning
Node *temp=head;
int counter=0;
   
if(i==0){
    Node *newdata=new Node(data);
    newdata->next=head;
    head=newdata;
    return head;
}
// Case 2: Insert node anywhere in the middle  // Case 3: Insert node at the last 
while( temp!=nullptr    && counter<i-1){
    temp=temp->next;
    counter++;
}
if(counter==i-2){
    temp->next=new Node(data);
    temp=temp->next;
}
else{
   Node *a=temp->next;
   temp->next=new Node(data);
   temp=temp->next;
   temp->next=a;
}
return head;
}
// Case 1: Deletion of the head pointer
Node* Deletion_of_the_head_pointer(Node *head,int key){
    if(head==nullptr && head->data==key){
        Node *temp=head;
        head=head->next;
        delete temp;
    }
    return head;
} 
// Case 2: Deletion of any node in the list
Node* Deletion_of_any_node_in_the_list(Node *head,int key){
    Node *curr=head;
    Node *prev=nullptr;
    while(curr!=nullptr && curr->data!=key){
        prev=curr;
        curr=curr->next;
    }
    if(curr==nullptr){
        cout << "Node with value " << key << " not found in the list." <<endl;
        return nullptr;
    }
    prev->next = curr->next;
    delete curr;
} 

int main()
{
    Node *head = Node::takeInput();
    Node::print(head);
    head=insertNode(head,2,1);
    Node::print(head);
    delete head;
    return 0;
}