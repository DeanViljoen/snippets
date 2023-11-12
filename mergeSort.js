let arr = [3,1,4,5,5,2,0];
let arrL = [1,3,5]; //sorted
let arrR = [0,2,8];  //sorted
function mergeSort(arr) {
    if (arr.length == 1) {return arr};
    let rightIndex = arr.length / 2;
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i < rightIndex) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }
    mergeSort(leftArr);
    mergeSort(rightArr);
    merge(leftArr, rightArr, arr);
    return arr;
}

//requires leftArray and rightArray to be sorted(!)
function merge(leftArray, rightArray, originalArray) {
    let leftIndex = 0;
    let rightIndex = 0;
    for (let i = 0; i < originalArray.length; i++) {
        if (leftArray[leftIndex] < rightArray[rightIndex] || rightIndex > rightArray.length - 1) {
            originalArray[i] = leftArray[leftIndex];
            leftIndex++;
        } else {
            originalArray[i] = rightArray[rightIndex];
            rightIndex++;
        }
    }
}

//merge(arrL, arrR, arr);
mergeSort(arr);
console.log(arr);