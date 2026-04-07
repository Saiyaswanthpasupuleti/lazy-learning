function check(arr){
    var i=0
    for(let j=1;j<=arr.length-1;j++){
        if(arr[i]!==arr[j]){
            i++
            arr[i]=arr[j]
        }

    }
    return i+1
}
console.log(check([1,1,1,1,1,2]))
//                  i j