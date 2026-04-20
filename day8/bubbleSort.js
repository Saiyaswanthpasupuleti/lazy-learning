function check(nums){
var largest=nums[0]
for(let i=0;i<=nums.length-1;i++){
for(let j=i+1;j<=nums.length-1;j++){
if(nums[i]>nums[j]){
//var temp=nums[i]
//nums[i]=nums[j]
//nums[j]=temp
[nums[i],nums[j]]=[nums[j],nums[i]]
}

}
}
return nums
}
console.log(check([9,5,3,2,1]))
