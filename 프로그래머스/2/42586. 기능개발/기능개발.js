function solution(progresses, speeds) {
    let count = 0;
    const cal = (num, i) => {
        while(num < 100){
            num += speeds[i];
            count++;
        }
    }
    const result = [];
    let result_count = 0;
    for(let i = 0; i < progresses.length; i++){
        let bool = true;
        const sum = progresses[i] + speeds[i] * count;
        
        if(sum < 100){
            cal(sum, i);
            bool = false;
        }
        if(bool){
            result_count++;
        } else if (result_count !== 0){
            result.push(result_count);
            result_count = 1;
        } else {
            result_count++;
        }
    }
    result.push(result_count);
    return result;
}