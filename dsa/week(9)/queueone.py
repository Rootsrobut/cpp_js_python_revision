class QueueUsingArray:
    def __init__(self, size):
        self.__data = [None] * size
        self.__nextIndex = 0
        self.__firstIndex = -1
        self.__size = 0
        self.__capacity = size

    def getSize(self):
        return self.__size

    def isEmpty(self):
        return self.__size == 0

    def enqueue(self, element):
        if self.__size == self.__capacity:
            print("Queue is full")
            return
        self.__data[self.__nextIndex] = element
        self.__nextIndex = (self.__nextIndex + 1) % self.__capacity
        if self.__firstIndex == -1:
            self.__firstIndex = 0
        self.__size += 1

    def front(self):
        if self.isEmpty():
            print("Queue is empty!")
            return None
        return self.__data[self.__firstIndex]

    def dequeue(self):
        if self.isEmpty():
            print("Queue is empty!")
            return None
        ans = self.__data[self.__firstIndex]
        self.__data[self.__firstIndex] = None  
        self.__firstIndex = (self.__firstIndex + 1) % self.__capacity
        self.__size -= 1

        if self.__size == 0:
            self.__firstIndex = -1
            self.__nextIndex = 0

        return ans



if __name__ == "__main__":
    q1 = QueueUsingArray(5)
    print(q1.dequeue()) 
    q1.enqueue(1)
    print(q1.getSize()) 
    q1.enqueue(2)
    print(q1.front()) 
    print(q1.dequeue()) 
    print(q1.getSize()) 
