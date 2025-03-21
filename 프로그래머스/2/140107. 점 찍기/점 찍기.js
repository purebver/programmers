function solution(k, d) {
    let result = 0;
    for(let i = 0; i <= d; i += k){
        let maxY = Math.floor(Math.sqrt(d**2 - i**2));
        result += Math.floor(maxY / k) + 1;
    }
    return result;
}