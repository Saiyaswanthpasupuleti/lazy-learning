// Wrire a function which accepts 2 strings find wheather it is anagaram or not 

function check(str1,str2) {
    var obj1={}
    var obj2={}

    for(let i=0;i<=str1.length-1;i++){
        obj1[str1[i]]= (obj1[str1[i]] || 0) +1
    }

    for(let i=0;i<=str2.length-1;i++){
        obj2[str2[i]]=(obj2[str2[i]]|| 0)+1
    }

    for(let key in obj1){
        if(obj1[key]!==obj2[key]){
            return false
        }
    }    
    return true
    
}
console.log(check('anagram','nagaram'))
