
#include <bits/stdc++.h>
using namespace std;
#define fast                        \
  ios_base::sync_with_stdio(false); \
  cin.tie(0);                       \
  cout.tie(0);

// Maximum Sum Subarray Problem:
int Maximum_Sum_Subarray_of_size_k(int arr[], int n, int k)
{
  int maxi = INT_MIN;
  int i = 0, j = 0;
  int sum = 0;
  while (j < n)
  {
    sum = sum + arr[j];
    if (j - i + 1 < k)
    {
      j++;
    }
    else if (j - i + 1 == k)
    {
      maxi = max(maxi, sum);
      sum = sum - arr[i];
      i++;
      j++;
    }
  }
  return maxi;
}
// first (-ve) integer in every window of size k
vector<int> first_neg_int_with_window_size_k(int arr1[], int n, int k) {
    list<int> l;
    vector<int> ans;
    int i = 0, j = 0;

    while (j < n) {
        if (arr1[j] < 0) {
            l.push_back(arr1[j]);
        }

        if (j - i + 1 < k) {
            j++;
        } 
        else if (j - i + 1 == k) {
            if (l.empty()) {
                ans.push_back(0);
            } else {
                ans.push_back(l.front());
                if (arr1[i] == l.front()) {
                    l.pop_front();  
                }
            }
            i++;
            j++;
        }
    }
    return ans;
}


int main()
{
  fast;
  int n = 7;
    int arr[] = {2, 5, 1, 8, 2, 9, 1};
    int k = 3;
    // Maximum Sum Subarray
    int max_sum = Maximum_Sum_Subarray_of_size_k(arr, n, k);
    cout << "Maximum Sum Subarray of size " << k << ": " << max_sum << endl;

    // First Negative Integer in Every Window
    int arr1[] = {-1, -1, -7, -15, -14, -101, -3}; 
    vector<int> negatives = first_neg_int_with_window_size_k(arr1, n, k);

    cout << "First Negative Integer in Every Window of size " << k << ": ";
    for (int num : negatives) {
        cout << num << " ";
    }
    cout << endl;
  return 0;
}