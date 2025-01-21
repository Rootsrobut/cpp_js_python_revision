import heapq
from collections import deque

# Max-heap priority queue
pqr = []
for i in range(1, 6):
    heapq.heappush(pqr, -i)  # Use negative to simulate max-heap

def print_priority_queue(pq):
    print([-x for x in pq])  # Convert back to positive values for printing

print_priority_queue(pqr)
print(len(pqr), -pqr[0])  # Size and top element
heapq.heappop(pqr)  # Remove the top element
print_priority_queue(pqr)

# Min-heap priority queue
pq = []
for i in range(1, 6):
    heapq.heappush(pq, i)

print(pq)  # Min-heap is stored as is
print("Min-Heap elements:", [heapq.heappop(pq) for _ in range(len(pq))])  # Print and empty

# List operations using deque
li = deque()
li.append(10)  # Push back
li.append(20)  # Push back
li.appendleft(30)  # Push front
li.appendleft(40)  # Push front
li.appendleft(50)  # Push front
li.reverse()
print("List after reverse:", list(li))

li = sorted(li)  # Sorting
print("List after sorting:", li)

print(len(li))  # Size
print(li[0])  # Front
li.pop(0)  # Pop front
print(li[-1])  # Back
li.pop()  # Pop back
print("Final list:", li)


# Sorting intervals by a custom comparator
intervals = [
    {"st": 6, "et": 4},
    {"st": 3, "et": 4},
    {"st": 4, "et": 6},
    {"st": 8, "et": 13}
]

# Sort intervals by start time (ascending order)
intervals.sort(key=lambda x: x["st"])
for interval in intervals:
    print(f'{interval["st"]} : {interval["et"]}')

# Sorting and searching in an array
arr = [1, 3, 2, 5, 7, 6]
# Sort the array in ascending order
arr.sort()
print(" ".join(map(str, arr)))

# Binary search for a specific value
from bisect import bisect_left, bisect_right

def binary_search(arr, target):
    index = bisect_left(arr, target)
    return index < len(arr) and arr[index] == target
print(binary_search(arr, 2))

# Lower bound (first element >= target)
def lower_bound(arr, target):
    return bisect_left(arr, target)
print(lower_bound(arr, 3))

# Upper bound (first element > target)
def upper_bound(arr, target):
    return bisect_right(arr, target)
print(upper_bound(arr, 3))
