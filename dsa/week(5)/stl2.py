from collections import deque

# Stack using List
stack = []
stack.append('a')
stack.append('b')
stack.append('c')
print(stack[-1])  # Top of the stack
stack.pop()

if stack:
    print("true")
else:
    print("false")

while stack:
    stack.pop()

# Queue using Deque
queue = deque()
queue.append(1)
queue.append(2)
queue.append(3)
queue.popleft()  # Pop the front element
print(queue[0])  # Front of the queue
print(queue[-1])  # Back of the queue
print(len(queue))  # Size of the queue

# Deque using Deque
dq = deque()
dq.append(1)      # Push to the back
dq.appendleft(2)  # Push to the front
dq.append(3)      # Push to the back
dq.popleft()      # Pop from the front
dq.pop()          # Pop from the back

print(dq[0])      # Front of the deque
print(dq[-1])     # Back of the deque


s = "PARIKH"
# Copy substring from index 2, 4 characters long
s1 = s[2:2 + 4]  # Substring from index 2 up to 2+4
# Compare s and s1
if s1 == s:
    print(f"{s1} is equal to {s}")
else:
    print(f"{s1} is not equal to {s}")
# Substring from index 1, 4 characters long
s2 = s[1:1 + 4]
print(s2)  # Prints "ARIK"


# Create a Set
s = set()
arr = [1, 2, 3, 4, 5, 3, 2, 1, 3, 4]
# Insert elements from the array into the Set
for num in arr:
    s.add(num)
# Iterate through the Set and print elements
for value in s:
    print(value)
# Check if the element 5 is in the Set
if 5 in s:
    print("Element found")
else:
    print("Element not found")
    
    
    
    
# arr = [1, 2, 3, 4, 5, 6, 5]
# m = {}
# # Populate the dictionary with frequency counts
# for num in arr:
#     m[num] = m.get(num, 0) + 1
# # Iterate over the dictionary and print key-value pairs
# for key, value in m.items():
#     print(f"{key} : {value}")
# print()

# # Erase the key `1`
# if 1 in m:
#     del m[1]

# print("After erasing key 1:")
# for key, value in m.items():
#     print(f"{key} : {value}")


arr = [1, 2, 3, 4, 5, 6, 5]
m = {}
# Count occurrences
for num in arr:
    m[num] = m.get(num, 0) + 1
# Print the dictionary
for key, value in m.items():
    print(f"{key} : {value}")
print()
# Erase the key 1
if 1 in m:
    del m[1]
# Print the updated dictionary
for key, value in m.items():
    print(f"{key} : {value}")
