class Student:
    def __init__(self):
        self.name = ""

    def print(self):
        print("Student")


class Teacher:
    def __init__(self):
        self.name = ""
        self.age = ""

    def print(self):
        print("Teacher")


class TA(Teacher, Student):  # Inheriting from both Teacher and Student
    def print(self):
        print("TA")


# Main Logic
a = TA()

# Accessing the Student's print function
Student().print()

# Accessing the TA's print function
a.print()

# Accessing Teacher's properties and method
a.name = "abcd"
Teacher().print()
