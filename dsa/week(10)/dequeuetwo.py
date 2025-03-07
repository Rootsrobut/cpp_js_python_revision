class Node:
    def __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None
class Deque:
    def __init__(self):
        self.front = None
        self.rear = None
        self.size = 0
    def is_empty(self):
        return self.size == 0
    def get_size(self):
        return self.size
    def push_front(self, data):
        new_node = Node(data)
        if self.is_empty():
            self.front = self.rear = new_node
        else:
            new_node.next = self.front
            self.front.prev = new_node
            self.front = new_node
        self.size += 1

    def push_back(self, data):
        new_node = Node(data)
        if self.is_empty():
            self.front = self.rear = new_node
        else:
            new_node.prev = self.rear
            self.rear.next = new_node
            self.rear = new_node
        self.size += 1

    def pop_front(self):
        if self.is_empty():
            print("Deque is empty!")
            return
        temp = self.front
        self.front = self.front.next
        if self.front:
            self.front.prev = None
        else:
            self.rear = None
        self.size -= 1

    def pop_back(self):
        if self.is_empty():
            print("Deque is empty!")
            return
        temp = self.rear
        self.rear = self.rear.prev
        if self.rear:
            self.rear.next = None
        else:
            self.front = None
        self.size -= 1

    def get_front(self):
        if self.is_empty():
            print("Deque is empty!")
            return -1
        return self.front.data

    def get_back(self):
        if self.is_empty():
            print("Deque is empty!")
            return -1
        return self.rear.data


def main():
    dq = Deque()
    dq.push_front(10)
    dq.push_back(20)
    dq.push_front(5)
    dq.push_back(30)
    
    print("Front:", dq.get_front())
    print("Back:", dq.get_back())
    print("Size:", dq.get_size())

   
    dq.pop_front()
    print("After popFront, Front:", dq.get_front())

    dq.pop_back()
    print("After popBack, Back:", dq.get_back())

    
    print("Is Empty?", "Yes" if dq.is_empty() else "No")


if __name__ == "__main__":
    main()