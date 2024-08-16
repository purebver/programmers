function solution(s) {
    let result = 0;
    let x = s[0];
    let x_count = 1;
    let y_count = 0;
    while(s.length > 0){
        for(let i = 1; i <= s.length; i++){
            if(x_count === y_count){
                x = s[i];
                x_count = 1;
                y_count = 0;
                s = s.slice(i);
                result++;
                break;
            }
            if(i === s.length){
                result++;
                s = s.slice(i);
                break;
            }
            if(x === s[i]){
                x_count++;
            } else {
                y_count++
            }
        }
    }
    return result;
}