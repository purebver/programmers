function solution(keymap, targets) {
    let result = Array(targets.length).fill(0);
    targets.forEach((a, b) => {
        for(let char of a){
            let temp = 404;
            keymap.forEach(x => {
                let index = x.indexOf(char);
                if(index < 0){
                    temp = temp;
                } else {
                    temp = Math.min(index + 1, temp);
                }
            });
            if(temp === 404){
                result[b] = -1;
                break;
            } else {
                result[b] += temp;
            }
        }
    })
    return result;
}