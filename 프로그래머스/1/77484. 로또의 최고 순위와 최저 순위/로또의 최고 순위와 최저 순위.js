function solution(lottos, win_nums) {
    let obj1 = objmake(lottos);
    let obj2 = objmake(win_nums);
    let obj = {
        6: 1,
        5: 2,
        4: 3,
        3: 4,
        2: 5,
        1: 6,
        0: 6,
    }
    let count = [0, 0];
    for(let key in obj1){
        if(obj2[key]){
            count[1] += Math.min(obj1[key], obj2[key]);
        }
    }
    if(obj1[0]){
        count[0] = count[1] + obj1[0];
    } else {
        count[0] = count[1];
    }
    return [obj[count[0]], obj[count[1]]];
}
function objmake(arr) {
    let temp = {};
    for (let i = 0; i < 6; i++){
        if(temp[arr[i]]){
            temp[arr[i]]++;
        } else {
            temp[arr[i]] = 1;
        }
    }
    return temp;
}