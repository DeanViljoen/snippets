//a collection of five sorting functions
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j]>arr[j+1]) {
                let temp = arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
        console.log("After iteration",i+1,":",arr);
    }
}

let arr = [5,9,2,0,1];
bubbleSort(arr);
console.log(arr);