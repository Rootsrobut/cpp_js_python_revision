class Student:
    def __init__(self, *args):
        """
        Constructor for the Student class.
        It can be called with 0, 1 or 2 arguments.
        If 0 arguments are provided, it's a default constructor.
        If 1 argument is provided, it's a parameterized constructor with roll number.
        If 2 arguments are provided, it's a parameterized constructor with age and roll number.
        """
        print("Constructor called!")
        if len(args) == 0:
            # Default constructor
            pass
        elif len(args) == 1:
            # Parameterized constructor with roll number
            self.roll_number = args[0]
        elif len(args) == 2:
            # Parameterized constructor with age and roll number
            print("Constructor 3 called!")
            self.age = args[0]
            self.roll_number = args[1]
        else:
            raise TypeError("Invalid number of arguments")

    def display(self):
        try:
            print(f"{self.age} {self.roll_number}")
        except AttributeError:
            print("Age or roll number not set")
    def get_age(self):
        try:
            return self.age
        except AttributeError:
            return None
    def set_age(self, age, password):
        if password != 123:
            return
        if age < 0:
            return
        self.age = age
        
def main():
    
    # Create a student with default constructor
    s3 = Student()
    s3.display()

    s5 = Student(101)
    s5.display()

    # Create a student with age and roll number
    s6 = Student(20, 1002)
    s6.display()


if __name__ == "__main__":
    main()