function solution(order) {
    const temp = [];
    let result = 0;
    for(let i = 1; i <= order.length; i++){
        temp.push(i);
        while(temp.length > 0 && temp[temp.length - 1] === order[result]){
            temp.pop();
            result++;
        }
    }
    return result;
}