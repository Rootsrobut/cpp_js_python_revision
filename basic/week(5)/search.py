import bisect

# Sorted list
arr = list(map(int, input('Enter a list of numbers separated by space: ').split()))

# Element to find
target = int(input('Enter a number:'))
# Use bisect_left to locate the element
index = bisect.bisect_left(arr, target)

# Check if the element is present
if index < len(arr) and arr[index] == target:
    print(f"{target} is present at index {index}.")
else:
    print(f"{target} is not in the list.")
