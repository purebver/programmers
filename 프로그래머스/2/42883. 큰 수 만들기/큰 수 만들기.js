function solution(number, k) {
    const stack = [];
    for(let num of number){
        while(k > 0 && stack[stack.length - 1] < num){
            stack.pop();
            k--;
        }
        stack.push(num);
    }
    while(k > 0){
        stack.pop();
        k--;
    }
    return stack.join('')
}