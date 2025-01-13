#include <iostream>
using namespace std;
#define fast_io                       \
    ios_base::sync_with_stdio(false); \
    cin.tie(NULL);                    \
    cout.tie(NULL)
#define yes cout << "YES" << endl
#define no cout << "NO" << endl
#define count_setbit(n) __builtin_popcount(n)

// Selection sort

void selectionsort(int arr[], int n)
{
    for (int i = 0; i < n - 1; i++)
    {
        int min_idx = i;
        for (int j = i + 1; j < n; j++)
        {
            if (arr[j] < arr[min_idx])
            {
                min_idx = j;
            }
        }
        swap(arr[i], arr[min_idx]);
    }
}

// Bubble sort

void bubbleSort(int arr[], int n)
{
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = 0; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}

// Insertion sort

void insertionSort(int arr[], int n){
     for(int i=1;i<n;i++){
        int key=arr[i];
        int j=i-1;
        while(j>=0 && arr[j]>key){
                arr[j+1]=arr[j];
                j--;
            }
            arr[j+1]=key;
        }
}

// Merge sort
void merge(int arr[], int st, int mid, int ed)
{
    int i = st;
    int j = mid + 1;
    int k = 0;
    int *temp = new int[ed - st + 1];
    while (i <= mid && j <= ed)
    {
        if (arr[i] <= arr[j])
        {
            temp[k++] = arr[i];
            i++;
        }
        else
        {
            temp[k++] = arr[j];
            j++;
        }
    }
    while (i <= mid)
    {
        temp[k++] = arr[i];
        i++;
    }
    while (j <= ed)
    {
        temp[k++] = arr[j];
        j++;
    }
    for (int x=0;x < k; x++)
    {
        arr[st+x] = temp[x];
    }
        delete[] temp;
}

void merge_sort(int arr[], int st, int ed)
{
    int mid = (st + ed) / 2;
    if (st < ed)
    {
        merge_sort(arr, st, mid);
        merge_sort(arr, mid + 1, ed);
        merge(arr, st, mid, ed);
    }
}
//     Quick sort
int  find_pivot(int arr[], int low, int high){
      int i=low+1;
      int j=high;
      int pivot = arr[low];
      while(i<=j){
        while (i <= high && arr[i] <= pivot) {
            i++;
        }
        while (j >= low && arr[j] > pivot) {
            j--;
        }
        if (i < j) {
            swap(arr[i], arr[j]);
        }
        }
        swap(arr[low],arr[j]);
        return j;
}

void quick_sort(int arr[],int st,int ed){
    if(ed<=1) return;
    if(st<ed){
       int findpivot=find_pivot(arr,st,ed);
       find_pivot(arr,st,findpivot-1);
       find_pivot(arr,findpivot+1,ed);
    }
}

int main()
{
    fast_io;
    int n;
    cin >> n;
    int *arr = new int[n];
    for (int i = 0; i < n; i++)
        cin >> arr[i];
    selectionsort(arr, n);
    bubbleSort(arr,n);
    insertionSort(arr,n);
    merge_sort(arr, 0, n-1);
    quick_sort(arr,0,n-1);
    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
    return 0;
}