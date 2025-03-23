#include <bits/stdc++.h>
using namespace std;

class Node {
public:
    int data;
    Node* left;
    Node* right;
    
    Node(int val) {
        this->data = val;
        left = right = nullptr;
    }
};

class BST {
public:
    Node* root;
    
    BST() {
        root = nullptr;
    }

    Node* insert(Node* root, int val) {
        if (root == nullptr) {
            return new Node(val);
        }
        if (val < root->data) 
            root->left = insert(root->left, val);
        else 
            root->right = insert(root->right, val);
        return root;
    }

    bool Search(Node* root, int val) {
        if (root == nullptr) {
            return false;
        }
        if (root->data == val) return true;
        if (val < root->data) return Search(root->left, val);
        else return Search(root->right, val);
    }

    void inorder(Node* root) {
        if (root == nullptr) return;
        inorder(root->left);
        cout << root->data << " ";
        inorder(root->right);
    }

    Node* deleteNode(Node* root, int key) {
        if (root == nullptr) return root;

        if (key < root->data) {
            root->left = deleteNode(root->left, key);
        } else if (key > root->data) {
            root->right = deleteNode(root->right, key);
        } else {
            if (root->left == nullptr) {
                Node* temp = root->right;
                delete root;
                return temp;
            } else if (root->right == nullptr) {
                Node* temp = root->left;
                delete root;
                return temp;
            }

            Node* temp = minValueNode(root->right);
            root->data = temp->data;
            root->right = deleteNode(root->right, temp->data);
        }
        return root;
    }

    Node* minValueNode(Node* node) {
        Node* current = node;
        while (current && current->left != nullptr)
            current = current->left;
        return current;
    }

    vector<int>* getRootToNodePath(Node* root, int data) {
        if (root == nullptr) {
            return nullptr;
        }
        if (root->data == data) {
            vector<int>* output = new vector<int>();
            output->push_back(root->data);
            return output;
        }
        vector<int>* leftOutput = getRootToNodePath(root->left, data);
        if (leftOutput != nullptr) {
            leftOutput->push_back(root->data);
            return leftOutput;
        }
        vector<int>* rightOutput = getRootToNodePath(root->right, data);
        if (rightOutput != nullptr) {
            rightOutput->push_back(root->data);
            return rightOutput;
        } else {
            return nullptr;
        }
    }
};

// Function to check if the tree is a valid BST
bool isBSTUtil(Node* root, int mini, int maxi) {
    if (root == nullptr) return true;
    if (root->data <= mini || root->data >= maxi) return false;
    return isBSTUtil(root->left, mini, root->data) &&
           isBSTUtil(root->right, root->data, maxi);
}

bool isBST(Node* root) {
    return isBSTUtil(root, INT_MIN, INT_MAX);
}

// Function to convert a sorted array to BST
Node* sortedArrayToBST(int arr[], int start, int end) {
    if (start > end) return nullptr;
    
    int mid = (start + end) / 2;
    Node* root = new Node(arr[mid]);
    
    root->left = sortedArrayToBST(arr, start, mid - 1);
    root->right = sortedArrayToBST(arr, mid + 1, end);
    
    return root;
}

int main() {
    int n, start;
    cin >> n >> start;
    BST tree;
    
    tree.root = tree.insert(tree.root, start);
    for (int i = 0; i < n - 1; i++) {
        int val;
        cin >> val;
        tree.root = tree.insert(tree.root, val);  
    }
    
    cout << tree.Search(tree.root, 5) << endl;
    tree.inorder(tree.root);
    cout << endl;

    vector<int>* path = tree.getRootToNodePath(tree.root, 5);
    if (path != nullptr) {
        for (int i = 0; i < path->size(); i++) {
            cout << (*path)[i] << " ";
        }
        cout << endl;
    } else {
        cout << "Node not found" << endl;
    }

    tree.root = tree.deleteNode(tree.root, 5);
    tree.inorder(tree.root);
    cout << endl;
    
    return 0;
}


// AVL Trees: Best for lookup-heavy applications where the tree is mostly static.

// Red-Black Trees: Ideal for general-purpose use, especially in libraries and frameworks.

// Splay Trees: Suitable for applications with temporal locality (e.g., caching).

// B-Trees: Perfect for databases and file systems where data is stored on disk.

// 2-3 Trees: Useful for educational purposes or small datasets.

// AA Trees: A simpler alternative to Red-Black Trees.

// Treaps: Good for randomized data or when simplicity is preferred.