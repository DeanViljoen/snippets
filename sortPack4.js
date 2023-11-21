function swap(index1, index2, arr) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                swap(j,j+1,arr);
            }
        }
    }
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        swap(i,min,arr);
    }
}

let arr=[1,4,6,2,1,0,9,8,2,3,0];
selectionSort(arr);
console.log(arr);