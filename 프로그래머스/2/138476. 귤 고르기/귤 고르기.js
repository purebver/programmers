function solution(k, tangerine) {
    const obj = {};
    for(let i = 0; i < tangerine.length; i++){
        if(obj[tangerine[i]]){
            obj[tangerine[i]]++;
        } else {
            obj[tangerine[i]] = 1;
        }
    }
    const arr = [];
    for(let key in obj){
        arr.push([key, obj[key]]);
    }
    arr.sort((a, b) => b[1] - a[1]);
    let result = 0;
    while(k > 0){
        k -= arr[result][1];
        result++;
    }
    return result;
}