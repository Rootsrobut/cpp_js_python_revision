class Student:
    def __init__(self, rollNumber, age=None):
        self.rollNumber = rollNumber
        self.age = age
        print("Constructor called!")
    def __del__(self):
        print("Destructor called!")
    def display(self):
        print(self.age, self.rollNumber)
    def getAge(self):
        return self.age
    def setAge(self, age, password):
        if password != 123:
            return
        if age < 0:
            return
        self.age = age

if __name__ == "__main__":
    s1 = Student(1001, 10)
    s2 = Student(2001, 20)
    s3 = Student(3001, 30)
    s2 = s1
    s3 = s1
    s2 = s3
    s1 = Student(1001, 10)
    print("S1 : ", end="")
    s1.display()
    s2 = Student(s1.rollNumber, s1.age)
    print("S2 : ", end="")
    s2.display()
    s3 = Student(2001, 20)
    print("S3 : ", end="")
    s3.display()
    s4 = Student(s3.rollNumber, s3.age)
    s5 = Student(s3.rollNumber, s3.age)
    s6 = Student(s1.rollNumber, s1.age)