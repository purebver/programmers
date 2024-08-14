function solution(number, limit, power) {
    let result = 0;
    
    for (let i = 1; i <= number; i++) {
        let po = 0;
        let sqrt = Math.sqrt(i);
        
        for (let j = 1; j <= sqrt; j++) {
            if (i % j === 0) {
                po++;
                if (j !== i / j) {
                    po++;
                }
            }
        }
        
        if (po > limit) {
            result += power;
        } else {
            result += po;
        }
    }
    
    return result;
}