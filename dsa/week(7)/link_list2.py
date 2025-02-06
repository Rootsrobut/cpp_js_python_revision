class Node:
    def __init__(self,data):
        self.data=data
        self.next=None
    def __del__(self):
        print(f"Deleting node with data: {self.data}")
        if self.next is not None:
            del self.next
    @staticmethod        
    def print_list(head):
        temp=head
        while temp is not None:
            print(temp.data,end='->');
            temp=temp.next
        print(None)
    @staticmethod
    def take_input():
        data=int(input('Enter data (enter -1 to stop): '))
        head=None
        tail=None
        while data is not -1:
            if head is None:
                head=Node(data)
                tail=head 
            else:
                tail.next=Node(data)
                tail=tail.next
            data=int(input('Enter data (enter -1 to stop): '))   
        return head            
                   
       
                   
def Insert_node_recursively(head, pos,value):
    if (head == nullptr):
        return nullptr
    if (pos == 0):
        newNode =Node(val); 
        newNode.next = head;        
        return newNode;              
    head.next = Insert_node_recursively(head.next, pos - 1, val)
    return head

def Delete_node_recursively(head, pos):
    if(head==nullptr):
        return None
    if(pos==0):
        temp=head
        head=head.next
        return head
        head.next =Delete_node_recursively(head.next, pos - 1)
        return head                   
                   
if __name__=='__main__':
    head=Node.take_input()
    Node.print_list(head)
    head=Insert_node_recursively(head, 4,102)
    Node.print_list(head)
    head=Delete_node_recursively(head, 4)   
    Node.print_list(head)             