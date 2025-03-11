
from collections import deque
from typing import Optional, Tuple

class BinaryTreeNode:
    def __init__(self, data: int):
        self.data = data
        self.left = None
        self.right = None

    def __del__(self):
        if self.left:
            del self.left
        if self.right:
            del self.right

def print_tree(root: Optional[BinaryTreeNode]) -> None:
    if root is None:
        return
    print(f"{root.data}:", end="")
    if root.left:
        print(f"L{root.left.data}", end="")
    if root.right:
        print(f"R{root.right.data}", end="")
    print()
    print_tree(root.left)
    print_tree(root.right)

def take_input() -> Optional[BinaryTreeNode]:
    root_data = int(input("Enter data\n"))
    if root_data == -1:
        return None
    root = BinaryTreeNode(root_data)
    left_child = take_input()
    right_child = take_input()
    root.left = left_child
    root.right = right_child
    return root

def num_nodes(root: Optional[BinaryTreeNode]) -> int:
    if root is None:
        return 0
    return 1 + num_nodes(root.left) + num_nodes(root.right)

def take_input_level_wise() -> Optional[BinaryTreeNode]:
    root_data = int(input("Enter root data\n"))
    if root_data == -1:
        return None
    root = BinaryTreeNode(root_data)
    pending_nodes = deque([root])
    while pending_nodes:
        front = pending_nodes.popleft()
        left_child_data = int(input(f"Enter left child of {front.data}\n"))
        if left_child_data != -1:
            child = BinaryTreeNode(left_child_data)
            front.left = child
            pending_nodes.append(child)
        right_child_data = int(input(f"Enter right child of {front.data}\n"))
        if right_child_data != -1:
            child = BinaryTreeNode(right_child_data)
            front.right = child
            pending_nodes.append(child)
    return root

def inorder(root: Optional[BinaryTreeNode]) -> None:
    if root is None:
        return
    inorder(root.left)
    print(root.data, end=" ")
    inorder(root.right)

def preorder(root: Optional[BinaryTreeNode]) -> None:
    if root is None:
        return
    print(root.data, end=" ")
    preorder(root.left)
    preorder(root.right)

def postorder(root: Optional[BinaryTreeNode]) -> None:
    if root is None:
        return
    postorder(root.left)
    postorder(root.right)
    print(root.data, end=" ")

def build_tree_helper(inorder: list[int], preorder: list[int], in_start: int, in_end: int, pre_start: int, pre_end: int) -> Optional[BinaryTreeNode]:
    if in_start > in_end:
        return None
    root_data = preorder[pre_start]
    root_index = inorder.index(root_data)
    left_in_start = in_start
    left_in_end = root_index - 1
    left_pre_start = pre_start + 1
    left_pre_end = left_pre_start + (left_in_end - left_in_start)
    right_pre_start = left_pre_end + 1
    right_pre_end = pre_end
    right_in_start = root_index + 1
    right_in_end = in_end
    root = BinaryTreeNode(root_data)
    root.left = build_tree_helper(inorder, preorder, left_in_start, left_in_end, left_pre_start, left_pre_end)
    root.right = build_tree_helper(inorder, preorder, right_in_start, right_in_end, right_pre_start, right_pre_end)
    return root

def build_tree(inorder: list[int], preorder: list[int], size: int) -> Optional[BinaryTreeNode]:
    return build_tree_helper(inorder, preorder, 0, size - 1, 0, size - 1)

def height(root: Optional[BinaryTreeNode]) -> int:
    if root is None:
        return 0
    return 1 + max(height(root.left), height(root.right))

def diameter_of_a_binary_tree(root: Optional[BinaryTreeNode]) -> int:
    if root is None:
        return 0
    option1 = height(root.left) + height(root.right) + 1
    option2 = diameter_of_a_binary_tree(root.left)
    option3 = diameter_of_a_binary_tree(root.right)
    return max(option1, option2, option3)

def height_diameter(root: Optional[BinaryTreeNode]) -> Tuple[int, int]:
    if root is None:
        return (0, 0)
    left_ans = height_diameter(root.left)
    right_ans = height_diameter(root.right)
    current_height = 1 + max(left_ans[0], right_ans[0])
    current_diameter = max(left_ans[1], right_ans[1], left_ans[0] + right_ans[0] + 1)
    return (current_height, current_diameter)
