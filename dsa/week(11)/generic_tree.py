from collections import deque

class TreeNode:
    def __init__(self, data):
        self.data = data
        self.children = []

def takeInput():
    rootData = int(input("Enter data\n"))
    root = TreeNode(rootData)
    n = int(input(f"Enter number of children of {rootData}\n"))
    for _ in range(n):
        child = takeInput()
        root.children.append(child)
    return root

def printTree(root):
    if root is None:
        return
    print(f"{root.data}:", end="")
    for child in root.children:
        print(f"{child.data},", end="")
    print()
    for child in root.children:
        printTree(child)

def takeInputLevelWise():
    rootdata = int(input("Enter a rootdata\n"))
    root = TreeNode(rootdata)
    qu = deque([root])
    while qu:
        front = qu.popleft()
        noofchild = int(input())
        for i in range(noofchild):
            childdata = int(input(f"Enter {i}th child of {front.data}\n"))
            child = TreeNode(childdata)
            front.children.append(child)
            qu.append(child)
    return root

def numNodes(root):
    if root is None:
        return 0
    ans = 1
    for child in root.children:
        ans += numNodes(child)
    return ans

def height_of_the_tree(root):
    if root is None:
        return 0
    ans = 0
    for child in root.children:
        ans = max(ans, height_of_the_tree(child))
    return ans + 1

def printAtLevelK(root, k):
    if root is None:
        return
    if k == 0:
        print(root.data, end="")
        return
    for child in root.children:
        printAtLevelK(child, k - 1)

def preorder(root):
    if root is None:
        return
    print(root.data)
    for child in root.children:
        preorder(child)

def deleteTree(root):
    for child in root.children:
        deleteTree(child)
    del root

if __name__ == "__main__":
    root = takeInput()
    # root = takeInputLevelWise()
    printTree(root)



