function solution(today, terms, privacies) {
    const datecul = arr => {
        return parseInt(arr[0]) * 12 * 28 + parseInt(arr[1]) * 28 + parseInt(arr[2]);
    }
    const termsobj = {};
    terms.forEach(a => {
        let temp1 = a.split(' ');
        termsobj[temp1[0]] = parseInt(temp1[1]) * 28;
    })
    const today_day = datecul(today.split('.'));
    
    const receive = [];
    const type = [];
    privacies.forEach(a => {
        let temp2 = a.split(' ');
        receive.push(datecul(temp2[0].split('.')));
        type.push(temp2[1]);
    })
    
    const result = receive.map((a, b) => {
        let temp3 = today_day - a;
        if(temp3 >= termsobj[type[b]]){
            return b + 1;
        } else {
            return -1;
        }
    }).filter(a => a !== -1);
    
    return result;
}