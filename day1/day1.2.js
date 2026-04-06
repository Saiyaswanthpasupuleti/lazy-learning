// Create a function it should accept the sorted array it should find the first pait and return an array

function check(arr){
    var first=0
    var last=arr.length-1
    for(let i=0;i<=arr.length-1;i++){
        if(arr[first]+arr[last]==0){
            return [arr[first],arr[last]]
        }
        first++
        last--
    }

}
console.log(check([-3,-2,-1,0,1,2,3]))