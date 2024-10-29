function solution(sequence, k) {
    let end = 0;
    let start = 0;
    let sum = 0;
    let result = [];
    for(let i = 0; i < sequence.length; i++){
        sum += sequence[i];
        end = i;
        while(sum > k){
            sum -= sequence[start];
            start++;
        }
        if(sum === k){
            if(result[0] !== undefined){
                result = end - start < result[1] - result[0] ? [start, end] : result;
            } else {
                result = [start, end];
            }
        }
    }
    return result;
}