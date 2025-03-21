function solution(book_time) {
    // 최소한의 객실만 사용
    // 겹친 시간 === 다른객실
    // 청소시간 10분
    // 시간 => 분
    const room = {};
    const times = [];
    const check = new Set();
    for(const [start, end] of book_time){
        const startM = start.split(':').reduce((a, b) => Number(a) * 60 + Number(b));
        const endM = end.split(':').reduce((a, b) => Number(a) * 60 + Number(b)) + 10;
        times.push([startM, endM]);
    }
    times.sort((a, b) => a[0] - b[0]);
    let result = times.length;
    for(let i = 0; i < times.length; i++){
        if(check.has(i)){
            continue;
        }
        let [start, end] = times[i];
        for(let j = i + 1; j < times.length; j++){
            if(check.has(j)){
                continue;
            }
            const [startj, endj] = times[j];
            if(end <= startj){
                result--;
                check.add(j);
                end = endj;
            }
        }
    }
    return result;
}