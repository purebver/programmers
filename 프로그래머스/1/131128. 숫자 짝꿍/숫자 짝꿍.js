function solution(X, Y) {
    let xcount = Array(10).fill(0);
    let ycount = Array(10).fill(0);
    for(let a of X){
        xcount[a]++;
    }
    for(let a of Y){
        ycount[a]++;
    }
    let result = '';
    for(let i = 9; i >= 0; i--){
        if(xcount[i] !== 0 && ycount[i] !== 0){
            result += i.toString().repeat(Math.min(xcount[i], ycount[i]));
        }
    }
    if(result === ''){
        return '-1';
    }
    if(result[0] === '0'){
        return '0';
    }
    return result;
}