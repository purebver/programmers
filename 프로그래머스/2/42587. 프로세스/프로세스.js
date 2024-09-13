function solution(priorities, location) {
    let obj = {};
    priorities.forEach(a => {
        if(obj[a]){
            obj[a]++;
        } else {
            obj[a] = 1;
        }
    })
    const keys = Object.keys(obj).map(Number);
    
    let result = 0;
    let result_index = location;
    let priorities_index = 0;
    let keys_index = keys.length - 1;
    let length = priorities.length;
    
    while(true){
        if(priorities[priorities_index] === keys[keys_index]){
            result++;
            if(priorities_index === result_index){
                return result;
            }
            length--;
            obj[keys[keys_index]]--;
            if(obj[keys[keys_index]] === 0){                
                keys_index--;
            }
        } else {
            priorities.push(priorities[priorities_index]);
            if(priorities_index === result_index){
                result_index += length;
            }
        }
        priorities_index++;
    }
}