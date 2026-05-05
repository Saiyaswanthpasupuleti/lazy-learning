
// Two
// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.

 

// Example 1:

// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
// Example 2:

// Input: s = "abc1111"
// Output: -1
// Explanation: The digits that appear in s are [1]. There is no second largest digit. 
 

function secondLargest(str){
    var num=str.match(/\d/g)
    var z=new Set(num.map(Number))
    var x=[]
    for(let i of z){
        x.push(i)
    }
    var largest=x[0];
    var secondLargest=x[0];
    for(let i=0;i<x.length;i++){
        if(x[i]>largest){
            secondLargest=largest
            largest=x[i]
            
        }
        if(x[i]>secondLargest&&x[i]!==largest){
            secondLargest=x[i]
        }
    }
    return secondLargest
}
// console.log(secondLargest('dfa12321afd'))
