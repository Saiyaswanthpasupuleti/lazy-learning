function check(arr, val) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}
console.log(check([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 16));
