function selectionSort(arr) {
  for (var i = 1; i <= arr.length - 1; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }

  return arr;
}
console.log(selectionSort([9, 5, 4, 2]));
