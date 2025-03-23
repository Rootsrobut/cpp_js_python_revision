import heapq

class PriorityQueue:
    def __init__(self):
        self.pq = []

    def is_empty(self):
        return len(self.pq) == 0

    def get_size(self):
        return len(self.pq)

    def get_min(self):
        if self.is_empty():
            return 0  # Assuming 0 is returned when the queue is empty
        return self.pq[0]

    def insert(self, element):
        heapq.heappush(self.pq, element)

    def remove_min(self):
        if self.is_empty():
            return 0
        return heapq.heappop(self.pq)

def inplace_heap_sort(arr):
    # Build the heap in input array
    n = len(arr)
    for i in range(1, n):
        heapq._siftup(arr, i)

    # Remove elements
    size = n
    while size > 1:
        arr[0], arr[size - 1] = arr[size - 1], arr[0]
        size -= 1
        heapq._siftup(arr, 0, size)

if __name__ == "__main__":
    # Testing PriorityQueue class
    pq = PriorityQueue()
    pq.insert(100)
    pq.insert(21)
    pq.insert(7)
    pq.insert(165)
    pq.insert(78)
    pq.insert(4)

    print("PriorityQueue size:", pq.get_size())
    print("Is PriorityQueue empty?", "Yes" if pq.is_empty() else "No")
    print("Min element:", pq.get_min())

    print("Elements in PriorityQueue:", end=" ")
    while not pq.is_empty():
        print(pq.remove_min(), end=" ")
    print()

    # Testing inplace_heap_sort function
    input_arr = [5, 1, 2, 0, 8]
    inplace_heap_sort(input_arr)

    print("Sorted array using inplace_heap_sort:", input_arr)
