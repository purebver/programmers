function solution(storey) {
    let result = 0;
    while(storey > 0){
        const num = storey % 10;
        storey = Math.floor(storey/10)
        if(num > 5){
            result += 10 - num;
            storey += 1;
        } else if(num === 5){
            result += num;
            if(storey % 10 >= 5){
                storey += 1;
            }
        }
        else {
            result += num;
        }
    }
    return result;
}