class DynamicArray:
    def __init__(self):
        self.data = [None] * 5
        self.nextIndex = 0
        self.capacity = 5

    # Copy constructor
    @classmethod
    def copy(cls, dynamic_array):
        new_array = cls()
        new_array.data = dynamic_array.data[:]
        new_array.nextIndex = dynamic_array.nextIndex
        new_array.capacity = dynamic_array.capacity
        return new_array

    def add(self, element):
        if self.nextIndex == self.capacity:
            new_data = [None] * (self.capacity * 2)
            for i in range(self.capacity):
                new_data[i] = self.data[i]
            self.data = new_data
            self.capacity *= 2
        self.data[self.nextIndex] = element
        self.nextIndex += 1

    def add_at(self, index, element):
        if index < self.nextIndex:
            self.data[index] = element
        elif index == self.nextIndex:
            self.add(element)

    def get(self, index):
        if index < self.nextIndex:
            return self.data[index]
        return -1

    def print(self):
        print(" ".join(str(self.data[i]) for i in range(self.nextIndex)))

# Example usage
d1 = DynamicArray()
d1.add(10)
d1.add(20)
d1.add(30)
d1.add(40)
d1.add(50)
d1.add(60)

d1.print()

d2 = DynamicArray.copy(d1)  # Copy constructor
d3 = DynamicArray.copy(d1)  # Assignment simulation

d1.add_at(0, 100)

d2.print()
d3.print()
