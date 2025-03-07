class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Queues_using_LL:
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0

    def getSize(self):
        return self.size

    def isEmpty(self):
        return self.size == 0

    def enqueue(self, element):
        newNode = Node(element)
        if self.isEmpty():
            self.head = newNode
            self.tail = newNode
        else:
            self.tail.next = newNode
            self.tail = newNode
        self.size += 1

    def front(self):
        if self.isEmpty():
            raise Exception("Queue is empty")
        return self.head.data

    def dequeue(self):
        if self.isEmpty():
            raise Exception("Queue is empty")
        temp = self.head
        data = temp.data
        self.head = self.head.next
        del temp
        self.size -= 1
        if self.size == 0:
            self.tail = None
        return data

if __name__ == "__main__":
    q = Queues_using_LL()
    q.enqueue(10)
    q.enqueue(20)
    q.enqueue(30)

    print("Front:", q.front())
    print("Dequeued:", q.dequeue())
    print("Dequeued:", q.dequeue())
    print("Front:", q.front())
    print("Size:", q.getSize())