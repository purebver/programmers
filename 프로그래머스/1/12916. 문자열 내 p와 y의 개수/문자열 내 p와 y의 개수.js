function solution(s){
    let temp = s.toLowerCase().split('');
    let count_p = 0;
    let count_y = 0;
    temp.forEach(a => {
        if(a === "p"){
            count_p++;
        }
        if(a === "y"){
            count_y++;
        }
    })
    return count_p === count_y ? true : false;
}