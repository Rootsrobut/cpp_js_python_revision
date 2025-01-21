from operator import itemgetter

def comp(a, b):
    return a[1] > b[1]

def main():
    # Vector equivalent in Python: List
    v1 = []
    for i in range(5):
        v1.append(int(input()))

    print(len(v1))  # Size of the list
    print(len(v1))  # Capacity doesn't apply in Python; len(v1) represents the current size

    v1.append(-1)   # Push back
    v1.pop()        # Pop back
    v1.clear()      # Clear the list
    # v1.back() and v1.front() do not exist in Python but can be accessed via v1[-1] and v1[0]

    # Iterating with iterators and auto-equivalent in Python
    for ele in v1:
        print(ele)

    print(int(len(v1) == 0))  # Equivalent of v1.empty() in C++

    # `memset` has no direct equivalent in Python, use list comprehension
    v1 = [1] * 5  # Filling the list with 1s
    # Reverse a portion of the list
    v1[1:4] = reversed(v1[1:4])
    # Erase elements from 1 to 3 (inclusive in C++, exclusive in Python)
    del v1[1:4]

    # Sorting in reverse order
    v1.sort(reverse=True)

    # `swap` equivalent
    v1[0], v1[1] = v1[1], v1[0]

    # Resize isn't applicable in Python. Use list slicing or dynamic list manipulation

    # 2D vector equivalent
    row, col = map(int, input().split())
    v3 = [[0] * col for _ in range(row)]

    # Pair equivalent: Tuple
    students = []
    num = int(input())
    for _ in range(num):
        roll_number, section = input().split()
        roll_number = int(roll_number)
        students.append((roll_number, section))

    # Sort the list of tuples
    students.sort(key=itemgetter(1), reverse=True)

    for student in students:
        print(student[0], student[1])

if __name__ == "__main__":
    main()
