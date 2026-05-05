// One

function sum(...num){
    if(!num) return 0
    return num.reduce((a,b)=>a+b)

}
// console.log(sum(100,200,300,400))


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


// Given an integer x, return true if x is a palindrome, and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


var isPalindrome = function(x) {
    var dummyRes=x
    var res=''
    while(x>0){
        var temp=x%10
        res+=temp
        x=Math.floor(x/10)
    }
 
    if(dummyRes===Number(res)){
        return true
    }
    else{
        return false
    }
};
// console.log(isPalindrome(121))

// console.log(Math.floor(121/10))



