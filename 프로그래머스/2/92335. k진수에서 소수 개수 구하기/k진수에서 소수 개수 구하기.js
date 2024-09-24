function solution(n, k) {
    let result = 0;
    const kNumber = n.toString(k)
    let findzero = -1;
    for(let i = 0; i < kNumber.length; i++){
        if(Number(kNumber[i]) === 0){
            const num = Number(kNumber.slice(findzero + 1, i))
            console.log(num)
            findzero = i;
            if(cal(num)){
                result++;
            }
        } else if(i === kNumber.length - 1){
            const num = Number(kNumber.slice(findzero + 1))
            console.log(num)
            if(cal(num)){
                result++;
            }
        }
        
    }
    return result;
}
function cal(num) {
    if(num === 1 || num === 0){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}