class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Stack:
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0

    def getSize(self):
        return self.size

    def isEmpty(self):
        return self.head is None  

    def push(self, element):
        newnode = Node(element)
        if self.isEmpty():
            self.head = newnode
            self.tail = newnode
        else:
            self.tail.next = newnode
            self.tail = newnode    
        self.size += 1  # Fixed size update

    def pop(self):
        if self.isEmpty():
            print("Stack is empty!")
            return None
        
        pop_value = self.tail.data  # Store the value to return
        
        # If there is only one node
        if self.head == self.tail:
            self.head = None
            self.tail = None
        else:
            # Traverse to find second last node
            current = self.head
            while current.next != self.tail:
                current = current.next
            current.next = None
            self.tail = current  # Update new tail
        
        self.size -= 1
        return pop_value  # Return popped value

    def peek(self):
        if self.isEmpty():
            return None
        return self.tail.data

    def display(self):
        if self.isEmpty():
            print("Stack is empty")
            return
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

# Example Usage:
stack = Stack()
stack.push(10)
stack.push(20)
stack.push(30)

stack.display() 
print("Popped:", stack.pop())  
stack.display() 
