let arr = [3,1,4,5,5,2,0];
let arrL = [1,3,5]; //sorted
let arrR = [0,2,8];  //sorted

/*

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
*/
//Let's try again: 13-11-23
function mergeSort(arr) {
    if (arr.length <= 1) return; //base case;
    let leftArray = [], rightArray = [];
    let rightStart = arr.length / 2;
    for (let i = 0; i < arr.length; i++) {
        if (i < rightStart) {
            leftArray.push(arr[i]);
        } else {
            rightArray.push(arr[i]);
        }
    }
    mergeSort(leftArray);
    mergeSort(rightArray);
    merge(leftArray, rightArray, arr);
}

function merge(leftArray, rightArray, original) {
    let i = 0, r = 0, l = 0;
    //implementation here is inspired by BroCode
    while (l < leftArray.length && r < rightArray.length) {
        if (leftArray[l] < rightArray[r]) {
            original[i] = leftArray[l];
            l++;
            i++;
        } else {
            original[i] = rightArray[r];
            r++;
            i++;
        }
    }
    while (r < rightArray.length) {
        original[i] = rightArray[r];
        r++;
        i++;
    }
    while (l < leftArray.length) {
        original[i] = leftArray[l];
        l++;
        i++;
    }
}



mergeSort(arr);
console.log(arr);