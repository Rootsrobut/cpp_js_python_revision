# name = input("Enter your name: ")
# print("Hello, " + name)

# with open("input.txt", "r") as file:
#     data = file.read()
#     print("File Content:", data)


# # Case 1: [1,2,3,4,5]
# def input_array_format():
#     arr = list(map(int, input().strip("[]").split(',')))
#     return arr

# # Case 2: 1 2 3 4 5
# def input_space_separated():
#     arr = list(map(int, input().split()))
#     return arr

# # Case 3: 1,2,3,4,5
# def input_comma_separated():
#     arr = list(map(int, input().split(',')))
#     return arr

# # Case with size not given
# def input_array_size_not_given():
#     arr = []
#     while True:
#         try:
#             num = input().strip()
#             if num == "":
#                 break
#             arr.extend(map(int, num.split()))
#         except ValueError:
#             print("Please enter valid integers separated by space.")
#     return arr

# def input_array_size_not_given2():
#     arr = list(map(int, input().split()))
#     return arr


# print(input_array_format())
# print(input_space_separated())
# print(input_comma_separated())
# print(input_array_size_not_given2())




# Datatype

# age = 25;            
# pi = 3.14;           
# name = "John";     
# is_happy = True ;    
# print(type(age),type(pi),type(name),type(is_happy));





#Type Casting

# x = 10    
# y = str(x) 
# z = float(x) 

# a = "123"
# b = int(a)  
# c = float(a) 



# a = 10
# b = 3

# print("Addition:", a + b)          # 13
# print("Subtraction:", a - b)       # 7
# print("Multiplication:", a * b)    # 30
# print("Division:", a / b)          # 3.3333...
# print("Floor Division:", a // b)   # 3 (integer part of the division)
# print("Modulus:", a % b)           # 1
# print("Exponentiation:", a ** b)   # 10^3 = 1000

# # Python does not support ++ or -- operators.

# x = 5
# x += 1  # Equivalent to ++x
# print("Increment:", x)  # 6
# x -= 1  # Equivalent to --x
# print("Decrement:", x)  # 5

#Relation Operators

# a = 5
# b = 3

# print("a == b:", a == b)   # False
# print("a != b:", a != b)   # True
# print("a > b:", a > b)     # True
# print("a < b:", a < b)     # False
# print("a >= b:", a >= b)   # True
# print("a <= b:", a <= b)   # False

# # Python also supports chaining comparisons
# print("1 < a < 10:", 1 < a < 10)  # True

 
# Logical Operators

# a = True
# b = False

# print("a and b:", a and b)   # False (AND: both must be true)
# print("a or b:", a or b)     # True (OR: at least one is true)
# print("not a:", not a)       # False (NOT: inverts the value)

# # Practical Example
# age = 25
# is_adult = age >= 18 and age <= 60
# print("Is Adult:", is_adult)  # True

# has_license = False
# print("Can Drive:", is_adult and has_license)  # False

#Character Storage
# c = 'a'
# print("ASCII of 'a':", ord(c))
# print("'a' + 1:", chr(ord(c) + 1))
