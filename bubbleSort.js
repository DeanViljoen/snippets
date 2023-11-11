//bubble sort algorimth will be implemented here
let arr = [1,4,5,8,9,0,2,3,7,6];

function bubbleSort(arr) {
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
}

console.log(bubbleSort(arr));
