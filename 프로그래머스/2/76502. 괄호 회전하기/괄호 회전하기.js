function solution(s) {
    const arr = s.split('');
    const map = new Map()
    map.set('[', ']');
    map.set('(', ')');
    map.set('{', '}');
    let count = 0;
    const cal = (num) => {
        const stack = [];
        for(let i = 0; i < s.length; i++){
            let temp = i + num
            if(temp >= s.length){
                temp -= s.length
            }
            if(map.get(arr[temp])){
              stack.push(arr[temp])
            } else if(map.get(stack[stack.length - 1]) === arr[temp]){
                stack.pop()
            } else {
                return false
            }
        }
        if(stack.length === 0){
            return true
        }
        return false
    }
    for(let i = 0; i < s.length; i++){
        if(cal(i)){
            count++;
        }
    }
    return count;
}