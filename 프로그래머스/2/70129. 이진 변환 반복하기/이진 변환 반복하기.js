function solution(s) {
    let x = s.split('');
    const count = [0, 0];
    while(x.length > 1){
        x = x.filter(a => {
            if(a === '1'){
                return true;
            } else {
                count[1]++;
                return false;
            }
        })
        let temp = x.length.toString(2);
        x = temp.split('');
        count[0]++;
    } 
    return count;
}