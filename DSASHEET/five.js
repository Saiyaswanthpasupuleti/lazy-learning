// Five
// Count negative numbers in the array;
function negativeNumbers(arr){
    if(arr.length<0) return 0
    var count=0
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i]<0){
            count++
        }
    }
    return count
}
console.log(negativeNumbers([-2,-1,-5]))