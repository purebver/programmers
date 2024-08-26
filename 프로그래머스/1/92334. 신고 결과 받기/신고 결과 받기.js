function solution(id_list, report, k) {
    const count = {}
    const setreport = new Set(report);
    setreport.forEach(a => {
        const temp = a.split(' ');
        if(count[temp[1]]){
            count[temp[1]]++;
        } else {
            count[temp[1]] = 1;
        }
    })
    console.log(count);
    const mailcount = {};
    id_list.forEach(a => {
        mailcount[a] = 0;
    })
    console.log(mailcount);
    setreport.forEach(a => {
        const temp = a.split(' ');
        if(count[temp[1]] >= k){
            mailcount[temp[0]]++;
        }
    })
    console.log(mailcount);
    const result = [];
    for(let key in mailcount){
        result.push(mailcount[key]);
    }
    return result;
}