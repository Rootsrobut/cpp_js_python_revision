class Student:
    total_students = 0  # Class-level attribute for tracking total students
    def __init__(self):
        self.roll_number = None  
        self.age = None         
        Student.total_students += 1  
    def get_roll_number(self):
        return self.roll_number
    @staticmethod
    def get_total_students():
        return Student.total_students  


# Create instances
s1 = Student()
s2 = Student()
s3 = Student()
s4 = Student()
s5 = Student()

print(Student.get_total_students())  
print(s1.get_total_students())      
