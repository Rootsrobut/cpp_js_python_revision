#include<bits/stdc++.h>
using namespace std;

// Function to find the longest window with a given target sum
int Find_longest_window_of_size(int arr[], int target_sum, int size) {
    int i = 0, j = 0;
    long sum = 0, maxi = 0;
    while (j < size) {
        sum += arr[j];
        if (sum < target_sum) {
            j++;
        } else if (sum == target_sum) {
            if (maxi< (j - i + 1)){
                maxi=j - i + 1;
            }
            j++;
        } else if (sum > target_sum) {
            while (sum > target_sum) {
                sum -= arr[i];
                i++;
            }
            j++;
        }
    }
    return maxi;
}

// Function to find the longest substring with exactly k unique characters
int Longest_substring_with_k_unique_character(string str, int k) {
    int i = 0, j = 0;
    int maxi = 0;
    int size = str.size();
    map<char, int> mp;
    while (j < size) {
        mp[str[j]]++;
        if (mp.size() < k) {
            j++;
        } else if (mp.size() == k) {
            maxi = max(maxi, j - i + 1);
            j++;
        } else if (mp.size() > k) {
            while (mp.size() > k) {
                mp[str[i]]--;
                if (mp[str[i]] == 0) {
                    mp.erase(str[i]);
                }
                i++;
            }
            j++;
        }
    }
    return maxi;
}
int Longest_substring_with_no_repeting_character(string str, int k) {
    int i=0,j=0;
    int maxi=0;
    int size=str.size();
    map<char,int>mp;
    while(j<size){
        mp[str[j]]++;
        if(mp.size()<(j-i+1)){
            while(mp.size()<(j-i+1)){
                mp[str[i]]--;
                if(mp[str[i]]==0){
                    mp.erase(str[i]);
                }
                i++;
            }
            j++;
        }
        else if(mp.size()==(j-i+1)){
            if(maxi<(j-i+1)){
                maxi=(j-i+1);
            }
            j++;
        }
    }
    return maxi;
}
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);

    int arr[] = {4, 1, 1, 1, 2, 3, 5};
    int target_sum = 5;
    int size = sizeof(arr) / sizeof(arr[0]);
    int ans = Find_longest_window_of_size(arr, target_sum, size);
    cout << "Longest window with target sum: " << ans << endl;

    string str = "aabacbebebe";
    int k = 3;
    int ans2 = Longest_substring_with_k_unique_character(str, k);
    int ans3 = Longest_substring_with_no_repeting_character(str, k);
    cout << "Longest substring with " << k << " unique characters: " << ans2 << endl;

    return 0;
}