class Student:
    def __init__(self, roll_number, age):
        self.roll_number = roll_number 
        self.age = age
        self.x = self.age  
    def display(self):
        print(f"{self.age}, {self.roll_number}, {self.x}")
s1 = Student(101, 20)
s1.age = 40
s1.display()
s1.roll_number = 202
s1.display()
