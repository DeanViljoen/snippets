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

function mergeSort(arr) {

}

function merge(rightArrayStart, arr) {
    let l = 0, r = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i+l] > arr[rightArrayStart]) {
            
        }
    }
}

let arr = [5,9,2,0,1,7,6,8,8,8,3];
bubbleSort(arr);
console.log(arr);