class QueueUsingArray:
    def __init__(self, cap):
        self.data = [None] * cap
        self.nextIndex = 0
        self.firstIndex = -1
        self.size = 0
        self.capacity = cap
        
    def getSize(self):
        return self.size
    def isEmpty(self):
        return self.size == 0
    def enqueue(self, element):
        if self.size == self.capacity:
            self._handleFullCapacity()
        self.data[self.nextIndex] = element
        self.nextIndex = (self.nextIndex + 1) % self.capacity
        if self.firstIndex == -1:
            self.firstIndex = 0
        self.size += 1

    def _handleFullCapacity(self):
        newdata = [None] * (2 * self.capacity)
        j = 0
        for i in range(self.firstIndex, self.capacity):
            newdata[j] = self.data[i]
            j += 1
        for i in range(0, self.firstIndex):
            newdata[j] = self.data[i]
            j += 1
        self.data = newdata
        self.firstIndex = 0
        self.nextIndex = self.size
        self.capacity *= 2

    def dequeue(self):
        if self.isEmpty():
            print("Queue is empty!")
            return None
        removedElement = self.data[self.firstIndex]
        self.firstIndex = (self.firstIndex + 1) % self.capacity
        self.size -= 1
        if self.size == 0:
            self.firstIndex = -1
            self.nextIndex = 0
        return removedElement

    def front(self):
        if self.isEmpty():
            print("Queue is empty!")
            return None
        return self.data[self.firstIndex]

if __name__ == "__main__":
    q = QueueUsingArray(3)
    q.enqueue(10)
    q.enqueue(20)
    q.enqueue(30)
    q.enqueue(40)
    print("Front:", q.front())
    print("Dequeued:", q.dequeue())
    print("Size:", q.getSize())
    print("Is Empty?", "Yes" if q.isEmpty() else "No")

 