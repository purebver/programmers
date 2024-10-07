function solution(x, y, n) {
    const array = [[y, 0]];
    const set = new Set();
    while(array.length > 0){
        let [val, count] = array.shift();
        if(val < x || set.has(val)) continue;
        if(val === x) return count;
        set.add(val)
        if(val % 3 === 0) array.push([val / 3, count + 1])
        if(val % 2 === 0) array.push([val / 2, count + 1])
        array.push([val - n, count + 1])
    }
    return -1
}