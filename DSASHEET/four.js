// 7. Reverse Integer
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21



var reverse = function(x) {
  var rev=0;
  while(x!==0){
    let digit=x%10;
    x=Math.trunc(x/10)
    
    if (rev > 214748364) return 0;
    if (rev < -214748364) return 0;
    rev=rev*10+digit
  }
  return rev
    
};
// console.log(reverse(-123))



function smallest(arr){
    var smallest=arr[0]
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i]<smallest){
            smallest=arr[i]
        }
    }
    return smallest

}
// console.log(smallest([3,2,1,0]))


function largest(arr){
    var largest=arr[0]
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i]>largest){
            largest=arr[i]
        }
    }
    return largest
}
console.log(largest([3,2,1,0]))