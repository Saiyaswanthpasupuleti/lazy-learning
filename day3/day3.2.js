// Maximum and minimum of an array using minimum number of comparisons
// Last Updated : 25 Oct, 2025
// Given an array of integers arr[], the task is to find the maximum and minimum elements in the array using the minimum number of comparisons.

// Examples:

// Input: arr[] = [3, 5, 4, 1, 9]
// Output: [1, 9]
// Explanation: The minimum element is 1, and the maximum element is 9.

// Input: arr[] = [22, 14, 8, 17, 35, 3]
// Output: [3, 35] 
// Explanation: The minimum element is 3, and the maximum element is 35.

function check(arr){
    var min=Infinity
    var max=-Infinity
    for(let i=0;i<=arr.length-1;i++){
         if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        
    }
    return [min,max]
}
console.log(check([3, 5, 4, 1, 9]))