function bubbleSort(arr){
for(let i=0;i<=arr.length-1;i++){
var lowest=i
for(let j=i+1;j<=arr.length-1;j++){
if(arr[j]<arr[lowest]){
lowest=j
}
}
[arr[i],arr[lowest]]=[arr[lowest],arr[i]]
}
return arr;
}
console.log(bubbleSort([55,76,23,56,24]))
