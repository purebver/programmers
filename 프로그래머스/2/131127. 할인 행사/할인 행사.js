function solution(want, number, discount) {
    const wantobj = {};
    want.forEach((a, b) => {
        wantobj[a] = number[b];
    })
    const obj = {};
    for(let i = 0; i < 10; i++){
        if(obj[discount[i]]){
            obj[discount[i]]++;
        } else {
            obj[discount[i]] = 1;
        }
    }
    let count = 0;
    let boolean = true;
    for(let key in wantobj){
        if(wantobj[key] > obj[key] || obj[key] === undefined){
            boolean = false;
            break;
        }
    }
    if(boolean){
        count++;
    }
    boolean = true;
    for(let i = 10; i < discount.length; i++){
        if(obj[discount[i]]){
            obj[discount[i]]++
        } else {
            obj[discount[i]] = 1;
        }
        obj[discount[i - 10]]--;
        for(let key in wantobj){
            if(wantobj[key] > obj[key] || obj[key] === undefined){
                boolean = false;
                break;
            }
        }
        if(boolean){
            count++;
        }
        boolean = true;
    }
    return count;
}