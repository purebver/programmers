function solution(babbling) {
    let arr = ["aya", "ye", "woo", "ma"];
    let count = 0;
    babbling.forEach(a => {
        let possible = true;
        let before_a = '';
        while(a.length > 0 && possible){
            let possible2 = false;
            
            for(let say of arr){
                if(a.startsWith(say) && before_a !== say){
                    a = a.slice(say.length)
                    before_a = say;
                    possible2 = true;
                    break;
                }
            }
            
            if(!possible2){
                possible = false;
            }
        }
         if(possible && a.length === 0){
             count++;
         }
    })
    return count;
}