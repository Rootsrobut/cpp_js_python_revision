#include <bits/stdc++.h>
using namespace std;
template <typename T>
class TreeNode
{
public:
    T data;
    vector<TreeNode<T> *> children;
    TreeNode(T data)
    {
        this->data = data;
    }
    ~TreeNode()
    {
        for (TreeNode<T> *child : children)
        {
            delete child;
        }
    }
};

TreeNode<int> *takeInput()
{
    int rootData;
    cout << "Enter data" << endl;
    cin >> rootData;
    TreeNode<int> *root = new TreeNode<int>(rootData);
    int n;
    cout << "Enter number of children of" << rootData << endl;
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        TreeNode<int> *child = takeInput();
        root->children.push_back(child);
    }
    return root;
}

void printTree(TreeNode<int> *root)
{
    if (root == nullptr)
    {
        return;
    }
    cout << root->data << ":";
    for (int i = 0; i < root->children.size(); i++)
    {
        cout << root->children[i]->data << ",";
    }
    cout << endl;
    for (int i = 0; i < root->children.size(); i++)
    {
        printTree(root->children[i]);
    }
}

TreeNode<int> *takeInputLevelWise()
{
    int rootdata;
    cout << "Enter a rootdata" << endl;
    cin >> rootdata;
    TreeNode<int> *root = new TreeNode<int>(rootdata);
    queue<TreeNode<int> *> qu;
    qu.push(root);
    while (qu.size() != 0)
    {
        TreeNode<int> *front = qu.front();
        qu.pop();
        int noofchild;
        cin >> noofchild;
        for (int i = 0; i < noofchild; i++)
        {
            int childdata;
            cout << "Enter " << i << "th child of " << front->data << endl;
            cin >> childdata;
            TreeNode<int> *child = new TreeNode<int>(childdata);
            front->children.push_back(child);
            qu.push(child);
        }
    }
    return root;
}

int numNodes(TreeNode<int> *root)
{

    if (root == nullptr)
    {
        return 0;
    }
    int ans = 1;
    for (int i = 0; i < root->children.size(); i++)
    {
        ans += numNodes(root->children[i]);
    }
    return ans;
}

int height_of_the_tree(TreeNode<int> *root)
{
    if (root == nullptr)
    {
        return 0;
    }
    int ans = 0;
    for (int i = 0; i < root->children.size(); i++)
    {
        int smallanswer = height_of_the_tree(root->children[i]);
        ans = max(ans, smallanswer);
    }
    return ans + 1;
}

void printAtLevelK(TreeNode<int> *root, int k)
{
    if (root == nullptr)
    {
        return;
    }
    if (k == 0)
    {
        cout << root->data<<" ";
        return;
    }
    for (int i = 0; i < root->children.size(); i++)
    {
        printAtLevelK(root->children[i], k - 1);
    }
}

void preorder(TreeNode<int> *root)
{
    if (root == NULL)
    {
        return;
    }
    cout << root->data << endl;
    for (int i = 0; i < root->children.size(); i++)
    {
        preorder(root->children[i]);
    }
}

void deleteTree(TreeNode<int> *root)
{
    for (int i = 0; i < root->children.size(); i++)
    {
        deleteTree(root->children[i]);
    }
    delete root;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    TreeNode<int> *root = takeInput();
    TreeNode<int> *root = takeInputLevelWise();
    printTree(root);
    return 0;
}