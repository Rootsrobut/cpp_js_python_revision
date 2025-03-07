class Deque:
    def __init__(self, capacity):
        self.arr = [None] * capacity
        self.front = -1
        self.rear = -1
        self.size = 0
        self.capacity = capacity

    def is_empty(self):
        return self.size == 0

    def is_full(self):
        return self.size == self.capacity

    def get_size(self):
        return self.size

    def push_front(self, value):
        if self.is_full():
            print("Deque is full!")
            return
        if self.is_empty():
            self.front = self.rear = 0
        else:
            self.front = (self.front - 1 + self.capacity) % self.capacity
        self.arr[self.front] = value
        self.size += 1

    def push_back(self, value):
        if self.is_full():
            print("Deque is full!")
            return
        if self.is_empty():
            self.front = self.rear = 0
        else:
            self.rear = (self.rear + 1) % self.capacity
        self.arr[self.rear] = value
        self.size += 1

    def pop_front(self):
        if self.is_empty():
            print("Deque is empty!")
            return
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        if self.size == 0:
            self.front = self.rear = -1

    def pop_back(self):
        if self.is_empty():
            print("Deque is empty!")
            return
        self.rear = (self.rear - 1 + self.capacity) % self.capacity
        self.size -= 1
        if self.size == 0:
            self.front = self.rear = -1

    def get_front(self):
        if self.is_empty():
            print("Deque is empty!")
            return None
        return self.arr[self.front]

    def get_back(self):
        if self.is_empty():
            print("Deque is empty!")
            return None
        return self.arr[self.rear]

# Main function to test the Deque class
if __name__ == "__main__":
    dq = Deque(5)
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
