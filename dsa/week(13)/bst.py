import sys
input = sys.stdin.read
data = input().split()

class Node:
    def __init__(self, val):
        self.data = val
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None

    def insert(self, root, val):
        if root is None:
            return Node(val)
        if val < root.data:
            root.left = self.insert(root.left, val)
        else:
            root.right = self.insert(root.right, val)
        return root

    def search(self, root, val):
        if root is None:
            return False
        if root.data == val:
            return True
        if val < root.data:
            return self.search(root.left, val)
        else:
            return self.search(root.right, val)

    def inorder(self, root):
        if root is None:
            return
        self.inorder(root.left)
        print(root.data, end=" ")
        self.inorder(root.right)

    def delete_node(self, root, key):
        if root is None:
            return root

        if key < root.data:
            root.left = self.delete_node(root.left, key)
        elif key > root.data:
            root.right = self.delete_node(root.right, key)
        else:
            if root.left is None:
                temp = root.right
                root = None
                return temp
            elif root.right is None:
                temp = root.left
                root = None
                return temp

            temp = self.min_value_node(root.right)
            root.data = temp.data
            root.right = self.delete_node(root.right, temp.data)
        return root

    def min_value_node(self, node):
        current = node
        while current and current.left is not None:
            current = current.left
        return current

    def get_root_to_node_path(self, root, data):
        if root is None:
            return None
        if root.data == data:
            output = [root.data]
            return output
        left_output = self.get_root_to_node_path(root.left, data)
        if left_output is not None:
            left_output.append(root.data)
            return left_output
        right_output = self.get_root_to_node_path(root.right, data)
        if right_output is not None:
            right_output.append(root.data)
            return right_output
        else:
            return None

def is_bst_util(root, mini, maxi):
    if root is None:
        return True
    if root.data <= mini or root.data >= maxi:
        return False
    return is_bst_util(root.left, mini, root.data) and is_bst_util(root.right, root.data, maxi)

def is_bst(root):
    return is_bst_util(root, float('-inf'), float('inf'))

def sorted_array_to_bst(arr, start, end):
    if start > end:
        return None

    mid = (start + end) // 2
    root = Node(arr[mid])

    root.left = sorted_array_to_bst(arr, start, mid - 1)
    root.right = sorted_array_to_bst(arr, mid + 1, end)

    return root

n, start = int(data[0]), int(data[1])
tree = BST()

tree.root = tree.insert(tree.root, start)
for i in range(2, n + 1):
    val = int(data[i])
    tree.root = tree.insert(tree.root, val)

print(tree.search(tree.root, 5))
tree.inorder(tree.root)
print()

path = tree.get_root_to_node_path(tree.root, 5)
if path is not None:
    for i in path:
        print(i, end=" ")
    print()
else:
    print("Node not found")

tree.root = tree.delete_node(tree.root, 5)
tree.inorder(tree.root)
print()