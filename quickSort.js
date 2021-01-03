function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    let pivot = arr[arr.length-1];
    let leftArr = [];
    let rightArr = [];

    for (let el of arr.slice(0, arr.length-1)) {
        if (el < pivot) {
            leftArr.push(el)
        } else {
            rightArr.push(el);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr) ]
}


console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));