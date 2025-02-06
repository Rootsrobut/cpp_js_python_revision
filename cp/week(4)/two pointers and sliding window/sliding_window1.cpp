#include <bits/stdc++.h>
using namespace std;
#define fast                        \
  ios_base::sync_with_stdio(false); \
  cin.tie(0);                       \
  cout.tie(0);

int count_of_occeurances_of_anagram(string s1, string s2) {
    int k = s2.length();
    map<char, int> m;
    for (int i = 0; i < k; i++) {
        m[s2[i]]++;
    }
    int ans = 0;
    int counter = m.size();
    int n = s1.length();
    int i = 0, j = 0;
    while (j < n) {
        if (m.count(s1[j]) > 0) { 
            m[s1[j]]--;
            if (m[s1[j]] == 0) {
                counter--;
            }
        }
        if (j - i + 1 < k) {
            j++;
        } else if (j - i + 1 == k) {
            if (counter == 0) {
                ans++;
            }
            if (m.count(s1[i]) > 0) { 
                m[s1[i]]++;
                if (m[s1[i]] == 1) {  
                    counter++;
                }
            }
            i++; j++;
        }
    }
    return ans;
}

// Max of all subarrays of size k
vector<int> Max_of_all_subarrays_of_size_k(int arr[], int n, int k) {
    int i = 0, j = 0;
    deque<int> l;
    vector<int> v;
    while (j < n) {
        while (!l.empty() && l.back() < arr[j]) {
            l.pop_back();
        }
        l.push_back(arr[j]);
        if (j - i + 1 < k) {
            j++;
        } else if (j - i + 1 == k) {
            v.push_back(l.front());
            if (l.front() == arr[i]) {
                l.pop_front(); 
            }
            i++; j++;
        }
    }
    return v;
}

int main() {
    fast;
    string s1 = "allllahgjgjlal";
    string s2 = "all";
    cout << count_of_occeurances_of_anagram(s1, s2) << endl;
    
    int n = 8;
    int arr[] = {1, 3, -1, -3, 5, 3, 6, 7};
    int k = 3;
    vector<int> result = Max_of_all_subarrays_of_size_k(arr, n, k);
    for (int num : result) {
        cout << num << " ";
    }
    cout << endl;
    return 0;
}
