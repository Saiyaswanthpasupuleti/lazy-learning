var secondHighest = function(s) {
    var num= Number(s.match(/\d/g))
    console.log(num)

     if(s){
       return num
     }
     else if(num.length<=1){
        return -1
     }
};
console.log(secondHighest('dfa12321afd'))
