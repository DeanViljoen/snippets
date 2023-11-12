/*
function selectionSort(arr) {
    let min = 0;
    for (let i = 0; i < arr.length - 1; i++) { //final element read is 2nd last element of arr
        for (let j = i + 1; j < arr.length; j++) { //final element read is last element of arr
            if (arr[min] > arr[j]) {
                min = j;
            }
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
        console.log("Pass",i+1,":",arr);
    }
    return arr;
}
*/
//12-11-23: Let's try implementing selection sort again!
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

let arr = [5,3,2,9,6,8,1,4,0,7];
console.log(selectionSort(arr));