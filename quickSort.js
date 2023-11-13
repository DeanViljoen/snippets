function swap(arr, firstIndex, secondIndex) {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

//partition function: uses middle element as pivot
function partition(start, end, arr) {
    let pivot = Math.floor((start + end) / 2); //middle element of range
    swap(arr, start, pivot);
    let smallIndex = start;
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < arr[start]) {
            smallIndex++;
            swap(arr,i,smallIndex);
        }
    }
    swap(arr,start,smallIndex);
    return smallIndex;
}

function quickSort(start, end, arr) {
    if (start >= end) return;
    let pivot = partition(start,end,arr);
    quickSort(start, pivot - 1, arr);
    quickSort(pivot + 1, end, arr);
}

//let arr = [45,82,25,94,50,60,78,32,92];
let arr = [32,55,87,13,78,96,52,48,22,11,58,66,88,45];
quickSort(0,13, arr);
console.log(arr);