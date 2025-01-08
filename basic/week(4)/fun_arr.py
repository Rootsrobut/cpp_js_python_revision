

# def function_name(parameter1, parameter2, ...):
#     # Statements
#     return value  # Optional

def add(a, b):
    return a + b

def create_object():
    return {"name": "John", "age": 25}

def get_list():
    return [1, 2, 3]

def get_function():
    return lambda x: x * x



def get_function():
    return lambda x: x * x


def do_nothing():
    print("This does nothing!")
    
# Array

# lists (similar to arrays) are dynamic and do not have elements stored contiguously in memory.
# Instead, Python manages memory with pointers and uses an abstraction layer for memory management.

age = [10, 14, 16, 18, 19]

print("First element:", age[0])
print("Second element:", age[1])
print("Third element:", age[2])

print("Memory address of first element:", id(age[0]))
print("Memory address of second element:", id(age[1]))
print("Memory address of third element:", id(age[2]))

