



function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let min_idx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
    }
}

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

function mergeSort(arr, st, ed) {
    if (st < ed) {
        let mid = Math.floor((st + ed) / 2);
        mergeSort(arr, st, mid);
        mergeSort(arr, mid + 1, ed);
        merge(arr, st, mid, ed);
    }
}

function merge(arr, st, mid, ed) {
    let left = arr.slice(st, mid + 1);
    let right = arr.slice(mid + 1, ed + 1);
    let i = 0, j = 0, k = st;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k++] = left[i++];
        } else {
            arr[k++] = right[j++];
        }
    }
    while (i < left.length) arr[k++] = left[i++];
    while (j < right.length) arr[k++] = right[j++];
}

function findPivot(arr, low, high) {
    let pivot = arr[low];
    let i = low + 1, j = high;
    while (i <= j) {
        while (i <= high && arr[i] <= pivot) i++;
        while (j >= low && arr[j] > pivot) j--;
        if (i < j) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
}

function quickSort(arr, st, ed) {
    if (st < ed) {
        let pivotIdx = findPivot(arr, st, ed);
        quickSort(arr, st, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, ed);
    }
}

// Example usage
let arr = [64, 25, 12, 22, 11];
selectionSort(arr);
console.log("Selection Sorted:", arr);

arr = [64, 25, 12, 22, 11];
bubbleSort(arr);
console.log("Bubble Sorted:", arr);

arr = [64, 25, 12, 22, 11];
insertionSort(arr);
console.log("Insertion Sorted:", arr);

arr = [64, 25, 12, 22, 11];
mergeSort(arr, 0, arr.length - 1);
console.log("Merge Sorted:", arr);

arr = [64, 25, 12, 22, 11];
quickSort(arr, 0, arr.length - 1);
console.log("Quick Sorted:", arr);
