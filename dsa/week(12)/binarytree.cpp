#include <iostream>
#include <queue>
using namespace std;
template <typename T>
class BinaryTreeNode
{
public:
   T data;
   BinaryTreeNode *left;
   BinaryTreeNode *right;
   BinaryTreeNode(T data)
   {
      this->data = data;
      this->left = nullptr;
      this->right = nullptr;
   }
   ~BinaryTreeNode()
   {
      delete left;
      delete right;
   }
};

void printTree(BinaryTreeNode<int> *root)
{
   if (root == nullptr)
   {
      return;
   }
   cout << root->data << ":";
   if (root->left != NULL)
   {
      cout << "L" << root->left->data;
   }
   if (root->right != NULL)
   {
      cout << "R" << root->right->data;
   }
   cout << endl;
   printTree(root->left);
   printTree(root->right);
}

BinaryTreeNode<int> *takeInput()
{
   int rootData;
   cout << "Enter data" << endl;
   cin >> rootData;
   if (rootData == -1)
   {
      return NULL;
   }
   BinaryTreeNode<int> *root = new BinaryTreeNode<int>(rootData);
   BinaryTreeNode<int> *leftChild = takeInput();
   BinaryTreeNode<int> *rightChild = takeInput();
   root->left = leftChild;
   root->right = rightChild;
   return root;
}

BinaryTreeNode<int> *takeInput()
{
   int rootdata;
   cout << "Enter data" << endl;
   cin >> rootdata;
   if (rootdata == -1)
   {
      return NULL;
   }
   BinaryTreeNode<int> *root = new BinaryTreeNode<int>(rootdata);
   BinaryTreeNode<int> *leftchild = takeInput();
   BinaryTreeNode<int> *rightchild = takeInput();
   root->left = leftchild;
   root->right = rightchild;
   return root;
}

int numNodes(BinaryTreeNode<int> *root)
{
   if (root == nullptr)
   {
      return 0;
   }
   return 1 + numNodes(root->left) + numNodes(root->right);
}

BinaryTreeNode<int> *takeInputLevelWise()
{
   int rootData;
   cout << "Enter root data" << endl;
   cin >> rootData;
   if (rootData == -1)
   {
      return nullptr;
   }
   BinaryTreeNode<int> *root = new BinaryTreeNode<int>(rootData);
   queue<BinaryTreeNode<int> *> pendingNodes;
   pendingNodes.push(root);
   while (pendingNodes.size() != 0)
   {
      BinaryTreeNode<int> *front = pendingNodes.front();
      pendingNodes.pop();
      cout << "Enter left child of " << front->data << endl;
      int leftChildData;
      cin >> leftChildData;
      if (leftChildData != -1)
      {
         BinaryTreeNode<int> *child = new BinaryTreeNode<int>(leftChildData);
         front->left = child;
         pendingNodes.push(child);
      }
      cout << "Enter right child of " << front->data << endl;
      int rightChildData;
      cin >> rightChildData;
      if (rightChildData != -1)
      {
         BinaryTreeNode<int> *child = new BinaryTreeNode<int>(rightChildData);
         front->right = child;
         pendingNodes.push(child);
      }
   }
   return root;
}

void inorder(BinaryTreeNode<int> *root)
{
   if (root == nullptr)
   {
      return;
   }
   inorder(root->left);
   cout << root->data << " ";
   inorder(root->right);
}

void preorder(BinaryTreeNode<int> *root)
{
   if (root == nullptr)
   {
      return;
   }
   cout << root->data << " ";
   preorder(root->left);
   preorder(root->right);
}

void postorder(BinaryTreeNode<int> *root)
{
   if (root == nullptr)
   {
      return;
   }
   postorder(root->left);
   postorder(root->right);
   cout << root->data << " ";
}

BinaryTreeNode<int> *buildTreeHelper(int *in, int *pre, int inS, int inE, int preS, int preE)
{
   if (inS > inE)
   {
      return nullptr;
   }
   int rootIndex = -1;
   int rootdata = pre[preS];
   for (int i = 0; i < inE; i++)
   {
      if (in[i] == rootdata)
      {
         rootIndex = i;
         break;
      }
   }
   // Initializing the left subtree’s indices for recursive call
   int linS = inS;
   int linE = rootIndex - 1;
   int lpreS = preS + 1;
   int lpreE = (linE - linS) + lpreS;

   // Initializing the right subtree’s indices for recursive call
   int rpreS = lpreE + 1;
   int rpreE = preE;
   int rinS = rootIndex + 1;
   int rinE = inE;

   BinaryTreeNode<int> *root = new BinaryTreeNode<int>(rootdata);
   root->left = buildTreeHelper(in, pre, linS, linE, lpreS, lpreE);
   root->right = buildTreeHelper(in, pre, rinS, rinE, rpreS, rpreE);
   return root;
}

BinaryTreeNode<int> *buildTree(int *in, int *pre, int size)
{
   return buildTreeHelper(in, pre, 0, size - 1, 0, size - 1);
}

int height(BinaryTreeNode<int> *root)
{
   if (root == nullptr)
   {
      return 0;
   }
   return 1 + max(height(root->left), height(root->right));
}

int diameter_of_a_binary_tree(BinaryTreeNode<int> *root)
{
   if (root == nullptr)
   {
      return 0;
   }
   int option1 = height(root->left) + height(root->right) + 1;
   int option2 = diameter_of_a_binary_tree(root->left);
   int option3 = diameter_of_a_binary_tree(root->right);
   return max(option1, max(option2, option3));
}

pair<int, int> p;

pair<int, int> heightDiameter(BinaryTreeNode<int> *root)
{
   if (root == nullptr)
   {
      pair<int, int> p;
      p.first = 0;
      p.second = 0;
      return p;
   }
   pair<int, int> leftAns = heightDiameter(root->left);
   pair<int, int> rightAns = heightDiameter(root->right);
   int ld = leftAns.second;
   int lh = leftAns.first;
   int rd = rightAns.second;
   int rh = rightAns.first;
   int height = 1 + max(lh, rh);
   int diameter = max(lh + rh, max(ld, rd));
   pair<int, int> p;
   p.first = height;
   p.second = diameter;
   return p;
}

int main()
{
   ios_base::sync_with_stdio(false);
   cin.tie(0);
   cout.tie(0);
   int size;
   cin >> size;
   int *in = new int[size - 1];
   for (int i = 0; i < size; i++)
   {
      cin >> in[i];
   }
   int *pre = new int[size - 1];
   for (int i = 0; i < size; i++)
   {
      cin >> pre[i];
   }
   BinaryTreeNode<int> *ans = buildTree(in, pre, size);
   printTree(ans);
   return 0;
}