//a collection of five sorting functions

/*
//bubbleSort study model
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) { //final iteration is 2nd last element, because comparison to a 'next' element is needed.
        for (let y = 0; y < arr.length - 1 - i; y++) {//biggest element moved to back each iteration, so the last i items are sorted already and we don't need to check them. hence we subract i.
         if (arr[y] > arr[y+1]) {//if the element "to the right" is bigger, we swap the current element with it
             let temp = arr[y];
             arr[y] = arr[y+1];
             arr[y+1] = temp;
          }
      }
    }
  }
*/

/*
//Bubble sort again, nice and early in the morning :D
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}
*/
/*
//Another shot to get it really internalised
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
*/

/*
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
*/
/*
//more bubble sort!
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}
*/
//keep it going
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

/*
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
}
*/
//Let's go again:
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
}

/*
function insertionSort(arr) {
    for (i = 1; i < arr.length; i++) {
        let j = i - 1;
        let temp = arr[i];
        while (j >= 0 && arr[j] > temp) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
}
*/
//14-11-23: Let's try today
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

function mergeSort(arr) {
    if (arr.length == 1) {return;} //base case
    let mid = Math.floor(arr.length / 2);
    let leftArray = [], rightArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i < mid) {
            leftArray.push(arr[i]);
        } else {
            rightArray.push(arr[i]);
        }
    }
    mergeSort(leftArray);
    mergeSort(rightArray);
    merge(leftArray, rightArray, arr);
}

function merge(leftArray, rightArray, originalArray) {
    let l = 0, r = 0, i = 0;
    while (l < leftArray.length && r < rightArray.length) {
        if (leftArray[l] < rightArray[r]) {
            originalArray[i] = leftArray[l];
            l++;
        } else {
            originalArray[i] = rightArray[r];
            r++;
        }
        i++;
    }
    while (l < leftArray.length) {
        originalArray[i] = leftArray[l];
        l++;
        i++;
    }
    while (r < rightArray.length) {
        originalArray[i] = rightArray[r];
        r++;
        i++;
    }
}

//weird but seems to work!
function partition(start, end, arr) {
    //find pivot
    let pivot = Math.floor((start+end)/2);
    //swap pivot and first element
    let temp = arr[start];
    arr[start]=arr[pivot];
    arr[pivot]=temp;
    let j = start;
    for (let i = j + 1;  i <= end; i++) {
        if (arr[i] < arr[start]) {
            let temp = arr[j+1];
            arr[j+1] = arr[i];
            arr[i] = temp; 
            j++;
        }
    }
    temp = arr[j];
    arr[j] = arr[start];
    arr[start] = temp;
    return j;
}

function quickSort(start, end, arr) {
    if (start >= end) return;
    let pivot = partition(start, end, arr);
    quickSort(start,pivot-1,arr);
    quickSort(pivot+1,end,arr);
}

let arr = [5,9,2,0,1,7,6,8,8,8,3];
//mergeSort(arr);
let arr2 = [9,6,5,6,7,2,1,6,1,3,7,0,9,0];
bubbleSort(arr2);
console.log(arr2);