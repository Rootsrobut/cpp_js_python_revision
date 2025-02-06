class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

    def __del__(self):
        print(f"Deleting node with data: {self.data}")
        if self.next is not None:
            del self.next
    @staticmethod
    def print_list(head):
        temp = head
        while temp is not None:
            print(temp.data, end=" -> ")
            temp = temp.next
        print("None")
    @staticmethod
    def take_input():
        data = int(input("Enter data (enter -1 to stop): "))
        head = None
        tail = None
        while data != -1:
            if head is None:
                head = Node(data)
                tail = head
            else:
                tail.next = Node(data)
                tail = tail.next
            data = int(input("Enter data (enter -1 to stop): "))
        return head


def insert_node(head, i, data):
    # Case 1: Insert at the beginning
    if i == 0:
        new_node = Node(data)
        new_node.next = head
        head = new_node
        return head

    # Case 2: Insert in the middle or at the end
    temp = head
    counter = 1
    while temp is not None and counter <= i - 1:
        temp = temp.next
        counter += 1

    if temp is not None:
        new_node = Node(data)
        new_node.next = temp.next
        temp.next = new_node
    return head


def delete_head(head, key):
    # Case 1: Delete the head node
    if head is not None and head.data == key:
        temp = head
        head = head.next
        del temp
    return head


def delete_any_node(head, key):
    # Case 2: Delete any node in the list
    curr = head
    prev = None
    while curr is not None and curr.data != key:
        prev = curr
        curr = curr.next

    if curr is None:
        print(f"Node with value {key} not found in the list.")
        return head

    if prev is not None:
        prev.next = curr.next
    else:
        head = curr.next
    del curr
    return head


# Main function
if __name__ == "__main__":
    head = Node.take_input()
    Node.print_list(head)

    head = insert_node(head, 2, 1)
    Node.print_list(head)

    head = delete_head(head, 1)
    Node.print_list(head)

    head = delete_any_node(head, 3)
    Node.print_list(head)

    # Clean up memory
    del head