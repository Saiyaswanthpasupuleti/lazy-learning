function check(arr, val) {
  var first = 0;
  var last = arr.length - 1;

  while (first <= last) {
    var middle = Math.floor((first + last) / 2);

    if (arr[middle] === val) {
      return middle;
    } else if (val < arr[middle]) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }

  return -1;
}

console.log(check([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));
