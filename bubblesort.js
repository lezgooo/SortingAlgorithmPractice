function genRandomArray(n){
    let arr = [];
    for (let i = 0; i < n; i++){
        arr[i] = Math.round(10*Math.random());
    }
    return arr;
}

function swap(array, index1, index2){
    let x = array[index2];
    array[index2] = array[index1];
    array[index1] = x;
    return array;
}

function bubbleSort(array){
    let n = array.length;
    for (let i = 0; i <= n-2; i++){
        let count = 0;
        for (let j= 0; j <= n-2; j++){
            if (array[j+1] < array[j]){
                swap(array, j, j+1);
                count++;
            }
        }
        if (count == 0){
            break;
        }
    }
    return array;
}

let array = genRandomArray(20);
console.log("Below is the unsorted array");
console.log(array);
console.log("Using Bubblesort, we sort the sort the array as shown below!");
console.log(bubbleSort(array));