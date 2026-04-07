function check(arr,num){
    var maxSum=0
    var tempSum=0
    for(let i=0;i<num;i++){
        maxSum+=arr[i]
    }
    tempSum=maxSum

    for(let i=num;i<=arr.length-1;i++){
        tempSum=tempSum-arr[i-num]+arr[i]
        maxSum=Math.max(tempSum,maxSum)
    }
    return maxSum

}
console.log(check([1,2,3,4,5,6],3))
//                 [   ]    
// Sldiding Window Patteren