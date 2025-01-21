#include <bits/stdc++.h>
using namespace std;

void printpriorityqueue(priority_queue<int, vector<int>, greater<int>> pq)
{
    priority_queue<int, vector<int>, greater<int>> pq2 = pq;
    while (!pq.empty())
    {
        cout << pq.top() << "\n";
        pq.pop();
    }
}

void printpriorityqueue1(priority_queue<int> pqr)
{
    priority_queue<int> pq2 = pqr;
    while (!pqr.empty())
    {
        cout << pqr.top() << "\n";
        pqr.pop();
    }
}

void printlist(list<int> li)
{
    list<int>::iterator it;
    for (it = li.begin(); it != li.end(); it++)
    {
        cout << *it << " ";
    }
    cout << endl;
}

// struct Interval
// {
//     int st;
//     int et;
// };
// bool compare(Interval i1, Interval i2)
// {
//     return i1.st < i2.st; // > for descending
// }

int32_t main()
{
    // priority_queue<int> pqr;
    // for (int i = 1; i <= 5; i++)
    //     pqr.push(i);
    // printpriorityqueue1(pqr);
    // cout << pqr.size() << pqr.top() << endl;
    // pqr.pop();
    // printpriorityqueue1(pqr);

    // priority_queue<int, vector<int>, greater<int>> pq;
    // for (int i = 1; i <= 5; i++)
    //     pq.push(i);
    // printpriorityqueue(pq);

    // list<int> li;
    // li.push_back(10);
    // li.push_back(20);
    // li.push_front(30);
    // li.push_front(40);
    // li.push_front(50);
    // li.reverse();
    // printlist(li);
    // li.sort();
    // printlist(li);
    // cout << li.size() << endl;
    // cout << li.front() << endl;
    // li.pop_front();
    // cout << li.back() << endl;
    // li.pop_back();

    // multimap<int, int> mp;
    // for (int i = 1; i <= 5; i++)
    // {
    //     mp.insert({i, i * 10});
    // }
    // mp.insert({4, 40});
    // for (auto it = mp.begin(); it != mp.end(); it++)
    // {
    //     cout << it->first << "\t" << it->second << endl;
    // }
    // int n = 2;
    // if (mp.find(2) != mp.end())
    //     cout << n << " is present in multimap" << endl;
    // mp.erase(mp.begin());
    // cout << mp.size();
    // if (mp.empty() == false)
    //     cout << "The multimap  not  empty" << endl;
    // mp.clear();

    // Interval arr[] = {{6, 4}, {3, 4}, {4, 6}, {8, 13}};
    // sort(arr, arr + 4, compare);
    // for (int i = 0; i < 4; i++)
    // {
    //     cout << arr[i].st << " : " << arr[i].et << endl;
    // }

    // int arr[] = {1, 3, 2, 5, 7, 6};
    // sort(arr, arr + 6);
    // for (int i = 0; i < 6; i++)
    // {
    //     cout << arr[i] << " ";
    // }
    // cout << endl;
    // cout << binary_search(arr, arr + 6, 2) << endl;
    // cout << lower_bound(arr, arr + 6, 3) - arr << endl;
    // cout<<upper_bound(arr,arr+6,3) - arr << endl;

    return 0;
}