class Student:
    def __init__(self):
        self.roll_number = None
        self.__age = None  
    def display(self):
        print(f"{self.__age} {self.roll_number}")
    def get_age(self):
        return self.__age
    def set_age(self, age, password):
        if password != 123:
            return
        if age < 0:
            return
        self.__age = age
def main():
    s1 = Student()
    s2 = Student()
    s3, s4, s5 = Student(), Student(), Student()
    # s1.age = 24  # This will raise an AttributeError because age is private
    s1.roll_number = 101
    print(f"S1 age: {s1.get_age()}")
    print(f"S1 Roll number: {s1.roll_number}")
    s1.display()
    s2.display()
    print(s1.roll_number)
    # Create objects dynamically
    s6 = Student()
    # s6.age = 23  # This will raise an AttributeError because age is private
    s6.roll_number = 105654
    s6.display()
    print(f"S6 age: {s6.get_age()}")
    # s6.age = 23  # This will raise an AttributeError because age is private
    s6.roll_number = 104
    s6.display()
    s1 = Student()
    s2 = Student()
    s1.set_age(20, 123)
    s2.set_age(24, 123)
    s1.display()
    s2.display()


if __name__ == "__main__":
    main()