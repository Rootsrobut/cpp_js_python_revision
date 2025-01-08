

# def function_name(parameter1, parameter2, ...):
#     # Statements
#     return value  # Optional

# def add(a, b):
#     return a + b
# def create_object():
#     return {"name": "John", "age": 25}
# def get_list():
#     return [1, 2, 3]
# def get_function():
#     return lambda x: x * x
# def get_function():
#     return lambda x: x * x
# def do_nothing():
#     print("This does nothing!")
    
# Array

# lists (similar to arrays) are dynamic and do not have elements stored contiguously in memory.
# Instead, Python manages memory with pointers and uses an abstraction layer for memory management.

# age = [10, 14, 16, 18, 19]

# print("First element:", age[0])
# print("Second element:", age[1])
# print("Third element:", age[2])

# print("Memory address of first element:", id(age[0]))
# print("Memory address of second element:", id(age[1]))
# print("Memory address of third element:", id(age[2]))

# myArray = [5, 4, 3, 2, 1]
# size = len(myArray)
# print("Number of elements:", size)

# def print_age(age):
#     for a in age:
#         print(a)

# age = [11, 14, 15, 18, 20]
# print_age(age)


# Mutator Methods (Modify the original list):



# # Initial list
# my_list = [1, 2, 3, 4, 5]

# # 1. append() - Adds an element to the end of the list
# my_list.append(6)
# print('append():', my_list)

# # 2. extend() - Extends the list by appending all elements from another list
# my_list.extend([7, 8, 9])
# print('extend():', my_list)

# # 3. insert() - Inserts an element at a specified position
# my_list.insert(2, 10)  # Insert 10 at index 2
# print('insert():', my_list)

# # 4. remove() - Removes the first occurrence of a specified value
# my_list.remove(10)  # Remove first occurrence of 10
# print('remove():', my_list)

# # 5. pop() - Removes and returns an element at a specified position (default is the last element)
# popped_element = my_list.pop()
# print('pop():', popped_element)
# print('After pop():', my_list)

# # 6. clear() - Removes all elements from the list
# my_list.clear()
# print('clear():', my_list)

# # Recreate the list for further examples
# my_list = [1, 2, 3, 4, 5]

# # 7. reverse() - Reverses the list in place
# my_list.reverse()
# print('reverse():', my_list)

# # 8. sort() - Sorts the list in ascending order (or with a custom key and reverse)
# my_list.sort()
# print('sort():', my_list)









# Accessor Methods (Do not modify the original list):


# # Initial list
# my_list = [1, 2, 3, 4, 5, 3, 6]

# # 1. index() - Returns the first index of a specified value
# index_of_value = my_list.index(3)  # Find the first index of value 3
# print('index():', index_of_value)

# # 2. count() - Counts the number of occurrences of a value in the list
# count_of_value = my_list.count(3)  # Count how many times 3 appears
# print('count():', count_of_value)

# # Copying Methods

# # 3. copy() - Returns a shallow copy of the list
# copied_list = my_list.copy()
# print('copy():', copied_list)

# # 4. list() - Converts an iterable to a list
# my_tuple = (7, 8, 9)
# list_from_tuple = list(my_tuple)
# print('list():', list_from_tuple)










# # Iteration and Functional Methods:

# # Initial list
# my_list = [1, 2, 3, 4, 5]

# # 1. len() - Returns the length of the list
# list_length = len(my_list)
# print('len():', list_length)

# # 2. max() - Returns the largest element of the list
# max_value = max(my_list)
# print('max():', max_value)

# # 3. min() - Returns the smallest element of the list
# min_value = min(my_list)
# print('min():', min_value)

# # 4. sum() - Returns the sum of all elements in the list
# total_sum = sum(my_list)
# print('sum():', total_sum)

# # 5. map() - Applies a function to every element (returns a map object; convert to list if needed)
# mapped_list = list(map(lambda x: x * 2, my_list))  # Multiply each element by 2
# print('map():', mapped_list)

# # 6. filter() - Filters elements based on a condition (returns a filter object; convert to list if needed)
# filtered_list = list(filter(lambda x: x > 2, my_list))  # Keep elements greater than 2
# print('filter():', filtered_list)

# # 7. enumerate() - Returns an enumerate object with indices and elements
# enumerated_list = list(enumerate(my_list))
# print('enumerate():', enumerated_list)
# enumerate(): [(0, 1), (1, 2), (2, 3), (3, 4), (4, 5)]


# # 8. zip() - Combines elements from multiple iterables
# other_list = ['a', 'b', 'c', 'd', 'e']
# zipped_list = list(zip(my_list, other_list))  # Combine the two lists
# print('zip():', zipped_list)
# zip(): [(1, 'a'), (2, 'b'), (3, 'c'), (4, 'd'), (5, 'e')]
