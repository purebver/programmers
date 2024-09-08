function solution(citations) {
    const obj = {};
    for(let i = 1; i <= citations.length; i++){
        obj[i] = 0;
        for(let j = 0; j < citations.length; j++){
            if(i <= citations[j]){
                obj[i]++;
            }
        }
    }
    let maxresult = 0;
    for(let key in obj){
        if(Number(key) <= obj[key]){
            maxresult = Math.max(maxresult, Number(key));
        }
    }
    return maxresult;
}