function solution(players, callings) {
    let arr = [...players];
    let playersObj = {};
    players.forEach((a, b) => {
        playersObj[a] = b; 
    })
    callings.forEach(a => {
        let now = playersObj[a];
        if(now > 0){
            let target = arr[now - 1];
            arr[now - 1] = a;
            arr[now] = target;
            
            playersObj[a]--;
            playersObj[target]++;
        }
    })
    return arr;
}