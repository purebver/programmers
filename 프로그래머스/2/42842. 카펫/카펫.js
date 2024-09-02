function solution(brown, yellow) {
    const area = brown + yellow;
    console.log(area)
    let x = 1;
    while(true){
        if(yellow % x !== 0){
            x++;
            continue;
        }
        const temp = yellow / x;
        if((x + 2) * (temp + 2) === area){
            return [temp + 2, x + 2];
        }
        x++;
    }
}