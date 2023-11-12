//bubble sort algorimth will be implemented here
let arr = [1,4,5,8,9,0,2,3,7,6];

/*function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let y = 0; y < arr.length - 1 - i; y++) {
         if (arr[y] < arr[y+1]) {
             let temp = arr[y];
             arr[y] = arr[y+1];
             arr[y+1] = temp;
          }
      }
    }
    return(arr);
}*/

/*
function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i+1]) {
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        } 
        console.log("executed!");
    } while (swapped);
    return arr;
}
*/

//once more for practice!
function bubbleSort (arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i+1]
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}

console.log(bubbleSort(arr));
