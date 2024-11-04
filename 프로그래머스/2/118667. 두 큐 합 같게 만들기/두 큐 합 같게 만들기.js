function solution(queue1, queue2) {
    const totalque = [...queue1, ...queue2];
    let sum = totalque.reduce((a, b) => a + b);
    const targetsum = sum / 2;
    const max_count = queue1.length * 3;
    let left = 0;
    let right = queue1.length;
    let pointsum = queue1.reduce((a, b) => a + b);
    let result = 0;
    while(result < max_count){
        if(pointsum === targetsum){
            return result;
        }
        if(pointsum > targetsum){
            pointsum -= totalque[left];
            left++;
        } else {
            pointsum += totalque[right];
            right++;
        }
        result++;
    }
    return -1;
}