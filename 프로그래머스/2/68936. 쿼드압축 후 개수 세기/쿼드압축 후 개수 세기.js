function solution(arr) {
    const result = [0, 0]
    const cal = (istart, ileng, jstart, jleng) => {
        const firstval = arr[istart][jstart]
        let boolean = true;
        for(let i = istart; i < ileng; i++){
            for(let j = jstart; j < jleng; j++){
                if(arr[i][j] !== firstval){
                    boolean = false;
                    break;
                }
            }
            if(!boolean) break;
        }
        if(!boolean){
            const ilength = (istart + ileng) / 2;
            const jlength = (jstart + jleng) / 2
            cal(istart, ilength, jstart, jlength);
            cal(istart, ilength, jlength, jleng);
            cal(ilength, ileng, jstart, jlength)
            cal(ilength, ileng, jlength, jleng);
        } else {
            result[firstval]++;
        }
    }
    cal(0, arr.length, 0, arr.length)
    return result
}