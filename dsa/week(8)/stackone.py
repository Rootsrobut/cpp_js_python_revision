# import sys
# class StackUsingArray:
#     def __init__(self,totalsize):
#         self.data=[None]*(totalsize)
#         self.nextIndex=0
#         self.capacity=totalsize
#     def size(self):
#         return self.nextIndex
#     def isEmpty(self):
#         return self.nextIndex==0
#     def push(self,element):
#         self.data[self.nextIndex]=element
#         self.nextIndex+=1
#     def pop(self):
#         if(self.isEmpty()):
#             print("Stack is empty ")
#             return -sys.maxsize-1
#         self.nextIndex-=1
#         return self.data[self.nextIndex]
#     def top(self):
#         if(self.isEmpty()):
#             print("Stack is empty ")
#             return -sys.maxsize-1
#         return self.data[self.nextIndex-1]  
# s1=StackUsingArray(5)
# print(s1.push(4))
# print(s1.top())
    
    
    
    
class StackUsingArray:
    def __init__(self, initial_capacity=4):
        self.data = [None] * initial_capacity
        self.next_index = 0
        self.capacity = initial_capacity

    def size(self):
        return self.next_index

    def is_empty(self):
        return self.next_index == 0

    def push(self, element):
        if self.next_index == self.capacity:
            new_data = [None] * (2 * self.capacity)
            for i in range(self.capacity):
                new_data[i] = self.data[i]
            self.capacity *= 2
            self.data = new_data
        
        self.data[self.next_index] = element
        self.next_index += 1

    def pop(self):
        if self.is_empty():
            print("Stack is empty")
            return None 
        self.next_index -= 1
        return self.data[self.next_index]

    def top(self):
        if self.is_empty():
            print("Stack is empty")
            return None  
        return self.data[self.next_index - 1]


if __name__ == "__main__":
    s1 = StackUsingArray()
    s1.push(1)
    s1.push(2)
    s1.push(3)
    s1.push(4)
    s1.push(5) 
    print(s1.top())     
    print(s1.pop())     
    print(s1.is_empty())  
    print(s1.size())    