function solution(n, lost, reserve) {
    let n_arr = Array(n).fill(1);
    lost.forEach(a => {
        n_arr[a - 1]--;
    })
    reserve.forEach(a => {
        n_arr[a - 1]++;
    })
    let result = 0;
    for(let i = 0; i < n_arr.length; i++){
        if(n_arr[i] === 2){
            if(i - 1 !== -1 && n_arr[i - 1] === 0){
                n_arr[i]--;
                n_arr[i - 1]++;
                result++;
            } else if (i + 1 <= n_arr.length && n_arr[i + 1] === 0){
                n_arr[i]--;
                n_arr[i + 1]++;
            } else {
                n_arr[i]--;
            }
            result++;
        } else if(n_arr[i] === 1){
            result++;
        }
    }
    return result;
}