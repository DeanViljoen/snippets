function swap(index1, index2, arr) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                swap(j, j+1, arr);
            }
        }
    }
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        swap(min, i, arr);
    }
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let temp = arr[i];
        while (j >= 0 && temp < arr[j]) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
}

function quickSort(start, end, arr) {
    if (start >= end) return; //base case
    pivot = partition(start, end, arr);
    quickSort(start,pivot-1,arr); //left
    quickSort(pivot+1,end,arr); //right
}

function partition(start, end, arr) {
    //find pivot
    let pivot = Math.floor((start+end)/2);
    //swap with first item
    swap(start,pivot,arr);
    let smallIndex = start;
    for (let i = start + 1; i <= end; i++) {
        if (arr[start] > arr[i]) {
            smallIndex++;
            swap(i,smallIndex,arr);
        }
    }
    swap(smallIndex,start,arr);
    return smallIndex;
}

let arr=[9,9,8,5,4,3,2,1,0,9,3,4,1,2,3,5,6,8];
quickSort(0,arr.length-1,arr);
//insertionSort(arr);
console.log(arr);