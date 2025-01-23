class Student:
    def __init__(self, age, name):
        self.age = age
        # Shallow copy: directly assign the reference
        self.name = name
        # Deep copy: explicitly create a new string
        self.name = ''.join([char for char in name]) 
    # Deep copy constructor
    @classmethod
    def copy(cls, student):
        return cls(student.age, ''.join([char for char in student.name]))
        return cls(student.age, student.name)  # Same reference for `name
    def display(self):
        print(f"{self.name} {self.age}")

# Original student
name = "abcd"
s1 = Student(20, name)
s1.display()

# Create a deep copy of s1
s2 = Student.copy(s1)

# Modify the copied student's name
s2.name = "x" + s2.name[1:]

s1.display()  # Original remains unchanged
s2.display()
