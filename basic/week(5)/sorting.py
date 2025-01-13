def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

def insertion_sort(arr):
    n = len(arr)
    for i in range(1, n):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

def merge_sort(arr, st, ed):
    if st < ed:
        mid = (st + ed) // 2
        merge_sort(arr, st, mid)
        merge_sort(arr, mid + 1, ed)
        merge(arr, st, mid, ed)

def merge(arr, st, mid, ed):
    left = arr[st:mid + 1]
    right = arr[mid + 1:ed + 1]
    i = j = 0
    k = st

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            arr[k] = left[i]
            i += 1
        else:
            arr[k] = right[j]
            j += 1
        k += 1
    while i < len(left):
        arr[k] = left[i]
        i += 1
        k += 1
    while j < len(right):
        arr[k] = right[j]
        j += 1
        k += 1

def find_pivot(arr, low, high):
    pivot = arr[low]
    i, j = low + 1, high
    while i <= j:
        while i <= high and arr[i] <= pivot:
            i += 1
        while j >= low and arr[j] > pivot:
            j -= 1
        if i < j:
            arr[i], arr[j] = arr[j], arr[i]
    arr[low], arr[j] = arr[j], arr[low]
    return j

def quick_sort(arr, st, ed):
    if st < ed:
        pivot_idx = find_pivot(arr, st, ed)
        quick_sort(arr, st, pivot_idx - 1)
        quick_sort(arr, pivot_idx + 1, ed)

# Example usage
arr = [64, 25, 12, 22, 11]
selection_sort(arr)
print("Selection Sorted:", arr)

arr = [64, 25, 12, 22, 11]
bubble_sort(arr)
print("Bubble Sorted:", arr)

arr = [64, 25, 12, 22, 11]
insertion_sort(arr)
print("Insertion Sorted:", arr)

arr = [64, 25, 12, 22, 11]
merge_sort(arr, 0, len(arr) - 1)
print("Merge Sorted:", arr)

arr = [64, 25, 12, 22, 11]
quick_sort(arr, 0, len(arr) - 1)
print("Quick Sorted:", arr)
