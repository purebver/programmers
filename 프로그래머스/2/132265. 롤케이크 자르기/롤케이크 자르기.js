function solution(topping) {
    const cakeA = new Map();
    const cakeB = new Map();
    let result = 0;
    topping.forEach(a => {
        if(cakeB.get(a)){
            cakeB.set(a, cakeB.get(a) + 1);
        } else {
            cakeB.set(a, 1);
        }
    })
    topping.forEach(a => {
        if(cakeA.get(a)){
            cakeA.set(a, cakeA.get(a) + 1);
        } else {
            cakeA.set(a, 1);
        }
        if(cakeB.get(a) === 1){
            cakeB.delete(a);
        } else {
            cakeB.set(a, cakeB.get(a) - 1);
        }
        if(cakeB.size === cakeA.size){
            result++
        }
    })
    return result;
}