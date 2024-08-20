function solution(number) {
    let count = 0;
    for(let a = 0; a < number.length - 2; a++){
        for(let b = 0; b < number.length - 1; b++){
            for(let c = 0; c < number.length; c++){
                if(a < b && b < c){
                    if(number[a] + number[b] + number[c] == 0){
                        count++;
                    }
                }
            }
        }
    }
    return count
}