function solution(n, m, section) {
    let arr = new Array(n).fill(1);
    let result = 0;
    section.forEach(a => {
        if(arr[a - 1] !== 0){
            result++;
            for(let i = 0; i < m; i++){
                arr[a - 1 + i] = 0;
            }
        }
    })
    return result;
}