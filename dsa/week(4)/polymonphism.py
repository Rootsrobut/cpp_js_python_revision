# 1. Compile-time polymorphism

# Function Overloading: Python does not support function overloading directly,
# but we can achieve it using default arguments or *args.

def test(a=None, b=None):
    if a is not None and b is not None:
        print(f"Function with two arguments: a={a}, b={b}")
    elif a is not None:
        print(f"Function with one argument: a={a}")
    else:
        print("Function with no arguments")

# Demonstrate function behavior
test()
test(5)
test(5, 10)

# 2. Run-time polymorphism
# Function Overriding
class Vehicle:
    def __init__(self, color):
        self.color = color

    def print(self):
        print("Vehicle")

class Car(Vehicle):
    def __init__(self, color, num_gears):
        super().__init__(color) 
        self.num_gears = num_gears

    def print(self):
        print("Car")

# Demonstrate function overriding
v = Vehicle("Red")
c = Car("Blue", 5)

v.print()  # Output: Vehicle
c.print()  # Output: Car

v1 = Vehicle("Green")
v1.print()  # Output: Vehicle
