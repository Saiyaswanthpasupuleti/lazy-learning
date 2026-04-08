function check(str){
    var maxStr=''
    for(let i=0;i<=str.length-1;i++){
        var tempstr=''
        for(let j=i;j<=str.length-1;j++){
            if(!tempstr.includes(str[j])){
                tempstr+=str[j]
                if(tempstr.length>maxStr.length){
                    maxStr=tempstr
                }
            }
            else{
                break
            }
        }
    }
    return maxStr

}
console.log(check('bcbacsafs'))