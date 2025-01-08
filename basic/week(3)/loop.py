for i in range(1, 6):
    if i == 3:
        continue  
    if i == 4:
        break  
    print(i)


for i in range(5, 0, -1):
    print(i)


numbers = [1, 2, 3, 4, 5]
for num in numbers:
    print(num)  # Output: 1, 2, 3, 4, 5

numbers = [1, 2, 3, 4, 5]
for index, num in enumerate(numbers):
    print(index, num)  # Output: 0 1, 1 2, 2 3, 3 4, 4 5
    
    
person = {'name': 'John', 'age': 30, 'city': 'New York'}
for key, value in person.items():
    print(key, value)  # Output: name John, age 30, city New York


a = 5  # 0101 in binary
b = 3  # 0011 in binary

print("a & b =", a & b)  # AND: 1
print("a | b =", a | b)  # OR:  7
print("a ^ b =", a ^ b)  # XOR: 6
print("~a =", ~a)        # NOT: -6 (Inverts bits and adds 1 for signed integers)
print("a << 1 =", a << 1) # Left shift: 10
print("a >> 1 =", a >> 1) # Right shift: 2

