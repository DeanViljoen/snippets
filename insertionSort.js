let arr = [5,3,2,9,1,4,6,7,8,0];

/*
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i - 1;
        //loop through elements before / left of index i
        //if it is GREATER than temp, move it one place up
        //whatever is in 'temp' will go in the 'opening'
        //if nothing GREATER than temp is found, temp will 'stay' at position i
        while (j >= 0 && arr[j] > temp) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j + 1] = temp; //j tracks where temp should go;
        console.log("Iteration",i,":",arr);
    }
    return arr;
}*/
/*
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    return arr;
}
*/
/*13-11-23: Let's implement it again*/
function swap(firstIndex, secondIndex, arr) {
    temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let temp = arr[i];
        while (j >= 0 && temp < arr[j]) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1]=temp;
    }
}
insertionSort(arr);
console.log(arr);