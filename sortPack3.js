function swap(index1, index2, arr) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                swap(j+1,j,arr);
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

let arr = [9,3,61,3,5,7,33,5,0,12];
selectionSort(arr);
console.log(arr);